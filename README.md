# LIRI-Bot

**Demo Video:** https://drive.google.com/file/d/10GohY8_IQVDx-D1YBa4Lnm5b9MdmZOCq/view

## Objective

The goal of this NodeJS application was to create an interface for an end-user to submit commands and retrieve data about a chosen band, song or movie. 

The commands were predefined as:
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

Each API's callback returned a JSON object. These were parsed and returned to the end-user via console.log. A user can input one-word or multiple-word terms for song, bands and movies. Those with multiple words require quotation marks per the assignment instructions, however, using splice and join methods would prevent the end-user from having to use quotation marks. This would help reduce user errors for better usability, given that app users may lack bash experience or an understanding of its conventions.

The array for a command is structured as:
* Index 0: node
* Index 1: file name (liri.js)
* Index 2: command (concert-this, spotify-this-song, movie-this or do-what-it-says)
  * Failure to enter a command results in the error message: "This command does not exist"
* Index 3: input (band, song, movie)
  * Lack of an input creates a default input for song (The Sign) and movie (Mr. Nobody)
  * do-what-it-says does not require an input. It simply leverages the Spotify API to return "I Want It That Way" by The Backstreet Boys. This is then printed in a linked text file.
  * Note that "The Sign" does not produce information about that song. This seems to be a bug with Spotify, as even running that input manually results in a Lil Wayne song by a different name.
  * The Bands in Town API returns a large JSON object for bands that are actively touring. I chose to print the first index of the object, which reflect the first concert that is soonest to the user's query date. This won't provide a locally relevant search as its website provides in its UI. However, selecting say index 40 for a concert near the user likely won't serve up local results for every band, I went with the soonest option. Presumably, you could create an if statement to handle local e.g., if location == "Santa Barbara" print this datetime. 
