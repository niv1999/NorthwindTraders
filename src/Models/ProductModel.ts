export class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string; // The url for a saved image.
    public image: File; // Image file to send to backend when adding an image.
}