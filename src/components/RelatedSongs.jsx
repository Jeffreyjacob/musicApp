import SongBar from "./SongBar";
import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useDispatch } from "react-redux";

const RelatedSongs = ({data,isPlaying,activeSong,artistId}) =>{
  const dispatch = useDispatch();
  const handlePauseClick = ()=>{
    dispatch(playPause(false));
 } 
 const handlePlayCheck = ({song,i})=>{
    console.log(song)
    dispatch(setActiveSong({song,data,i}))
    dispatch(playPause(true))
 }
  return (
    <div className="flex flex-col">
      {
        artistId ? <h1 className="font-bold text-3xl text-white">Top Tracks</h1>:
        <h1 className="font-bold text-3xl text-white">Related Songs</h1>
      }
    
    
    <div className="mt-6 w-full flex flex-col">
      {
      data?.map((song,i)=>(
          <SongBar
          key={`${song.id}-${artistId}`}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={()=>handlePlayCheck({song,i})}
          />
        ))
      }
    </div>
  </div>
  )
}


export default RelatedSongs;
