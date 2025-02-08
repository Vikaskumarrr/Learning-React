import { useSelector } from "react-redux";
import "../style/playlist.scss";
import {  useNavigate } from "react-router-dom";



export const PlayLists = () => {
    const playLists = useSelector((state) => state.playLists);
    const navigate = useNavigate(); 
    const onClickCard  = (playlistsId)=>{ 
        navigate(`/playlist/${playlistsId}`)
    }
    return (
        <div className="playlist-container">
            {playLists.map((PlayList) => {
                return (
                    <div key={PlayList.id} className="cards" onClick={()=>{onClickCard(PlayList.id)}}>
                        <img src={PlayList.displayPicture} alt={PlayList.name} />
                        <div>
                        <p>{PlayList.name}</p>
                        <p>{PlayList.releaseDate}</p>
                        <div className="bottom-box">
                            <span className="material-icons">queue_music</span>
                            <span>{PlayList.songs.length}</span>
                        </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

