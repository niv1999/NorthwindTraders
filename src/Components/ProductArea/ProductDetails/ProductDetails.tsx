import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productsService } from "../../../Services/ProductsService";
import { notify } from "../../../Utils/Notify";
import { NavLink } from "react-router-dom";

export function ProductDetails(): JSX.Element {

    const params = useParams(); // React Hook
    const id = +params.id; // Same name as the route parameter.

    const [product, setProduct] = useState<ProductModel>();
    const navigate = useNavigate();

    useEffect(() => {
        productsService.getOneProduct(id)
        .then(dbProduct => setProduct(dbProduct))
        .catch(err => notify.error(err))
    }, []);
    
    async function deleteMe() {
        try {
            const sure = window.confirm("Are you sure?");
            if (!sure) return;
            await productsService.deleteProduct(id);
            notify.success("Product deleted.");
            navigate("/products");
        }
        catch(err: any) {
            notify.error(err)
        }
    }

    return (
        <div className="ProductDetails">
			<h3>Name: {product?.name}</h3>
			<h3>Price: ${product?.price}</h3>
			<h3>Stock: {product?.stock}</h3>
            <img src={product?.imageUrl} />
            <NavLink to= "/products">Back</NavLink>
            <span> | </span>
            <NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
            <span> | </span>
            <NavLink to= "#" onClick={deleteMe}>Delete</NavLink>
        </div>
    );
}
