import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { notify } from "../../../Utils/Notify";
import { userService } from "../../../Services/UserService";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";

export function Register(): JSX.Element {

    useTitle("Register");
    
    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await userService.register(user);
            notify.success("Welcome!");
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit(send)}>

                <label>First Name:</label>
                <input type="text" {...register("firstName")} />

                <label>Last Name:</label>
                <input type="text" {...register("lastName")} />

                <label>Email:</label>
                <input type="email" {...register("email")} />

                <label>Password:</label>
                <input type="password" {...register("password")} />

                <button>Register</button>

            </form>
        </div>
    );
}
