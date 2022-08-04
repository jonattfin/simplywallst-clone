import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import _ from "lodash";
import { PortolioDataType } from "../../../api/graphql-types";

export default function PortfolioCard({
  portfolio,
}: {
  portfolio: PortolioDataType;
}) {
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
            {`${portfolio.name} (${_.capitalize(portfolio.currency)})`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Created: ${portfolio.created}, Includes: ${portfolio.companies.length} holdings`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
