import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Portfolio } from "../../../api/data-types";

export default function PortfolioCard({ portfolio }: { portfolio: Portfolio }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={portfolio.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {portfolio.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Created: ${portfolio.created}, Includes: ${
              portfolio.companies.length
            } holdings`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
