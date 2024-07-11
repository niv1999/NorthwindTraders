import { NavLink } from "react-router-dom";
import "./Menu.css";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/state";
import { UserModel } from "../../../Models/UserModel";
import { RoleModel } from "../../../Models/RoleModel";

export function Menu(): JSX.Element {
    
    const user = useSelector<AppState, UserModel>(store => store.user);

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            {/* end = only exact route will paint the menu */}
            <NavLink to="/products" end>Products</NavLink>


            {user && <NavLink to="/products/new">Add Product</NavLink>}
            
            <NavLink to="/about">About</NavLink>
            
            <NavLink to="/contact-us">Contact Us</NavLink>

            {user?.role === RoleModel.Admin && <NavLink to="#">Show Statistics</NavLink>}
            {/* Show total products: */}
            <TotalProducts />

            {/* <a> will reload the entire page again, and not just the component */}
			
        </div>
    );
}
