import { configureStore, createSlice } from "@reduxjs/toolkit"
import { ProductModel } from "../Models/ProductModel"
import { add, init, login, logout, register, remove, update } from "./reducers";
import { UserModel } from "../Models/UserModel";

export type AppState = {
    products: ProductModel[]
    user: UserModel;
    // employees: EmployeeModel[];
    // suppliers: SupplierModel[];
}

// Products slice:
const productsSlice = createSlice({
    name: "products", // Internal use of Redux
    initialState: [], // The initial state
    reducers: { add, update, remove, init } // All reducers related to products
});

// User slice:
const userSlice = createSlice({
    name: "user", // Internal use of Redux
    initialState: null, // The initial state
    reducers: {login, register, logout} // All reducers related to user
});

// Exporting action objects:
export const productActions = productsSlice.actions; // Action Creator - function which creates new action objects
export const userActions = userSlice.actions;


// Store:
export const store = configureStore<AppState>({
    reducer: {
        // Relating each data in the AppState to the correct slice:
        products: productsSlice.reducer, // Reducer list goes into "products" variable which is the data returned from each reducer.
        user: userSlice.reducer
    }
});