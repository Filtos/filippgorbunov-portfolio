import React, { Component } from 'react';
import './App.css';
import myPicture from './pictures/pacific-beach.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-title">Full Stack Developer</h2>
          <h1 className="my-name">Filipp Gorbunov</h1>
          <ul className="navigation">
            <li>About</li>
            <li>Projects</li>
            <li>Contact Info</li>
          </ul>
        </header>
        <div className="about-div">
          <img className="my-picture" src={myPicture}/>
          <p>
            Hey, my name is Filipp Gorbunov. I am a full stack developer located in Washington State. I enjoy creating apps
            using React, and I strive to constantly learn new things about coding and development. I spend my free time playing
            board games, hiking, watching films, and spending time with my close ones.
          </p>
          <p>
            Before getting into programming, I studied Accounting and spent time volunteering for United Way, where I helped low income individuals
            prepare their taxes. After that I worked as a Co-Lead/Software tester for Microsoft, testing the at-the-time unreleased Xbox One X. I have 
            personally performed testing on hundreds of different titles and written hundreds of bugs during that time. After that I decided I want to
            develop and code, so now here I am.
          </p>
          <p>
            I'm proficient in JavaScript, React/Redux, jQuery, HTML/CSS, Node.js, MongoDB, and PostgreSQL. I'm very comfortable with dev tools such as 
            Git, GitHub, Heroku, and Travis CI. I enjoy learning new things and I'm always looking for chances to improve my skills.
          </p>
        </div>
        <div className="project-div">

        </div>
      </div>
    );
  }
}

export default App;
