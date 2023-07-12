import React from 'react'
import Track from './Track'

function TracksList({tracks}) {
  console.log(tracks)

const trackDetails = tracks.map((track) => {
  return <Track key={track.id} title={track.title} artist={track.artist} bpm={track.BPM} image={track.image} />
})

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {trackDetails}
      </tbody>
    </table>
  )
}

export default TracksList