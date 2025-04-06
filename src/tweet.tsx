// Tweet.js
import React, { useState } from 'react';

/* 
Create a new component called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can use whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.

To do:
- create new component called 'Tweet'
- pass down all props you will need (username, content, likes, timestamp)
- use 'useState' for two variables
- create event handler for when user clicks 'like'
- if post isn't liked --> display white heart      otherwise --> display red heart
- increase/decrease like counter approrpriately
*/



export default function Tweet({username="anonymous", content="", likes=0, timestamp="0h"}) {
    const [newLikes, setLikes] = useState(likes);
    const [heart, setHeart] = useState("🤍")
    const [userLike, setUserLike] = useState(false)

    function handleClick() {
        if (userLike === false) {
            setLikes(newLikes + 1);
            setHeart("❤️");
            setUserLike(true);
        } else {
            setLikes(newLikes - 1);
            setHeart("🤍");
            setUserLike(false);
        }  
    }

    return (
        <div className="tweet">
            <h2>@{username}</h2>
            <br></br>
            <h2>{content}</h2>
            <br></br>
            <p>{timestamp} ago</p>
            <br></br>
            <button className="button" onClick={handleClick}>{heart}{newLikes} Likes</button>
        </div>
    );
}
