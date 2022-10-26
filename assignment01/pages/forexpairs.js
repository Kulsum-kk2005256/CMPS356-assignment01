import Pairs from "components/pairs";
import useSWR from "swr";
import { useState, useEffect } from 'react';
import Alert from "@mui/material/Alert";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ForexPairs() {


    const [currency, setCurrency] = React.useState('');
    useEffect(() => {
        let currFromStorage = localStorage.getItem('currency'); 
        if(currFromStorage!=null){
           setCurrency(JSON.parse(currFromStorage)) ;
        }
    
      },[]);
    const handleChange = (event) => {
      setCurrency(event.target.value);
      localStorage.removeItem('currency');
      localStorage.setItem('currency', JSON.stringify(event.target.value));
    };
    const fetcher = (...args) => fetch(...args).then((res) => res.json());


const { data, error } = useSWR(
    `https://api.exchangerate.host/latest?base=${currency}`,
    fetcher
  );


    
    if (error) return <Alert severity="error">{error.message}</Alert>;
    if (!data) return <Alert severity="info">Loading...</Alert>;
    var results = Object.keys(data.rates).map((key) => `${key}\n${data.rates[key]}`);
    let keys = Object.keys(data.rates);
    

    return <><div>
    <FormControl sx={{ m: 1, minWidth: 200 }}>
      <InputLabel id="currency">Base Currency</InputLabel>
      <Select
        labelId=".."
        id="..."
        value={currency}
        label="Currency"
        onChange={handleChange}
        onSelect={handleChange}
      >
        {keys.map((key) => (
          <MenuItem value={key}>{key}</MenuItem>
        ))}
      </Select>
    </FormControl>
    
  </div>
 

    <Pairs data={data} curr={currency}/>

  </>
}