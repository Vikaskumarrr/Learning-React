import { Result } from "antd";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SongsList } from "./SongsList";


 export const PlayList = ()=>{ 

    const {playlistId}  = useParams();
    const PlaylistNumber = !isNaN(playlistId) ? parseInt(playlistId) : NaN;
    
      // Log for debugging
      console.log('PlayListId:',  playlistId);
      console.log('PlaylistNumber:',  PlaylistNumber);

    const playList = useSelector((state)=>{
        if (isNaN(PlaylistNumber)) return null;
        const selectedPlayList = state.playLists?.filter(
            (playList)=>  playList.id === PlaylistNumber  );

            return selectedPlayList.length ? selectedPlayList[0] : null;
    });

    if(!playList){ 
        return ( 
            <Result
            status="404"
            title="404"
            subTitle="PlayList you're looking for in not available"
            extra={<Link to="/playlist">Back Home</Link>}

            />
        )
    }

    return (
        <div style={{overflow: "scroll"}}> 
            { 
               <SongsList  imageUrl={playList.displayPicture} songs={playList.songs}/> 
            }
        </div>
    );
}

