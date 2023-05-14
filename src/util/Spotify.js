const userAccessToken = '';
const expiresIn = 0;
const CLIENT_ID = '8bcaf42cbc634ef6a451478d4644f470';
const REDIRECT_URI = 'http://localhost:3000/';
const REGEX = '/access_token=([^&]*)&.*expires_in=([^&]*)/';
const url = window.location.href;

const Spotify = {
	getAccesToken: () => {
		if (userAccessToken) {
			return userAccessToken;
		} else if (!userAccessToken && url.match(REGEX).length === 3) {
			const matches = url.match(REGEX);
			userAccessToken = matches[1];
			expiresIn = matches[2];
			window.setTimeout(() => (userAccessToken = ''), expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
		} else if (
			!userAccessToken &&
			url.match(regex)[1] !== userAccessToken
		) {
			window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
		}
	},
	search: (term) => {
		fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
			method: 'GET',
			headers: { Authorization: `Bearer ${userAccessToken}` },
		})
		.then(response => response.json())
		.then(data => data.map(result => {
			
		}))
	},
};

export default Spotify;
