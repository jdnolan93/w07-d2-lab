import React, { useState } from "react";
import SongList from "../components/SongList";
import FeedbackForm from "../components/FeedbackForm";

const SongBox = () => {

    const [songs, setSongs] = useState(
        [
            {
                id:1, 
                artist:"The Beatles",
                song:"Yellow Submarine",
                url:"https://www.youtube.com/watch?v=m2uTFF_3MaA"
            },
            {
                id:2, 
                artist:"The White Stripes",
                song:"Fell In Love With a Girl",
                url:"https://www.youtube.com/watch?v=fTH71AAxXmM"
            }
        ]
    )

    return (
        <>
        <h1>
            Favourite Songs
        </h1>
        <hr>
        </hr>
        <SongList songs = {songs}/>
        <hr>
        </hr>
        <FeedbackForm/>
        </>
    )
};

export default SongBox;