import React from "react";
import { Router } from "@reach/router";
import SongList from "./SongList";
import AddSong from "./AddSong"

function App() {
  return (
    <Router>
      <SongList path = "/"/>
      <AddSong path = "/add"/>
    </Router>);
}

export default App;