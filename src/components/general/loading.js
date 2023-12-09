import { Box, CircularProgress } from "@mui/material";
import { Fragment } from "react";

const Loading = () => {
  return (
    <Fragment>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          alignItems: "center",
          height: `calc(100vh - 200px)`,
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backdropFilter: "blur(3px)",
          }}
        >
          <CircularProgress />
        </Box>
      </Box>
    </Fragment>
  );
};
export default Loading;
