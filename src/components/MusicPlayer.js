import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TrackList from "./TrackList";
import Container from "@mui/material/Container";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Controller from "./Controller";

const WallPaper = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background: "linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&:before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)",
  },
  "&:after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "-30%",
    background:
      "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

const Widget = styled("div")(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: "350px",
  maxWidth: "100%",

  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

const CoverImage = styled("div")({
  width: "175px",
  height: "200px",
  objectFit: "fill",
  overflow: "hidden",
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: "rgba(0,0,0,0.08)",
  "& > img": {
    width: "100%",
  },
});

export default function MusicPlayer() {
  const {
    currentTrackName,
    currentTrackAuthor,
    currentTrackImg,
    currentTrackAlt,
  } = useMusicPlayer();

  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            height: "95vh",
          }}
        >
          <Box
            sx={{
              width: "100%",

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Widget>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <CoverImage>
                  <img alt={`${currentTrackAlt}`} src={`${currentTrackImg}`} />
                </CoverImage>
                <Box
                  sx={{
                    ml: 1.5,
                    height: "200px",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    fontWeight={500}
                  >
                    Source: pixabay.com
                  </Typography>
                  <Typography
                    sx={{ fontWeight: "bold", mt: "20px", mb: "10px" }}
                    noWrap
                  >
                    {currentTrackName}
                  </Typography>
                  <Typography noWrap letterSpacing={-0.25}>
                    {currentTrackAuthor}
                  </Typography>
                </Box>
              </Box>
              <Controller />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "0px",
                  mb: "10px",
                }}
              >
                <Typography
                  sx={{
                    marginRight: "10px",
                    "&:hover": { color: "#dff9fb" },
                  }}
                >
                  Prev
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    "&:hover": { color: "#dff9fb" },
                  }}
                >
                  Play
                </Typography>
                <Typography
                  sx={{ marginLeft: "10px", "&:hover": { color: "#dff9fb" } }}
                >
                  Next
                </Typography>
              </Box>
            </Widget>
            <Widget sx={{ marginTop: "10px" }}>
              <Box>
                <TrackList />
              </Box>
            </Widget>
          </Box>
        </Box>
      </Container>
      <WallPaper />
    </>
  );
}
