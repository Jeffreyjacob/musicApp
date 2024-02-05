import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/lastFm';

const Discover = () => {
    const dispatch = useDispatch()
    const {activeSong,isPlaying} = useSelector((state)=> state.player );
    const [genre,setGenres] = useState([])
    const {data,isFetching,error} = useGetTopChartsQuery();
    const selectGenresChange = (value)=>{
        
    }



    return (
        <div className='flex flex-col'>
         <div className='w-full flex justify-between items-center 
         sm:flex-row flex-col mt-4 mb-10'>
            <h2 className='font-bold text-3xl text-white
            text-left'>Discover</h2>
            <select
               onChange={(e)=>selectGenresChange(e.target.value)}
               className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
            >
            {
                genres.map((data)=>(
                    <option key={data.value} value={data.value}>
                       {data.title}
                    </option>
                ))
            }
            </select>
         </div>

         <div className='flex flex-wrap sm:justify-start
          justify-center gap-8'>
             {
            
              data && data?.data.map((song,i)=>(
                   <SongCard 
                   key={i}
                   i={i}
                   song={song}
                   activesong={activeSong}
                   isplaying={isPlaying}
                   data={data}
                   />
                ))
             }
             {
                isFetching && (
                    <Loader title="Loading songs..." />
                )
             }
             {
                error && (
                    <Error/>
                )
             }
         </div>
        </div>
    )
}

export default Discover;
