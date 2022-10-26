
import { Grid } from "@mui/material";
import Pair from "components/pair";
import Alert from "@mui/material/Alert";

export default function Pairs({ data, curr }) {
 
  
  var results = Object.keys(data.rates).map((key) => `${key}\n${data.rates[key]}`);

  console.log(results)
  
  return (
<>
        <Grid container spacing={2}>
        {results
          .sort((a, b) => (a > b ? 1 : -1))
          .map((pair) => (
          
            <Grid key={pair} item xs={6} sm={3}>
              <Pair name={pair} curr={curr} />
            </Grid>
          ))}
      </Grid>
    </>


  );
}