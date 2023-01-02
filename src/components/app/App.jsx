import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Chanel, Navbar, Search, VideoDetail, SearchBar } from "../index";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/chanel/:id' element={<Chanel />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/search?/:id" element={<Search />} />
        {/* <Route path="/searchbar" element={<SearchBar />} /> */}
      </Routes>
    </Box>
  );
}

export default App;
