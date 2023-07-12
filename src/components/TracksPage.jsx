import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  const [tracks, setTracks] = useState([])

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
      <Search />
      <AddTrackForm onAddTrack={onAddTrack} />
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage