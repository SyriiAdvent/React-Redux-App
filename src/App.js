import React from 'react';
import Axios from 'axios';

import NavigationBar from './Components/NavigationBar';
import Player from './Components/Player';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Player />
      {/* <Minions /> */}
    </div>
  );
}

export default App;
