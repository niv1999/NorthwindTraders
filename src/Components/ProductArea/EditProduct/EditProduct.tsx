import { useForm } from "react-hook-form";
import "./EditProduct.css";
import { ProductModel } from "../../../Models/ProductModel";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { productsService } from "../../../Services/ProductsService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";

export function EditProduct(): JSX.Element {

    useTitle("Edit Product");
    
    const {register, handleSubmit, setValue} = useForm<ProductModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        productsService.getOneProduct(id)
            .then(dbProduct => {
                setValue("name", dbProduct.name); // setValue initialize text box.
                setValue("price", dbProduct.price); 
                setValue("stock", dbProduct.stock); 
            })
            .catch(err => notify.error(err))
    }, []);
    
    async function send(product: ProductModel) {
        try{
            product.id = id;
            product.image = (product.image as unknown as FileList)[0];
            await productsService.updateProduct(product);
            notify.success("Product updated.");
            navigate("/products")
        }
        catch(err: any) {
            notify.error(err);
        }
    }
    
    return (
        <div className="EditProduct">
			 <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("name")} />

                <label>Price: </label>
                <input type="number" step="0.01" {...register("price")} />

                <label>Stock: </label>
                <input type="number" {...register("stock")} />

                <label>Image: </label>
                <input type="file" accept="image/*" {...register("image")}/>

                <button>Update</button>
            </form>
        </div>
    );
}
