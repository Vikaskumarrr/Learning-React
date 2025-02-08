import "../style/songs-list.scss"

export const SongsList = ({songs , imageUrl })=>{ 
    return (
        <div className="song-list">
             { 
                songs.map((songs , index)=>{ 
                    return (
                        <div className="song-card" key={songs.id} >
                            <p>{index + 1}</p>
                            <img src={imageUrl} alt={songs.title}/>
                            <p>{songs.title}</p>
                            <span className="material-icons">favorite</span>
                        </div>
                    )
                })
            }
        </div>
    ) ;
}