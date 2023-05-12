/* eslint-disable react/prop-types */
import './TrackList.css';
import Track from '../Track/Track';

function TrackList({ trackLists, isRemoval, onAdd, onRemove }) {
	return (
		<div className='TrackList'>
			{trackLists.map((track) => {
				return (
					<Track
						key={track.id}
						track={track}
						onAdd={onAdd}
						isRemoval={isRemoval}
						onRemove={onRemove}
					/>
				);
			})}
		</div>
	);
}

export default TrackList;
