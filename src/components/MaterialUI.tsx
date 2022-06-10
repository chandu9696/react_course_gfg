import { Button, Card, CardActionArea, CardContent, CardMedia, CircularProgress, TextField, Typography } from "@mui/material";

export default function MaterialUI()
{
    return(
        <>
        <TextField className='test' id="standard-basic" label="Standard" variant="standard" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Contained</Button>
     
    <CircularProgress />
    <Card>
        <CardActionArea>
            <CardMedia image="https://rc.jiomeet.com/assets/img/website/hero_animation_loggedin_desktop.svg"></CardMedia>
            <CardContent>
                <p>Hellp Words</p>
            </CardContent>
        </CardActionArea>
    </Card>


        </>
    )
}