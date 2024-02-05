import { useState,useEffect } from "react";
import { Error,Loader,SongCard } from "../components";
import { useSelector } from "react-redux";
import { useGetPlaylistQuery } from "../redux/services/lastFm";
import PlaylistCard from "../components/PlaylistCard";

const AroundYou = () => {
 const {data,isFetching,error} = useGetPlaylistQuery();

 if(isFetching) return <Loader title='Getting Playlist'/>
 if(error) return <Error/>
return (
<div className="flex flex-col mt-3">
    <h2 className="font-bold text-3xl text-white
            text-left mb-5">Playlists</h2>
   <div className="flex flex-wrap sm:justify-start justify-center gap-8 mt-3">
      {
        data && data?.data.map((playlist,i)=>(
          <PlaylistCard
          key={i}
           PlayListDetails={playlist}
          />
        ))
      }
   </div>
</div>
)
}
export default AroundYou;
    