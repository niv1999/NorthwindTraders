import axios from "axios";
import { ProductModel } from "../Models/ProductModel";
import { appConfig } from "../Utils/AppConfig";
import { productActions, store } from "../Redux/state";

class ProductsService {
	
    // Function returning Promise which reports Product array:
    public async getAllProducts(): Promise<ProductModel[]> {

        // If we have products in the global state:
        if(store.getState().products.length > 0) {
            return store.getState().products;
        }

        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const products = response.data;

        // Save products in the global state:
        store.dispatch(productActions.init(products));

        return products;
    }

    // Get one product by id:
    public async getOneProduct(id: number): Promise<ProductModel> {
        const desiredProduct = store.getState().products.find(p => p.id === id);
        if(desiredProduct) return desiredProduct;
        const response = await axios.get<ProductModel>(appConfig.productsUrl + id);
        const product = response.data;
        return product;
    }

    // Add product:
    public async addProduct(product: ProductModel): Promise<void> {

        // Tell axios to send text and image:
        const options = {
            headers: {
                "content-type": "multipart/form-data" // Send to backend text and also files.
            }
        };
        const response = await axios.post<ProductModel>(appConfig.productsUrl, product, options);
        const dbProduct = response.data;

        // Add the added product to the global state:
        const action = productActions.add(dbProduct); // add function is called "Action Creator"
        store.dispatch(action); // Sending the action to Redux through the dispatch method.
    }

    // Update product:
    public async updateProduct(product: ProductModel): Promise<void> {

        // Tell axios to send text and image:
        const options = {
            headers: {
                "content-type": "multipart/form-data" // Send to backend text and also files.
            }
        };
        const response = await axios.put<ProductModel>(appConfig.productsUrl + product.id, product, options);
        const dbProduct = response.data;
        
        // Update the product in the global state:
        store.dispatch(productActions.update(dbProduct));
    }

    // Delete product:
    public async deleteProduct(id: number): Promise<void> {

        // Delete in the server
        await axios.delete(appConfig.productsUrl + id);

        // Delete in the global state:
        store.dispatch(productActions.remove(id));
    }
}

export const productsService = new ProductsService();
