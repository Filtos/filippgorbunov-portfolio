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
          <img className="my-picture" src={myPicture} alt="A picture of me smiling the beach of the Pacific Ocean"/>
          <p className="bio">
            Hey, my name is Filipp Gorbunov. I am a full stack developer located in Washington State. I enjoy creating apps
            using React, and I strive to constantly learn new things about coding and development. I spend my free time playing
            board games, hiking, watching films, and spending time with my close ones.
          </p>
          <p className="bio">
            Before getting into programming, I studied Accounting and spent time volunteering for United Way, where I helped low income individuals
            prepare their taxes. After that I worked as a Co-Lead/Software tester for Microsoft, testing the at-the-time unreleased Xbox One X. I have 
            personally performed testing on hundreds of different titles and written hundreds of bugs during that time. After that I decided I want to
            develop and code, so now here I am.
          </p>
          <p className="bio">
            I'm proficient in JavaScript, React/Redux, jQuery, HTML/CSS, Node.js, MongoDB, and PostgreSQL. I'm very comfortable with dev tools such as 
            Git, GitHub, Heroku, and Travis CI. I enjoy learning new things and I'm always looking for chances to improve my skills and be part of a great team.
          </p>
        </header>

        <div className="project-div">
          <h3 className="div-header">Projects</h3>
          <div className="project">
            <h4 className="project-name"><a href="https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras" target="_blank">Weather FM</a></h4>
            <p className="project-description">A playlist app that takes your location, and gives you music recommendations based on the mood of the weather.</p>
          </div>
          <div className="project">
            <h4 className="project-name"><a href="https://github.com/thinkful-ei22/filipp-whereToEat-client" target="_blank">Where should we eat?</a></h4>
            <p className="project-description">An app that allows users and their friends collectively decide on where to eat.</p>
          </div>
          <div className="project">
            <h4 className="project-name"><a href="https://github.com/thinkful-ei22/jon-fillip-spaced-repetition-client" target="_blank">iLearn</a></h4>
            <p className="project-description">An app that uses the spaced repetition algorithm to help users learn Spanish.</p>
          </div>
        </div>

        <div className="contact-div">
          <h3 className="div-header">Wanna talk? Contact Me!</h3>
          <ul className="contact-icons">
            <li className="icon"><a href="https://www.linkedin.com/in/filippgorbunov/" target="_blank"><img src="https://png.icons8.com/ios/50/000000/linkedin.png"/></a></li>
            <li className="icon"><a href="https://github.com/Filtos" target="_blank"><img src="https://png.icons8.com/ios/50/000000/github.png"/></a></li>
            <li className="icon"><a href="mailto:Filippgorb@gmail.com" target="_blank"><img src="https://png.icons8.com/ios/50/000000/new-post.png"/></a></li>
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
