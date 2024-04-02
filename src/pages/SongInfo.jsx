// TODO: Import necessary modules and data
import React from "react";
import { useParams } from "react-router-dom";
import songsData from "../data/songs.json"; // Import the JSON data

// TODO: Destrcutrue props to receive information coming in from the parent comp
function SongInfo() {
  // TODO: Fetch the song title from the URL and find the corresponding song data and add a conditional to display some simple html if there is no song :)
  const { songTitle } = useParams();

  // Find the corresponding song data
  const song = songsData.songs.find((song) => song.title === songTitle);

  return (
    <>
      <div>
        <h2>Song Information</h2>
        {/* TODO: Display song details or a "Song not found!" message */}
        {song ? (
          <div>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Year: {song.year}</p>
          </div>
        ) : (
          <p>Song not found!</p>
        )}
      </div>
    </>
  );
}

export default SongInfo;
