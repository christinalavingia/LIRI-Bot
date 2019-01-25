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


