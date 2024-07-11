import { useForm } from "react-hook-form";
import "./AddProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { notify } from "../../../Utils/Notify";
import { productsService } from "../../../Services/ProductsService";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/state";
import { UserModel } from "../../../Models/UserModel";
import { useEffect } from "react";

export function AddProduct(): JSX.Element {

    useTitle("Add Product");
    
    const { register, handleSubmit } = useForm<ProductModel>();
    const navigate = useNavigate();

    // Block anonymous users:
    const user = useSelector<AppState, UserModel>(store => store.user);
    useEffect(() => {
        if(!user) {
            notify.error("You are not logged in!")
            navigate("/login");
        }
    }, [])
    

    async function send(product: ProductModel) {
        try{
            // Convert image to FileList for extracting the image from the array:
            product.image = (product.image as unknown as FileList)[0];

            // Send to backend:
            await productsService.addProduct(product);

            notify.success("Product added.");

            navigate("/products")
        }
        catch(err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="AddProduct">
			
            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} required minLength={2} maxLength={100}/>

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} required min="0" max="1000" />

                <label>Stock: </label>
                <input type="number" {...register("stock")} required min="0" max="1000" />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")} required />

                <button>Add</button>
            </form>
        </div>
    );
}
