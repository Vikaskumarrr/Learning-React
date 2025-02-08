import "./App.css"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MusicPlayer from "./MusicPlayer.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.jsx";
import {PlayLists} from "./components/PlayLists.jsx";
import {SongsList} from "./components/SongsList.jsx";
import LikedSongs from "./components/LikedSongs.jsx";
import  {PlayList}  from "./components/PlayList.jsx";

const PlayerLayout = () => {
  return (
    <div className="app">
      <Outlet />
      <MusicPlayer />
    </div>
  )
}


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<PlayerLayout />}>
              <Route path="/playlist" element={< PlayLists />} />
              <Route path="/playlist/:playlistId" element={<PlayList />} />
              <Route path="/likedSongs" element={<LikedSongs />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App; 