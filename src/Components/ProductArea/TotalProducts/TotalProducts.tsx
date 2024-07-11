import { useEffect, useState } from "react";
import { AppState, store } from "../../../Redux/state";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {
    
    const count = useSelector<AppState, number>(appState => appState.products.length);
        
    // const [count, setCount] = useState<number>(0);

    // useEffect(() => {

    //     const unsubscribe = store.subscribe(() => {
    //         setCount(store.getState().products.length);
    //     });

    //     // Returns when component destroyed:
    //     return () => {
    //         // Stop listening - stop subscribing:
    //         unsubscribe();
    //     };

    // }, []);

    return (
        <div>
			<span>Total Products: </span>
			<span>{count}</span>
            <span>🍕</span>
        </div>
    );
}
