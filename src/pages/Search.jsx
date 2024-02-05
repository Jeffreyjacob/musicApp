import { useParams } from "react-router-dom";
import { Loader, SongCard } from "../components";
import { useSelector } from "react-redux";
import { useGetSongBySearchQuery } from "../redux/services/lastFm";

const Search = () => {
   const {searchTerm} = useParams();
   const {activeSong,isPlaying} = useSelector((state)=> state.player);
   const {data,isFetching,error} = useGetSongBySearchQuery({searchTerm});

   if(isFetching) return <Loader title='Loading'/>;
   if(error)return <Error/>;
  return (
  <div className="flex flex-col">
     <h2 className="font-bold text-3xl text-white text-left">
       Showing result for <span className="font-black">{searchTerm}</span>
     </h2>
     <div className="flex flex-wrap sm:justify-start 
     justify-center gap-8 mt-6">

      {
        data?.data?.map((song,i)=>(
          <SongCard
            key={song.id}
            song={song}
            isplaying={isPlaying}
            activesong={activeSong}
            i={i}
            data={data}
          />
        ))
      }
     </div>

  </div>
  )
}

export default Search;
