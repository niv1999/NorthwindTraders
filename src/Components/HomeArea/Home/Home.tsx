import { Notyf } from "notyf";
import "./Home.css";
import { notify } from "../../../Utils/Notify";
import burgerImgSource from "../../../Assets/Images/burger.jpg"
import pastaImgSource from "../../../Assets/Images/pasta.webp"
import pizzaImgSource from "../../../Assets/Images/pizza.jpg"
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {

    // function displaySuccess(): void{
    //     notify.success("Success message...");
    // }

    // function displayError(): void{
    //     notify.error("Error message...")
    // }

    useTitle("Home Page");

    return (
        <div className="Home">
            
            <p>Northwind Company is a leading provider of high-quality products and services in the global market. With a commitment to excellence and customer satisfaction, we strive to deliver innovative solutions that meet the evolving needs of our clients. Explore our diverse range of offerings and experience the Northwind difference today.</p>
            
            <div className="img-container">
                <img src={burgerImgSource}/>
                <img src={pastaImgSource}/>
                <img src={pizzaImgSource}/>
            </div>
        {/* <button onClick={displaySuccess}>Success Message</button>

            <button onClick={displayError}>Error Message</button> */}

        </div>
    );
}
