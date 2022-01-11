import React from "react";

const Song = ({artist, song, url}) => {
    return(
        <>
            <li>
                {artist}
                <br>
                </br>
                <a href = {url}>{song}</a>
            </li>
            <p>
                
            </p>
        </>
    )
}

export default Song