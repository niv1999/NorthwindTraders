import "./PageNotFound.css";
import img404 from "../../../Assets/Images/img404.webp"
import { useTitle } from "../../../Utils/UseTitle";

export function PageNotFound(): JSX.Element {

    useTitle("ERROR 404");
    
    return (
        <div className="PageNotFound">
            <p>The page you are looking for doesn't exist.</p>
            <img src={img404}/>
        </div>
    );
}
