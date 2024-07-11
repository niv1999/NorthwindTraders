import axios from "axios";
import { CredentialsModel } from "../Models/CredentialsModel";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { store, userActions } from "../Redux/state";
import { jwtDecode } from "jwt-decode";

class UserService {

    public constructor() {

        // Extract token from local storage if exists:
        const token = localStorage.getItem("token");

        // If no token- do nothing:
        if (!token) return;

        // If we have a token - decode it:
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Create action object containing the logged-in user:
        const action = userActions.login(dbUser);

        // Save logged-in user in global state:
        store.dispatch(action);
    }
	
    public async login(credentials: CredentialsModel): Promise<void> {

        // Send credentials to backend:
        const response = await axios.post<string>(appConfig.loginUrl, credentials);

        // Extract token from axios response:
        const token = response.data;

        // Extract user from token:
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Create action object containing the logged-in user:
        const action = userActions.login(dbUser);

        // Save logged-in user in global state:
        store.dispatch(action);

        // Save token to local storage:
        localStorage.setItem("token", token);
    }

    public async register(user: UserModel): Promise<void> {

        // Send user to backend:
        const response = await axios.post<string>(appConfig.registerUrl, user);

        // Extract token from axios response:
        const token = response.data;

        // Extract user from token:
        const dbUser = jwtDecode<{ user: UserModel }>(token).user;

        // Create action object containing the registered user:
        const action = userActions.register(dbUser);

        // Save registered user in global state:
        store.dispatch(action);

        // Save token to local storage:
        localStorage.setItem("token", token);
    }

    public logout(): void {
        // Create action object for logout:
        const action = userActions.logout();

        // Logout user from global state:
        store.dispatch(action);

        // Remove token from local storage:
        localStorage.removeItem("token");
    }
}

export const userService = new UserService();
