import React, { useEffect } from 'react';
import Axios from 'axios';

import NavigationBar from './Components/NavigationBar';
import SearchUserForm from './Components/SearchUserForm';
import Minions from './Components/Minions';
import Player from './Components/Player';

function App() {
  // useEffect(() => {
  //   Axios(`https://staging.xivapi.com/character/9404354?private_key=8dffe26d0c4946b1923011ad9088fe88a7413c12d9774b768f086ff91abba4d2&data=AC,MIMO,CJ,FC,FCM`)
  //     .then(res => console.log(`Data Retrieved`, res))
  //     .catch(error => console.log(`Failed to retrieve data`, error))
  // }, [])


  return (
    <div className="App">
      <NavigationBar />
      <Player />
      {/* <Minions /> */}
    </div>
  );
}

export default App;
