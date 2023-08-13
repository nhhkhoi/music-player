import useMusicPlayer from "../hooks/usePlayerProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

const TrackList = () => {
  const { trackList, playTrack, isPlaying, currentTrackIndex } =
    useMusicPlayer();

  return (
    <>
      <Container>
        <Box
          sx={{
            width: "100%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              lineHeight: "1.6rem",
              fontSize: "1.2rem",
              fontStyle: "italic",
              mb: "10px",
              mt: "5px",
            }}
          >
            Playlist for chilling at home
          </Typography>
        </Box>
        {trackList.map((track, index) => (
          <Box className="song-block" key={index}>
            {isPlaying && index === currentTrackIndex ? (
              <PauseCircleOutlineIcon
                onClick={() => playTrack(index)}
              ></PauseCircleOutlineIcon>
            ) : (
              <PlayCircleOutlineIcon
                onClick={() => playTrack(index)}
              ></PlayCircleOutlineIcon>
            )}
            <Typography sx={{ marginLeft: "5px" }} className="song-title">
              {track.name} - {track.author}
            </Typography>
          </Box>
        ))}
      </Container>
    </>
  );
};

export default TrackList;
