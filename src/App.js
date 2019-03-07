import React, { Component } from 'react';
import {Row, Card, Col} from 'react-materialize'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDharmachakra,faSnowflake,faCertificate,faAtom,faAsterisk,faSun,faCog,faCompass,faCrosshairs,faHaykal,faPalette,faRing } from '@fortawesome/free-solid-svg-icons'
import IconRender from './components/IconRender/IconRender'
import Navbars from './components/Navbars/Navbars'
import './App.css';


class App extends Component {

  state = {
    icons:[faDharmachakra,faSnowflake,faCertificate,faAtom,faAsterisk,faSun,faCog,faCompass,faCrosshairs,faHaykal,faPalette,faRing].sort(this.shuffle),
    selected:[],
    right: undefined,
    score: 0,
    highScore: 0,
    win: false

  }

  shuffle = (a,b) => Math.random() < 0.5 ? 1 : -1

  render() {
    return (
      <div>
        <div className="container-fluid nav-class">
        <Navbars/>
        </div>
        <div className="container center icon-class">
        <Row>
          {this.state.icons.map(icon=>(<IconRender icon={icon}></IconRender>))}
        </Row>
        </div>
      </div>
    );
  }
}

export default App;
