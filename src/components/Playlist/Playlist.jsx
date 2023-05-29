import React from 'react'
import './Playlist.css'
import Artist from '../Artist/Artist'
function Playlist() {
  return (
    <div className='artistContainer'>
        <Artist 
          image="https://www.g5pro.com/wp-content/uploads/2020/09/flyer_kuelgue-900x900.jpg" 
          title="El Kuelgue" 
          description="Cariño reptil"
        />
        <Artist 
          image="https://i.scdn.co/image/ab67616d0000b27312b16cbb525e11bcbfd50d82" 
          title="James Brown" 
          description="it's a man world"
        />
      <Artist
        image="https://i.scdn.co/image/ab67616d0000b273370dd211f93a05fb96b6b96a"
        title="Cowboy Bebop"
        description="The seabelts"
      /> 
    </div>
  )
}

export default Playlist