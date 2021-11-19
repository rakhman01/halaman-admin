import React from "react";
import { CircularProgress, Box } from "@material-ui/core";

const Loading = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={1}
      height={"100vh"}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
