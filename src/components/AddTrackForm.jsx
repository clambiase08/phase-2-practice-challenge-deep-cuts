import React, { useState } from 'react'

function AddTrackForm({onAddTrack}) {

  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    BPM: "",
    image: ""
  })

  function handleTrackSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    onAddTrack(formData)
    setFormData({
      title: "",
      artist: "",
      BPM: "",
      image: ""
    })
  }
  
  function handleChange(e) {
    const key = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [key]: value
    })
  }





  return (
      <form onSubmit={handleTrackSubmit} >
        <div>
          <input onChange={handleChange} value={formData.artist} type="text" name="artist" placeholder="Artist" />
          <input onChange={handleChange} value={formData.title} type="text" name="title" placeholder="title" />
          <input onChange={handleChange} value={formData.image} type="text" name="image" placeholder="Image URL"/>
          <input onChange={handleChange} value={formData.BPM} type="number" name="BPM" placeholder="BPM" step="1.00" />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm