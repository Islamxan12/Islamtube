import React from "react";
import { Stack, Box } from "@mui/material";
import {VideoCard, ChanelCard, Loader} from "../index";
function Videos({ videos }) {
  
  if(!videos.length) return <Loader/>

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      alignItems={"canter"}
      gap={2}
    >{ 
       videos.map(item =>(
        <Box key={item.id.videoId}>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.chanelId && <ChanelCard video={item}/>}
        </Box>
       ))
    } 
    </Stack>
  );
}

export default Videos;
