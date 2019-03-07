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
    clicked:[],
    correct: undefined,
    score: 0,
    highScore: 0,
    gameWon: false

  }

  shuffle = (a,b) => Math.random() < 0.5 ? 1 : -1

  clickHandler = iconName => {
    if (this.state.clicked.indexOf(iconName) === -1) {
        let score = this.state.clicked.length + 1,
            clicked = score === this.state.icons.length ? [] : [...this.state.clicked, iconName]

        this.setState({
            icons: this.state.icons.sort(this.shuffle),
            clicked: clicked,
            score: score,
            highScore: Math.max(this.state.highScore, score),
            correct: true,
            gameWon: score === this.state.icons.length
        })
    } else {
        this.setState({
            icons: this.state.icons.sort(this.shuffle),
            clicked: [],
            score: 0,
            correct: false,
            gameWon: false
        })
    }
}

  render() {
    return (
      <div>
        <div className="container-fluid nav-class">
        <Navbars correct={this.state.correct} gameWon={this.state.gameWon} score={this.state.score} highScore={this.state.highScore}/>
        </div>
        <div className="container center icon-class">
        <Row>
          {this.state.icons.map(icon=>(<IconRender correct={this.state.correct} key={icon.iconName} icon={icon} clickHandler={this.clickHandler}></IconRender>))}
        </Row>
        </div>
      </div>
    );
  }
}

export default App;
