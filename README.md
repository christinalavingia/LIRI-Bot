# LIRI-Bot

**Demo Video:** https://drive.google.com/file/d/10GohY8_IQVDx-D1YBa4Lnm5b9MdmZOCq/view

## Objective

The goal of this NodeJS application was to create an interface for an end-user to submit commands and retrieve data about a chose band, song or movie. 

The command were predefined as:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

### Technology

The following APIs were leveraged to make this app work:

* Bands in Town: https://www.bandsintown.com/
* OMDb: http://www.omdbapi.com/
* Spotify: https://developer.spotify.com/documentation/web-api/
* MomentJS: https://momentjs.com/

Because this app was written in NodeJS, I leveraged npm install to access these APIs as packets and retrieved the data via callbacks.

OMDB and Bands in Town required the common axios packet. Spotify had its own packet, as did MomentJS, which I used to format the event date information for the Bands in Town data.

### Response Handling

Each API's callback returned a JSON object. These were parsed and returned to the end user via console.log. A user can input one-word or multiple-word terms for song, bands and movies. Those with multiple words require quotation marks per the assignment instructions, however, using splice and join methods would prevent the end-user from having to use quotation marks. This would help reduce user errors for better usability for those who lack bash experience or understanding of its conventions.

The array for a command is structured as:
* Index 0: node
* Index 1: file name (liri.js)
* Index 2: command (concert-this, spotify-this-song, movie-this or do-what-it-says)
  * Failure to enter a command results in the error message: "This command does not exist"
* Index 3: input (band, song, movie)
  * Lack of an input creates a default input for song (The Sign) and movie (Mr. Nobody)
  * Note that "The Sign" does not produce information about that song. This seems to be a bug with Spotify, as even running that input manually results in a Lil Wayne song by a different name.

