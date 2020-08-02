import React, { Component } from 'react';
import './App.css';
import myPicture from './pictures/MyFace.PNG';
import weatherFM from './pictures/weatherfm.png';
import whereShouldWeEat from './pictures/WhereShouldWeEat.PNG';
import linkedInIco from './pictures/linkedin.png';
import githubIco from './pictures/github.png';
import emailIco from './pictures/email.png';
import iLearn from './pictures/ilearn.png';
import Typing from 'react-typing-animation';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header" id="Main">
          {/* <h2 className="App-title">Full Stack Developer</h2> */}
          <Typing>
            <h1 className="my-name">Filipp Gorbunov</h1>

            <p>
              <AnchorLink href="#About-Me">About Me</AnchorLink>
              <AnchorLink href="#Projects">Projects</AnchorLink>
              <AnchorLink href="#Contact-Info">Contact Info</AnchorLink>
            </p>
          </Typing>

          {/* <img className="my-picture" src={myPicture} alt="Me smiling the beach of the Pacific Ocean"/> */}
          {/* <p className="bio">
            Hey, my name is <span className="name-span">Filipp</span>. I am a full stack developer located in <span className="state-span">
              <a href="https://www.wta.org/go-outside/map" target="_blank" rel="noopener noreferrer" className="state-link">WASHINGTON</a></span> State. I enjoy creating apps
            using <span className="react-span">React</span>, and I strive to constantly learn new things about coding and development. Check out my <span className="name-span">projects</span> below!
          </p> */}
          {/* <p className="bio">
            Before getting into programming, I studied Accounting and spent time volunteering for United Way, where I helped low income individuals
            prepare their taxes. After that I worked as a Co-Lead/Software tester for Microsoft, testing the at-the-time unreleased Xbox One X. I have 
            personally performed testing on hundreds of different titles and written hundreds of bugs during that time. After that I decided I want to
            develop and code, so now here I am.
          </p>
          <p className="bio">
            I'm proficient in JavaScript, React/Redux, jQuery, HTML/CSS, Node.js, MongoDB, and PostgreSQL. I'm very comfortable with dev tools such as 
            Git, GitHub, Heroku, and Travis CI. I enjoy learning new things and I'm always looking for chances to improve my skills and be part of a great team.
          </p> */}
        </header>

        <section className="about-me-div" id="About-Me">
          <h3 className="div-header">About Me</h3>
          <img className="my-picture" src={myPicture} alt="Me smiling the beach of the Pacific Ocean"/>
          {/* <p className="bio">
            Hey, my name is <span className="name-span">Filipp</span>. I used to be a software tester, now turned a full stack developer, located in <span className="state-span">
              <a href="https://www.wta.org/go-outside/map" target="_blank" rel="noopener noreferrer" className="state-link">WASHINGTON</a></span> State. I enjoy creating apps
            using <span className="react-span">React</span>, and I strive to constantly learn new things about coding and development. Check out my <span className="name-span">projects</span> below!
          </p> */}
          <Typing speed={1}>
            <Typing.Delay ms={4000} />
            <ul className="bio">
              <li>NAME: Filipp Gorbunov</li>
              <li>BACKGROUND: Software Tester turned Full Stack Developer</li>
              <li>LOCATION: Beautiful state of <span className="state-span">
                <a href="https://www.wta.org/go-outside/map" target="_blank" rel="noopener noreferrer" className="state-link">WASHINGTON</a></span></li>
              <li>ABOUT ME: I enjoy creating apps using <span className="react-span">React,</span></li>
              <li>I strive to constantly learn new things about coding and development.</li>
              <li>PROJECTS: Click <span className="name-span"><AnchorLink href="#Projects">HERE</AnchorLink></span> to check them out below!</li>
            </ul>
          </Typing>
          
        </section>

        <section className="project-div" id="Projects">
          <h3 className="div-header">Projects</h3>
          <div className="project">
            <h4 className="project-name">WeatherFM</h4>
            <img className="project-picture" src={weatherFM} alt="WeatherFM front page."/>
            <p className="project-description">
              <a href="https://github.com/thinkful-ei22/WeatherFM-Client-PurpleCobras" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              <br></br>
              <a href="https://weatherfm-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Live Version</a>
            </p>
            <p className="project-description">
            WeatherFM takes your location and gives you music recommendations based on the mood of the weather. Users can save songs they
            like to their individual weather playlist, and if they have a Spotify account, they can export those playlists to their personal account. WeatherFM also has some
            custom search settings that lets the user fine tune the discover feature to find exactly the type of music they are looking for.
            </p>
            <p className="project-description">
              Stack: React/Redux, Node.js, JWT authentication, MongoDB, Mochai/Chai, Enzyme and Jest
            </p>
            <p className="project-description">
              Demo User - Username: demoUser , Password: password
            </p>
          </div>
          <div className="project">
            <h4 className="project-name">Where should we eat?</h4>
            <img className="project-picture" src={whereShouldWeEat} alt="Where Should We Eat input page."/>
            <p className="project-description">
              <a href="https://github.com/thinkful-ei22/filipp-whereToEat-client" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              <br></br>
              <a href="https://filippwheretoeatclient.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Live Version</a>
            </p>
            <p className="project-description">
            I built this application to help me and my friends quickly decide where everyone wants to eat when we have a big
            group of people. This application takes the input of everyone in your group, and gives you the food place that
            came up with the most votes, and it also gives you the nearest location of that specific food place. 
            </p>
            <p className="project-description">
              Stack: React, Reduxt, Express, Mongoose/MongoDB, Node, Node-fetch, Enzyme
            </p>
          </div>
          <div className="project">
            <h4 className="project-name">iLearn</h4>
            <img className="project-picture" src={iLearn} alt="iLearn Main Page."/>
            <p className="project-description">
              <a href="https://github.com/thinkful-ei22/jon-fillip-spaced-repetition-client" target="_blank" rel="noopener noreferrer" className="project-link">GitHub Repo</a>
              <br></br>
              <a href="https://jon-filipp-spcrep-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-link">Live Version</a>
            </p>
            <p className="project-description">
            This is a simple Spanish Language learning app. It takes advantage of the spaced repetition algorithm. As you 
            answer questions right and wrong, you will see questions spaced accordingly based on your success. This creates
            an efficient method of learning new words quickly. This application also allows users to track their progress.
            </p>
            <p className="project-description">
              Stack: React/Redux, Node.js, JWT-Decode, Express, Passport, Dotenv, BcryptJs
            </p>
            <p className="project-description">
              Demo User - Username: test , Password: password
            </p>
          </div>
        </section>

        <section className="contact-div" id="Contact-Info">
          <h3 className="div-header">Wanna talk? Contact Me!</h3>
          <ul className="contact-icons">
            <li className="icon"><a href="https://www.linkedin.com/in/filippgorbunov/" target="_blank" rel="noopener noreferrer"><img src={linkedInIco} alt="LinkedIn Logo"/></a></li>
            <li className="icon"><a href="https://github.com/Filtos" target="_blank" rel="noopener noreferrer"><img src={githubIco} alt="GitHub Logo"/></a></li>
            <li className="icon"><a href="mailto:Filippgorb@gmail.com" target="_blank" rel="noopener noreferrer"><img src={emailIco} alt="eMail Logo"/></a></li>
          </ul>
          <AnchorLink href="#Main" className="back-to-top">Back To Top</AnchorLink>
        </section>

      </div>
    );
  }
}

export default App;
