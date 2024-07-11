import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
    product: ProductModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
    
    const navigate = useNavigate();

    function showDetails(): void {
        // Navigate to: "/products/details/___the-id___"
        navigate("/products/details/" + props.product.id);
    }
    
    return (
        <div className="ProductCard" onClick={showDetails}>

			<div className="leftDiv">
                <span><b>{props.product.name}</b></span>
                <span>Price: ${props.product.price}</span>
                <span>Stock: {props.product.stock}</span>
            </div>

            <div className="rightDiv">
                <img src={props.product.imageUrl} />
            </div>

        </div>
    );
}
