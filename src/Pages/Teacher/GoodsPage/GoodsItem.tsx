import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

type TProps = {
  description?: string;
  id: string;
  image?: string;
  is_active: boolean;
  price: number;
  title: string;
};

export default function GoodsItem({
  title,
  price,
  description,
  image,
}: TProps) {
  return (
    <Card sx={{ width: 300 }}>
      <CardMedia
        image={image}
        component="img"
        sx={{
          objectFit: "contain",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
}
