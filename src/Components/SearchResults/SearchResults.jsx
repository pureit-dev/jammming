import './SearchResults.css';
import TrackList from '../Tracklist/TrackList.jsx';

function SearchResults({ searchResults, onAdd }) {
	return (
		<div className='SearchResults'>
			<h2>Results</h2>
			<TrackList
				trackLists={searchResults}
				isRemoval={false}
				onAdd={onAdd}
			/>
		</div>
	);
}

export default SearchResults;
