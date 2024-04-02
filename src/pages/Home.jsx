import React from "react";
import { Link } from "react-router-dom";
import songsData from "../data/songs.json";

// TODO: Import necessary modules and data
function Home() {
  // TODO: Implement logic to display the list of songs
  return (
    <>
      <div>
        <h1>Rolling Stones 500 Greatest Songs of all Time</h1>
        {/* TODO: Display the list of songs with links */}
        <ul>
          {songsData.songs.map((song, index) => (
            <li key={index}>
              <Link to={`/song/${song.title}`}>{song.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
