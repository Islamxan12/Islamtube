import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api.service";
import {Box, Chip} from '@mui/material'
import ReactPlayer from 'react-player'
import { Tag } from "@mui/icons-material";
function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);
  

  // const  {
  //   snippet: { title, channelId, description, tags, thumbnails },
  //   statistics: { viewCount, likeCount, commentCount },
  // } = videoDetail

  return(
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'}>
       <Box width={'75%'}>
        <ReactPlayer
         controls
         className="reactPlayer"
        url={`https://www.youtube.com/watch?v=${id}`}/>
{/* 
          {videoDetail.snippet.tags.map((item, idx) =>(
            <Chip
             label={item}
            key={idx}
            sx={{marginTop:'10px', cursor: 'pointer', ml:'10px'}}
            deleteIcon={<Tag/>}
            onDelete={()=> {}}
            variant='outlined'
             />
          ))} */}
       </Box>
       <Box width={'25%'}>Suggested video</Box>
      </Box>
    </Box>
  )
}

export default VideoDetail;
