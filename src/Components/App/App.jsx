import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar.jsx';
import SearchResults from '../SearchResults/SearchResults.jsx';
import Playlist from '../Playlist/Playlist.jsx';

import './App.css';

function App() {
	const [count, setCount] = useState(0);
	const [searchResults, setSearchResults] = useState([
		{ id: 1, name: 'Begin Again', artist: 'Taylor Swift', album: 'Red' },
	]);
	const [playListTracks, SetplayListTracks] = useState([
		{ id: 2, name: 'Perfect', artist: 'Ed Shernan', album: '+' },
	]);
	const [playListName, setPlayListName] = useState('90s Songs');

	const addTrack = (track) => {
		if (!playListTracks.some((obj) => obj.id === track)) {
			const newPlayList = [...playListTracks, track];

			SetplayListTracks(newPlayList);
		}
	};

	const removeTrack = (track) => {
		const newPlayList = playListTracks.filter(
			(trackId) => trackId.id !== track.id
		);
		SetplayListTracks(newPlayList);
	};

	const updatePlaylistName = (name) => {
		setPlayListName(name)
	}

	const savePlaylist = () => {
		console.log("clicked")
	}

	const search = (searchTerm) => {
		console.log(searchTerm)
	}


	return (
		<div>
			<h1>
				Ja<span className='highlight'>mmm</span>ing
			</h1>
			<div className='App'>
				<SearchBar onSearch={search}/>
				<div className='App-playlist'>
					<SearchResults
						searchResults={searchResults}
						onAdd={addTrack}
					/>
					<Playlist
						playListName={playListName}
						playListTracks={playListTracks}
						onRemove={removeTrack}
						onNameChange={updatePlaylistName}
						onSave={savePlaylist}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
