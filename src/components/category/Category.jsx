import React from 'react';
import {Stack} from '@mui/material'
import {category} from '../constans/index'
import {Colors} from '../constans/Colors'
function Category({selectedHandler, selectedCategory}) {
  return (
      <Stack direction={'row'} sx={{overflow: "scroll"}}> 
       {category.map(item =>(
           <button
            style={{borderRadius: "0", 
            background: item.name == selectedCategory && Colors.secondary,
            color: item.name == selectedCategory && '#fff'
          }}
             key={item.name}
             className="category-btn"
             onClick={ () => selectedHandler(item.name)}
             > 
            <span style={{color: item.name == selectedCategory ? "#fff" : Colors.secondary, marginRight: "15px" }}>{item.icon}</span>
            <span style={{opacity: '1'}}>{item.name}</span>
            </button>
       ))}
      </Stack>
  );
}

export default Category;