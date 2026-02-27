import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipForward, X, Music } from "lucide-react";
import {
  PlayerContainer,
  Controls,
  TrackInfo,
  CloseBtn,
  OpenPlayerBtn,
} from "./MusicPlayer.styled";

import deltaSong from "../../music/It_s_Raining_Somewhere_Else.mp3";
import hollowSong from "../../music/City_of_Tears.mp3";

const tracks = [
  {
    id: 1,
    title: "It's Raining Somewhere Else",
    artist: "Toby Fox",
    src: deltaSong,
  },
  {
    id: 2,
    title: "City of Tears",
    artist: "Christopher Larkin",
    src: hollowSong,
  },
];

const MusicPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current
          .play()
          .catch((err) => console.log("Playback blocked", err));
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  };

  if (!isVisible) {
    return (
      <OpenPlayerBtn onClick={() => setIsVisible(true)}>
        <Music size={24} color="white" />
      </OpenPlayerBtn>
    );
  }

  return (
    <PlayerContainer>
      <CloseBtn onClick={() => setIsVisible(false)}>
        <X size={16} />
      </CloseBtn>
      <Music size={20} color="#ffb366" />

      <TrackInfo>
        <p className="title">{tracks[currentTrackIndex].title}</p>
        <p className="artist">{tracks[currentTrackIndex].artist}</p>
      </TrackInfo>

      <Controls>
        <button onClick={togglePlay}>
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={nextTrack}>
          <SkipForward size={20} />
        </button>
      </Controls>

      <audio
        ref={audioRef}
        src={tracks[currentTrackIndex].src}
        onEnded={nextTrack}
      />
    </PlayerContainer>
  );
};

export default MusicPlayer;
