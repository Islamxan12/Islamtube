import React,{useState} from "react";
import { Paper, IconButton } from "@mui/material";
import { Colors } from "../constans/Colors";
import { Search } from "@mui/icons-material";
import {useNavigate} from 'react-router-dom';

function SearchBar() {
 
  const [value, setValue] = useState('')
  const navigate= useNavigate()

  const submitHandler = (e) =>{
    e.preventDefault()
    if(value){
      navigate(`/search/${value}`)
      setValue('')
    }
   
  }
  
  return (
    <Paper
      component={"form"}
      onSubmit={submitHandler}
      sx={{ border: `1px solid ${Colors.secondary}`,
       pl: 2,
       boxShadow: "none",
       borderRadius: "none",
       mr: 5
      }}
    >
      <input
      value={value}
      onChange={e => setValue(e.target.value)}
       className="search-bar"
       type="text"
        placeholder="Search..."
         />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
