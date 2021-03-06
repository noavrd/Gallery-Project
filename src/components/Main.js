import { useEffect, useState } from 'react';
import NavBar from './navbar/NavBar';
import galyPhoto from './galy-hero-img.jpg';
import Inquire from './Inquire';
import Artworks from './artworks/Artworks';
import CollectionsShow from './collections/CollectionsShow';
import Nft from './Nft';
import Collaboration from './collaboration/Collaboration';
import Subscribe from './Subscribe';
import DownNav from './downNav/DownNav';
export default function Main() {
  const [showInquire, setShowInquire] = useState(false);
  const [artworks, setArtworks] = useState([]);

  const getArtworks = () => {
    fetch('https://api.eden-gallery.com/artworks', {
      method: 'GET',
      headers: {
        Authorization: 'deWcjOgQPiR6PVzUWqJLfYcBlljUjIVELOmiMStOXBCFodCQGq',
        Pass: 'PNUt5uF4Kp4qEvGg8gCO3EtLJ7km2EMkiIVRmgmGzNb1LfYAi7',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setArtworks(myJson);
      });
  };

  useEffect(() => {
    getArtworks();
  }, []);

  return (
    <div>
      <NavBar
        showInquire={showInquire}
        setShowInquire={setShowInquire}
        artworks={artworks}
      />
      <div className="artist-details">
        <div className="right">
          <div>
            {/* <div className='spac'></div> */}
            <h1>Galy</h1>
            <h2>A digital artist for the 21st century</h2>
            <div className="about">
              Artist Galy is a self-taught prodigy in the field of 3D art.
              Reimagining familiar characters with naughty twists and bad
              habits, Galy’s art continues to evolve with his inspirations. His
              latest designs are meant to exist in his fantasy version of a dark
              cartoon universe.
            </div>
          </div>
          <div className="show-collections">View Collections</div>
        </div>
        <div className="left">
          {showInquire && <Inquire setShowInquire={setShowInquire} />}
          <img src={galyPhoto} alt="galy-pic" className="artist-picture" />
        </div>
      </div>
      <CollectionsShow artworks={artworks} />
      <Artworks artworks={artworks} />
      <Nft />
      <Collaboration />
      <Subscribe />
      <DownNav />
    </div>
  );
}
