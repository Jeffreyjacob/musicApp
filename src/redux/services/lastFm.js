import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.deezer.com',
  }),
  endpoints:(builder) =>({
    getTopCharts: builder.query({query: ()=> '/playlist/3155776842/tracks'}),
    
    getSongDetails:builder.query({query : ({songid})=> `/track/${songid}`}),
    
    getSongRelated:builder.query({query:({playlistid})=> `/playlist/${playlistid}` }),

    getArtistDetails:builder.query({query:({artistid})=> `/artist/${artistid}`}),

    getArtistTopTrack:builder.query({query:({artistid})=>`/artist/${artistid}/top?limit=6`}),

    getPlaylist:builder.query({query:()=> `/chart/0/playlists`}),

    getPlaylistTrack:builder.query({query:({playlistid})=> `/playlist/${playlistid}?limit=100`}),

    geTopArtist:builder.query({query:()=>`chart/0/artists?limit=50`}),

    getSongBySearch:builder.query({query:({searchTerm})=> `/search/track?q=${searchTerm}`}),

  })
});


export const { useGetTopChartsQuery,useGetSongDetailsQuery
,useGetSongRelatedQuery,useGetArtistDetailsQuery,useGetArtistTopTrackQuery
,useGetPlaylistQuery,useGetPlaylistTrackQuery,useGeTopArtistQuery,
useGetSongBySearchQuery} = shazamCoreApi;