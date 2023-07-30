import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchBar() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const result = await axios({
      method: 'get',
      url: `https://api.github.com/users/${searchTerm}/repos`,
      headers: {
        Authorization: `Token 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`
      }
    });

    setRepos(result.data);
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center mx-auto">
      <div className="w-1/2">
        <input
          type="text"
          className="form-input"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={handleSearch}
        />
        <button
          className="btn btn-blue mt-2"
          onClick={() => fetchData()}
        >
          Search
        </button>
      </div>
      <ul className="list-reset mt-8">
        {repos.map(repo => (
          <li key={repo.id} className="px-3 py-2 border border-gray-400 hover:bg-gray-200">
            {repo.name}
          </li>
        ))}
      </ul>
    </div>
  );

}

export default SearchBar;
