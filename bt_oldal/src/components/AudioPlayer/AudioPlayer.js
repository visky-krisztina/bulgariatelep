import {useState, useEffect} from 'react';
import Player from './Player';
import './AudioPlayer.styles.scss';
import song1 from '../../assets/music/Bizom Benned Uram.mp3';
import song2 from '../../assets/music/jertek dicserjuk egyutt.mp3';
import song3 from '../../assets/music/Orvendjetek.mp3';
import song4 from '../../assets/music/Uj szivet adj.mp3';

function AudioPlayer() {
  
  const [songs] = useState([
    {
      title: "Bízom Benned Uram",
      artist: "BÉTHEL",
      src: song1
    },
    {
      title: "Jertek dicsérjük együtt",
      artist: "BÉTHEL",
      src: song2
    },
    {
      title: "Örvendjetek",
      artist: "BÉTHEL",
      src: song3
    },
    {
      title: "Új szívet adj",
      artist: "BÉTHEL",
      src: song4
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);


  return (

    <Player 
    currentSongIndex={currentSongIndex} 
    setCurrentSongIndex={setCurrentSongIndex} 
    nextSongIndex={nextSongIndex} 
    songs={songs}
  />
   
  );
}

export default AudioPlayer;