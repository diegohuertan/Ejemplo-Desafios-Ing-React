import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function SuperheroCard({superheros}) {


  return (
        <Card sx={{ marginLeft: 5, width: 300, height: 'auto', marginTop: 5, marginBottom: 2, marginRight: 0 ,backgroundColor:'whitesmoke'}}>
          <CardHeader title={superheros.name} />
          <CardMedia
            component="img"
            maxWidth="300"
            height="300"
            image={superheros.images.lg}
            alt={superheros.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Intelligence: {superheros.powerstats.intelligence}<br />
              Strength: {superheros.powerstats.strength}<br />
              Speed: {superheros.powerstats.speed}<br />
              Durability: {superheros.powerstats.durability}<br />
              Power: {superheros.powerstats.power}<br />
              Combat: {superheros.powerstats.combat}
            </Typography>
          </CardContent>
        </Card>
  );
}