// App.js
import React from 'react';
import Tweet from './tweet';
import { tweetsData } from './data';

/* Do not write your tweet component here, write it in the tweet.tsx file */

function App() {
  return (
    <div className="app">
      <h1>Twitter Clone</h1>
      <div className="feed">
        {/* Here you will use the data from the 'tweetsData' variable and populate every tweet
          that you received from the 'backend' (data.ts).
         */
          // for each tweet in the tweetsData array
          tweetsData.map((tweet) => (
            // pass in vals from tweet into the Tweet component as props
            <Tweet
              key={tweet.id}
              username={tweet.username}
              content={tweet.content}
              likes={tweet.likes}
              timestamp={tweet.timestamp}
            />
          ))
         }
      </div>
    </div>
  );
}

export default App;
