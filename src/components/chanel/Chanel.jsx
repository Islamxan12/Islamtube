import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

function Chanel() {
  const params = useParams()
  console.log(params);
  return (
    <Link to={"/Main"}>
      <Button>main</Button>
    </Link>
  );
}

export default Chanel;
