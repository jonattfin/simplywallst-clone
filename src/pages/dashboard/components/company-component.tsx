import { Button, Stack } from "@mui/material";
import { Fragment } from "react";

export default function CompanyComponent() {
  return (
    <Fragment>
      <p>About the Company</p>
      <Stack direction="row" spacing={5}>
        <div>
          <p>Founded</p>
          <p>1762</p>
        </div>
        <div>
          <p>Employees</p>
          <p>57,000</p>
        </div>
        <div>
          <p>CEO</p>
          <p>Steven J. van Rijswijk</p>
        </div>
        <div>
          <p>Website</p>
          <a href="https://www.ing.com" target="_blank" rel="noreferrer">https://www.ing.com</a>
        </div>
        <p></p>
      </Stack>
      <p>
        ING Groep N.V., a financial institution, provides various banking
        products and services in the Netherlands, Belgium, Germany, Poland, Rest
        of Europe, North America, Latin America, Asia, and Australia.
      </p>
      <Button variant="outlined" size="small">
        Show more
      </Button>
    </Fragment>
  );
}
