import React from "react";
import { Stack, Box } from "@mui/material";
import { Colors } from "../constans/Colors";
import { Link } from "react-router-dom";
import { SearchBar } from "../";

function Navbar() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={"2"}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        background: Colors.primary,
      }}
    >
      <Link className="LogoText" to={"/"}>
        ISLAMTUBE
        {/* <img  src={logo} alt="logo" height={100} width={100} className="imgLogo" /> */}
      </Link>

      <SearchBar />
      <Box />
    </Stack>
  );
}

export default Navbar;
