import React from 'react'
import { Link } from 'react-router-dom';

const PlaylistCard = ({PlayListDetails}) => {
  return (
    <div className='div className="flex flex-col w-[250px] p-4 bg-white/5 
    bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg
    cursor-pointer'>

      <div className='relative h-56 group '>
        <Link to={`/playlistTracks/${PlayListDetails.id}`}>
        <img alt="playlist_img" src={PlayListDetails?.picture_big}/>
        </Link>
      </div>
       <div className='mt-4 flex flex-col'>
       <p className="font-semibold text-lg text-white truncate">
          <Link to={`/playlistTracks/${PlayListDetails.id}`}>
            {PlayListDetails?.title}
          </Link>
         </p>
         <p className='text-sm text-gray-300 mt-1'>
            {PlayListDetails?.nb_tracks}<span className='ml-1'>tracks</span>
         </p>
       </div>
    </div>
  )
}

export default PlaylistCard;