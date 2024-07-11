import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { About } from "../../AboutArea/About/About";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { Login } from "../../UserArea/Login/Login";
import { Register } from "../../UserArea/Register/Register";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">

            {/* Collection of routes: */}
            <Routes>

                {/* Login Route: */}
                <Route path="/login" element={<Login />} /> 

                {/* Register Route: */}
                <Route path="/register" element={<Register />} /> 

                {/* Home Route: */}
                <Route path="/home" element={<Home />}/>

                {/* Products Route: */}
                <Route path="/products" element={<ProductList />}/>

                {/* Products Details Route: */}
                <Route path="/products/details/:id" element={<ProductDetails />}/>

                {/* Add Product Route: */}
                <Route path="/products/new" element={<AddProduct />}/>

                {/* Edit Product Route: */}
                <Route path="/products/edit/:id" element={<EditProduct />}/>

                {/* About Route: */}
                <Route path="/about" element={<About />}/>

                {/* Default Route (redirect to "/home"): */}
                <Route path="/" element={<Navigate to="/home" />}/>

                {/* Contact Us Route: */}
                <Route path="/contact-us" element={<ContactUs />}/>

                {/* Page Not Found Route: */}
                <Route path="*" element={<PageNotFound />}/>

            </Routes>
			
        </div>
    );
}
