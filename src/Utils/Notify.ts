import { Notyf } from "notyf";

class Notify {

	private notyf = new Notyf({ 
        duration: 3000,
        position: {x: "center", y: "top"},
        dismissible: true
     });
    
    public success(message: string): void {
        this.notyf.success(message)
    }

    public error(err: any): void {
        const message = this.extractErrorMessage(err);
        this.notyf.error(message)
    }

    private extractErrorMessage(err: any): string {

        // 1. Sending an error string, example: notify.error("You can't do that!"):
        if(typeof err === "string" && err !== "") return err;

        // 2. Axios throwing a 4xx or 5xx error:
        if(typeof err?.response?.data === "string" && err?.response?.data !== "") return err.response.data;

        // 3. Throwing some error, example: throw new Error("You can't do that!"):
            

        // 4. We didn't find the error message:
        // Note: if you get here, it is good to find the correct error message and add it to this function!
        return "Some error, please try again.";
    }
}

export const notify = new Notify();
