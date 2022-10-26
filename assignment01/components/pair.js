import {
  IconButton,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  TextField,
  Typography,
} from "@mui/material";

export default function Pair({ name,curr }) {
  if(curr==''){
    curr="USD"
  }
  return <Card>
  <CardContent>
    <Typography
      sx={{ fontSize: 14 }}
      color="text.secondary"
      gutterBottom
    >
      {curr}/{name}
    </Typography>
  </CardContent>
</Card>;
}

