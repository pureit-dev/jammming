import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSearch }) {
	const [searchTerm, setSearchTerm] = useState('');
	const handleTermChange = (event) => {
		setSearchTerm(event.target.value);
	};
	return (
		<div className='SearchBar'>
			<input
				placeholder='Enter A Song, Album, or Artist'
				value={searchTerm}
				onChange={handleTermChange}
			/>
			<button className='SearchButton'>SEARCH</button>
		</div>
	);
}

export default SearchBar;
