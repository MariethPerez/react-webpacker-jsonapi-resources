
import React, { useEffect, useState } from "react";

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    const requestSongs = async () => {
      const response = await fetch("/api/songs");
      const {data} = await response.json();
      setSongs(data);
    }
    requestSongs();
  },[]);

  return songs.map(song => <div>{song.attributes.title}</div>)
}

export default SongList;