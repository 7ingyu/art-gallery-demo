import { useState, useEffect } from 'react';
import Buttons from './Buttons';
import Gallery from './Gallery';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  const [ artId, setArtId ] = useState(34);
  const [ art, setArt ] = useState({});

  useEffect(() => {
    console.log('fetching');
    //fetch
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(res => res.json())
      .then(data => setArt(data))
  }, [artId])

  return (
    <div className="App container">
      <Buttons artId={artId} setArtId={setArtId}/>
      <Gallery {...art}/>
    </div>
  );
}

export default App;