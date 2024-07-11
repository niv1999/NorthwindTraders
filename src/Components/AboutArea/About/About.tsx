import { useTitle } from "../../../Utils/UseTitle";
import { FacebookPage } from "../FacebookPage/FacebookPage";
import "./About.css";

export function About(): JSX.Element {

    useTitle("About");
    
    return (
        <div className="About">
            <FacebookPage />
        </div>
    );
}
