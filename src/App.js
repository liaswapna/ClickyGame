import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDharmachakra,faSnowflake,faCertificate,faAtom,faAsterisk,faSun,faCog,faCompass,faCrosshairs,faHaykal,faPalette,faRing } from '@fortawesome/free-solid-svg-icons'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faDharmachakra} spin/>
        <FontAwesomeIcon icon={faSnowflake} spin/>
        <FontAwesomeIcon icon={faCertificate} spin/>
        <FontAwesomeIcon icon={faAtom} spin/>
        <FontAwesomeIcon icon={faAsterisk} spin/>
        <FontAwesomeIcon icon={faSun} spin/>
        <FontAwesomeIcon icon={faCog} spin/>
        <FontAwesomeIcon icon={faCompass} spin/>
        <FontAwesomeIcon icon={faHaykal} spin/>
        <FontAwesomeIcon icon={faCrosshairs} spin/>
        <FontAwesomeIcon icon={faPalette} spin/>
        <FontAwesomeIcon icon={faRing} spin/>
        
      </div>
    );
  }
}

export default App;
