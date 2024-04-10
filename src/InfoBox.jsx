import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1575371381314-c2a1bd533968?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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
                <Card sx={{ display: 'flex', maxWidth: 700 }}>
                    {/* Image on the left */}
                    <span>
                        <CardMedia
                            sx={{ width: 300, height: 400 }}
                            image={info.humidity > 60 ? RAIN_URL : info.temp > 16 ? HOT_URL : COLD_URL}
                            title="image" />
                    </span>
                    {/* Content on the right */}
                    <span style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <b>{info.city} {info.humidity > 60 ? <ThunderstormIcon /> : info.temp > 16 ? <WbSunnyIcon /> : <AcUnitIcon />}</b>
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
                    </span>
                </Card>
            </div>
        </div>

    );
}