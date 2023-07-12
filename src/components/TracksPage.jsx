import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [tracks, setTracks] = useState([])
  const [search, setSearch] = useState({
    query: "",
    tracks: []
  })

  const searchedTracks = tracks.filter((track) => track.title.includes(search.query))

  function handleSearch(e) {
    const results = tracks.filter((track) => {
      if (e.target.value === "") {
        return track
      } else {
        return track.title.toLowerCase().includes(e.target.value.toLowerCase())
      }
    })
    setSearch({
      query: e.target.value,
      tracks: results
    })
  }

  const onAddTrack = (newTrack) => {
    setTracks([...tracks, newTrack])
  }

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
    .then(res => res.json())
    .then(songData => setTracks(songData))
  },[])
    
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTrackForm onAddTrack={onAddTrack} />
      <TracksList tracks={searchedTracks}/>
    </div>
  )
}

export default TracksPage