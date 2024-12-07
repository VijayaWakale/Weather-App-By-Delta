import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({Info}){
    const INIT_URL="https://plus.unsplash.com/premium_photo-1678066986924-120fdbdf3439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let info={
        city: "Delhi",
        feelsLike: 31.24,
        humidity: 27,
        temp: 24.05,
        tempMax: 24.05,
        tempMin: 24.05,
        weather: "haze",
    };
      
    return (<div className="InfoBox">
        {/* <h1>WheatherInfo - {Info.weather}</h1> */}
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" component={"span"}      sx={{ color: 'text.secondary'  } }>
          <p>Temperature={Info.temp}&deg;C</p>
           <p>Humidity={Info.humidity}</p>
           <p>Min Temp={Info.tempMin}&deg;C</p>
           
           <p>Max Temp={Info.tempMin}&deg;C</p>
           <p>The weather can be described as <i>{Info.weather}</i> and feels like {Info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
   
    </div>
    </div>
    );
}