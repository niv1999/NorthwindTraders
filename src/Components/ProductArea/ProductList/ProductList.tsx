import { useEffect, useState } from "react";
import { productsService } from "../../../Services/ProductsService";
import { notify } from "../../../Utils/Notify";
import "./ProductList.css";
import { ProductModel } from "../../../Models/ProductModel";
import { ProductCard } from "../ProductCard/ProductCard";
import { useTitle } from "../../../Utils/UseTitle";

export function ProductList(): JSX.Element {

    useTitle("Product List");
    
    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        const a = 10;
        console.log(a);
        
        // Side-Effect:
        productsService.getAllProducts()
        .then(dbProducts => setProducts(dbProducts))
        .catch(err => notify.error(err));
    }, []);

    return (
        <div className="ProductList">
			{products.map(p => <ProductCard key={p.id} product={p}/>)}
        </div>
    );
}
