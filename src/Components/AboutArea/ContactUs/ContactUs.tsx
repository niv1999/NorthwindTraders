import { Button, ButtonGroup, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField, TextareaAutosize, Typography } from "@mui/material";
import { useTitle } from "../../../Utils/UseTitle";
import "./ContactUs.css";

export function ContactUs(): JSX.Element {

    useTitle("Contact Us");
    
    return (
        <div className="ContactUs">
			
            <Typography variant="h4">Contact Us</Typography>

            <form>

                <TextField label="Full Name" variant="outlined" className="textBox"/>

                <TextField label="Email" variant="outlined" className="textBox"/>

                <FormControl fullWidth>
                    <InputLabel>Contact Us Reason</InputLabel>
                    <Select label="Contact Us Reason" className="textBox" defaultOpen>
                        <MenuItem value={1}>Feedback 📝</MenuItem>
                        <MenuItem value={2}>Need Help 🆘</MenuItem>
                        <MenuItem value={3}>Report Bug 🐜</MenuItem>
                        <MenuItem value={4}>Other ❓</MenuItem>
                    </Select>
                </FormControl>

                <TextField label="Message" variant="outlined" className="textBox" multiline rows={3}/>

                <FormControlLabel control={<Checkbox />} label="Send me promotional emails"/>
                
                <ButtonGroup fullWidth variant="contained">
                    <Button color="primary">Send</Button>
                    <Button color="secondary" type="reset">Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}
