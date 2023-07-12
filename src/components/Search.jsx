import React from 'react'

function Search({handleSearch}) {


  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleSearch}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search