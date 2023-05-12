import './Playlist.css';
import TrackList from '../TrackList/TrackList.jsx';

function Playlist({ playListName, playListTracks, onRemove, onNameChange, onSave }) {
	const handleNameChange = (event) => {
		onNameChange(event.target.value)
	}

	return (
		<div className='Playlist'>
			<input value={playListName} onChange={handleNameChange}/>
			<TrackList
				trackLists={playListTracks}
				onRemove={onRemove}
				isRemoval={true}
			/>
			<button className='Playlist-save' onClick={onSave}>SAVE TO SPOTIFY</button>
		</div>
	);
}

export default Playlist;
