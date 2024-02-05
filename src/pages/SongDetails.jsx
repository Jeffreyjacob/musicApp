import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/lastFm";
import { useGetSongRelatedQuery } from "../redux/services/lastFm";


const SongDetails = () => {
    const {songid} = useParams();
    const playlistid = "1440614715"
    const {activeSong,isPlaying} = useSelector((state)=> state.player)
    const {data:songData,isFetching:isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    const {data:RelatedSongData,isFetching:isFetchingRelatedSong,error} = useGetSongRelatedQuery({playlistid})
    const relatedSong = RelatedSongData?.tracks?.data.slice(0,10)    


    if(isFetchingRelatedSong || isFetchingSongDetails) return 
    <Loader  title='Searching song details'/>;
    if(error) return <Error/>;
    

    return(
        <div className="flex flex-col">
        <DetailsHeader artistId="" songData={songData}/>
         <div className="mb-10">
          <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
         </div>

         <RelatedSongs 
         data={relatedSong}
         isPlaying={isPlaying}
         activeSong={activeSong}
         />

        </div>
    )
}
export default SongDetails;
