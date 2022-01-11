import React from "react";
import Song from "./Song";

const SongList = ({songs}) => {
    const songNodes = songs.map(song => {
        return(
            <Song artist = {song.artist} song = {song.song} url = {song.url} key = {song.id}>
                
            </Song>
        )
    })
    return (
        <>
            <ul>
                {songNodes}
            </ul>
        </>
    )
};

export default SongList;