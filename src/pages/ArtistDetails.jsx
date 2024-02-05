import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { useGetArtistDetailsQuery, useGetArtistTopTrackQuery } from "../redux/services/lastFm";


const ArtistDetails = () => {
  const {artistid} = useParams();
  const {activeSong,isPlaying} = useSelector((state)=> state.player)
  const {data:ArtistInfo,isFetching:isFetchingArtistDetails} = useGetArtistDetailsQuery({artistid});
  const {data:ArtistTopTrack,isFetching:isFetchingTopTrack,error} = useGetArtistTopTrackQuery({artistid});
  
  return (
  <div className="flex flex-col">
    <DetailsHeader artistId={ArtistInfo?.id} artistData={ArtistInfo}/>
     <RelatedSongs 
      data={ArtistTopTrack?.data}
      artistId={ArtistInfo?.id}
      activeSong={activeSong}
      isPlaying={isPlaying}
     />
  </div>
  )
}

export default ArtistDetails;
