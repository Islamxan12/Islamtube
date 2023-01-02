import React, { useState, useEffect } from "react";
import { Stack, Box, Container, Typography } from "@mui/material";
import { Colors } from "../constans/Colors";
import { Category, Videos } from "../index";
import { ApiService } from "../../service/api.service";
function Main() {
  const [selectedCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedHandler = (category) => setSelectCategory(category);

  useEffect(() => {
    const getData = async () => {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    };
    getData(getData);
  }, [selectedCategory]);
  return (
    <Stack>
      <Category
        selectedHandler={selectedHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2} sx={{ height: "" }}></Box>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          {selectedCategory}{" "}
          <span style={{ color: Colors.secondary }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Container>
    </Stack>
  );
}

export default Main;
