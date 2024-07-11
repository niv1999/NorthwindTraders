import { useEffect } from "react";

// Custom hook:
export function useTitle(title: string): void {
    useEffect(() => {
        document.title = title;
    }, []);
}