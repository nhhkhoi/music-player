import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";

const useMusicPlayer = () => {
  const { state, setState } = useContext(MusicPlayerContext);

  // Play a specific track
  function playTrack(index) {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      state.audioPlayer.loop = true;

      setState((state) => ({
        ...state,
        currentTrackIndex: index,
        isPlaying: true,
      }));
    }
  }

  // Toggle play or pause
  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause();
    } else {
      state.audioPlayer.play();
    }
    setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
  }

  // Play the previous track in the tracks array
  function playPreviousTrack() {
    const newIndex =
      (((state.currentTrackIndex + -1) % state.tracks.length) +
        state.tracks.length) %
      state.tracks.length;
    playTrack(newIndex);
  }

  // Play the next track in the tracks array
  function playNextTrack() {
    const newIndex = (state.currentTrackIndex + 1) % state.tracks.length;
    playTrack(newIndex);
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName:
      (state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].name) ||
      state.tracks[0].name,
    currentTrackAuthor:
      (state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].author) ||
      state.tracks[0].author,
    currentTrackImg:
      (state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].img) ||
      state.tracks[0].img,
    currentTrackAlt:
      (state.currentTrackIndex !== null &&
        state.tracks[state.currentTrackIndex].alt) ||
      state.tracks[0].alt,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
    currentTrackIndex: state.currentTrackIndex,
    playPreviousTrack,
    playNextTrack,
  };
};

export default useMusicPlayer;
