import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPlaylistTrackQuery } from '../redux/services/lastFm';
import { Error, Loader, SongBar } from '../components';
import millify from 'millify';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const PlaylistDetails = () => {
    const { playlistid } = useParams();
    const { activeSong, isPlaying } = useSelector((state) => state.player)
    const { data, isFetching, error } = useGetPlaylistTrackQuery({ playlistid });
    const dispatch = useDispatch();
    const handlePauseClick = ()=>{
      dispatch(playPause(false));
   } 
   const handlePlayCheck = ({song,i})=>{
      console.log(song)
      dispatch(setActiveSong({song,data,i}))
      dispatch(playPause(true))
   }
    if (isFetching) return <Loader title='Getting Playlist' />
    if (error) return <Error />
    console.log(data)
    return (
        <div className='flex flex-col mt-5'>
            <div className='flex flex-wrap md:mx-5 mt-5 md:gap-8 gap-4 mb-4'>
                <div className='div className="flex flex-col md:w-[300px] w-[180px] p-4 bg-white/5 
                               bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg
                               cursor-pointer'>
                    <img src={data?.picture_big} alt={data?.title} />
                </div>
                <div className='flex flex-col'>   
                <p className='md:text-4xl text-xl  font-bold text-white md:mt-5'>{data?.title}</p>
                <div className='flex gap-3 md:w-full w-[170px] md:mt-3 mt-2'>
                 <img src="https://ucarecdn.com/089aeeef-7e7b-4ce1-9ccf-e683222e6ec4/01_Deezer_LogoStill1536x864.jpg" 
                 alt="User Avatar" className="rounded-full w-8 h-8 border-2 border-blue-500 object-cover" />    
                  <p className='md:text-base text-sm text-gray-400'>{data?.creator?.name}</p>
                </div>
                <p  className='md:text-base text-sm text-gray-400 md:mt-4 mt-2'>
                    {data?.nb_tracks} tracks |
                    <span className='ml-1 mr-1'>{millify(data?.fans)}</span>fans</p>
                <p  className='md:text-base text-sm text-gray-400 md:w-full w-[170px] md:mt-3 mt-2'>{data?.description}</p>
                </div>
            </div>
            <h1 className="font-bold text-xl text-white  mt-5 mx-5">Tracks</h1>
            <div className='flex flex-col w-full mt-5'>
              {
                data?.tracks?.data?.map((song,i)=>(
                    <SongBar
                     key={i}
                     i={i}
                     song={song}
                     activeSong={activeSong}
                     isPlaying={isPlaying}
                     handlePauseClick={handlePauseClick}
                     handlePlayClick={()=>handlePlayCheck({song,i})}
                    />
                ))
              }
            </div>
        </div>
    )
}

export default PlaylistDetails;