import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox(info) {
    const INIT_URL = "https://images.unsplash.com/photo-1646069816777-7e8a69b0596f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjYXR0ZXJlZCUyMGNsb3Vkc3xlbnwwfHwwfHx8MA%3D%3D";

    // defined in WeatherApp.jsx
    // let info = {
    //     city: "Agra",
    //     feelsLike: 35.95,
    //     humidity: 5,
    //     temp: 39.54,
    //     tempMax: 39.54,
    //     tempMin: 39.54,
    //     weather: "scattered clouds"
    // }

    return (
        <div className="InfoBox">
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 400 }}>
                    <CardMedia
                        sx={{ height: 200 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            <b>{info.city}</b>
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature- {info.temp}&deg;C</p>
                            <p>Humidity- {info.humidity}</p>
                            <p>Minimum Temperature- {info.tempMin}&deg;C</p>
                            <p>Maximum Temperature- {info.tempMax}&deg;C</p>
                            <p>The Weather can be described as <i>{info.weather}</i> and feels
                                like {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}