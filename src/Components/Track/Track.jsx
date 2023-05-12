import './Track.css';

function Track({ track, onAdd, isRemoval, onRemove }) {
	const renderAction = () => {
		if (!isRemoval) {
			onAdd(track);
		} else if (isRemoval) {
			onRemove(track);
		}
	};

	return (
		<div className='Track'>
			<div className='Track-information'>
				<h3>{track.name}</h3>
				<p>
					{track.artist} | {track.album}
				</p>
			</div>
			<button className='Track-action' onClick={renderAction}>
				{isRemoval ? '-' : '+'}
			</button>
		</div>
	);
}

export default Track;
