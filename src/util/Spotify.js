const userAccessToken = '';
const CLIENT_ID = '8bcaf42cbc634ef6a451478d4644f470';
const REDIRECT_URI = 'http://localhost:3000/';
const REGEX_ACCESSTOKEN = '/access_token=([^&]*)/';
const REGEX_EXPIRY = '/expires_in=([^&]*)/';

const Spotify = {
	getAccesToken: () => {
		if (userAccessToken) {
			return userAccessToken;
		} else if (!userAccessToken) {
			const url = window.location.hrefmatch(REGEX_ACCESSTOKEN && REGEX_EXPIRY)
			
		} else {
			window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
		}
	},
};

export default Spotify;
