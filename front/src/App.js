import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home"
import Podcast from "./components/details/podcast/podcast"
import Chapter from "./components/details/chapter/chapter"

function App() {
  return (
    < BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element= {<Home/>} />
          <Route path="/detailPodcast/:collectionId" element= {<Podcast/>} />
          <Route path="/detailPodcast/:collectionId/detailChapter/:episodeGuid" element= {<Chapter/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
