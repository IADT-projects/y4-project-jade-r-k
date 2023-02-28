import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const StaticNav = () => {
    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <Typography className="f1" variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    Static
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Button component={Link} to='/static/gallery' color="inherit">Gallery</Button>
                        <Button component={Link} to='/static/form' color="inherit">Contact Form</Button>
                        <Button component={Link} to='/interactive/' color="inherit" variant="outlined">Interactive</Button>
                    </Stack>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default StaticNav;