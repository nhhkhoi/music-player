import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";

function Controller() {
  const {
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
    currentTrackIndex,
  } = useMusicPlayer();
  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "10px",
          mb: "0px",
        }}
      >
        <IconButton
          aria-label="previous song"
          onClick={() => {
            if (currentTrackIndex !== null) {
              playPreviousTrack();
            }
          }}
        >
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={isPlaying ? "play" : "pause"}
          onClick={() => {
            if (currentTrackIndex !== null) {
              playTrack(currentTrackIndex);
            } else {
              playTrack(0);
            }
          }}
        >
          {!isPlaying ? (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          ) : (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          )}
        </IconButton>
        <IconButton
          aria-label="next song"
          onClick={() => {
            if (currentTrackIndex !== null) {
              playNextTrack();
            }
          }}
        >
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
}

export default Controller;
