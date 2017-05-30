# Golden Triangle Mixtape Machine

##### Big Picture:
GTM is a collection of user submitted media organized by popularity and time. Links are submitted via Slack, parsed, and added to a database. Currently only supports YouTube links but Soundcloud, Spotify, and Bandcamp are end goals. 

##### To Do:
* Slack trigger word vs cron job crawler with Slack API?
* Handle 'live' additions with socket.io
* Add UX to Slack responses
* Add users
* Add votes (counting reactions?)
* Enforce media uniqueness X
* Use user_name and time
* Add rough styles
  - Uniform fonts
  - Buttons
* Add transition media-item => player & player => media-item
* Videos currently not playing
  - Custom yt component plz
* Fix getThisMonth
* Add slack /command to open in browser
