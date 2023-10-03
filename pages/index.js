import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import classnames from 'classnames';
import { Twirl as Hamburger } from 'hamburger-react';
import {
  BsFillPinMapFill,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from 'react-icons/bs';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [expand, setExpand] = useState('intro');

  // const expand = (id) => {
  //   const elem = document.getElementsByClassName("section");

  //   const allOverlays = document.getElementsByClassName(styles.overlay);
  //   const overlay = document
  //     .getElementById(`${id}`)
  //     .getElementsByClassName(styles.overlay);

  //   const allText = document.getElementsByClassName(styles.content);
  //   const text = document
  //     .getElementById(`${id}`)
  //     .getElementsByClassName(styles.content);

  //   Object.keys(elem).forEach(function (key, index) {
  //     elem[key].style.width = "16%";
  //     Object.keys(allText).forEach(function (key, index) {
  //       allText[key].style.display = "none";
  //     });
  //   });

  //   Object.keys(allOverlays).forEach(function (key, index) {
  //     allOverlays[key].style.background =
  //       "linear-gradient(0deg, rgba(0, 0, 0, 0.8475723052893032) 0%, rgba(0, 0, 0, 0.5142389719559699) 47%, rgba(0, 0, 0, 0) 100%)";
  //   });

  //   document.getElementById(`${id}`).style.width = "80%";

  //   Object.keys(overlay).forEach(function (key, index) {
  //     overlay[key].style.background = "none";
  //   });
  //   Object.keys(text).forEach(function (key, index) {
  //     text[key].style.display = "flex";
  //   });
  // };

  return (
    <>
      <div className="mobile_only">
        <Hamburger
          Direction="right"
          color="#FFF"
          onToggle={(toggled) => {
            if (toggled) {
              setShowMenu(true);
            } else {
              setShowMenu(false);
            }
          }}
        />
      </div>
      {showMenu && (
        <div className="mobile_menu">
          <ul>
            <li>About</li>
            <li>Education</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Awards</li>
          </ul>
        </div>
      )}
      <div className={classnames(styles.panel, 'hide')}>
        <div
          className={expand ==='intro'? classnames(styles.intro, 'section' ,styles.expand ):classnames('section')}
          onClick={()=>setExpand('intro')}
        >
          <div className={styles.overlay} >
            <h1>About</h1>
            <div className={styles.content}>
              <p>
                i am a{' '}
                <span style={{ color: '#FD7013' }}>
                  Front-end Software Developer
                </span>{' '}
                and a <span style={{ color: '#FD7013' }}> UI-UX designer </span>
                with 3 years of experience in Web, and Mobile Development using
                javascript and libraries like React, React Native and more.
                Looking for a challenging software development environment where
                my technical expertise and academic skills will grow and expand.
              </p>
              <div className={styles.content_box}>
                <div>
                  <h2>languages</h2>
                  <div className={styles.languages}>
                    <p>Arabic</p>
                    <p>English</p>
                  </div>
                </div>
                <div>
                  <h2>Get in touch</h2>
                  <ul className={styles.contact_us}>
                    <li>
                      <BsFillTelephoneFill className="icon" />
                      <p>+249 900553618</p>
                    </li>
                    <li>
                      <BsFillEnvelopeFill className="icon" />
                      <p>balqeessaber@gmail.com</p>
                    </li>
                    <li>
                      <BsFillPinMapFill className="icon" />
                      <p>Sudan - Khartoum</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={expand==='experience'?classnames(styles.experience, 'section',styles.expand ):classnames(styles.experience, 'section')}
          id="experience"
          onClick={() => setExpand('experience')}
        >
          <div className={styles.overlay}>
            <h1>Experience</h1>
            <div className={styles.content}>
              <div className={styles.experience_Box}>
                <img
                  className={styles.logo}
                  src="/Eptikar-IT-Solutions-Logo.svg"
                />
                <div>
                  <h4>Eptikar IT Solutions - Sudan</h4>
                  <p style={{ fontWeight: 600 }}>
                    Junior Developer | August 2020 - Current
                  </p>
                  <p>
                    As an intern for three months and as a junior developer
                    after that, working on web, mobile applications development
                    and design.
                  </p>
                </div>
              </div>
              <div className={styles.experience_Box}>
                <img className={styles.logo} src="/tana.png" />
                <div>
                  <h4>Tana Water Tanks - Sudan</h4>
                  <p style={{ fontWeight: 600 }}>
                    Graphic designer | November 2019 - August 2020
                  </p>
                  <p>In sales and Marketing team</p>
                </div>
              </div>
              <div className={styles.experience_Box}>
                <img
                  className={styles.logo}
                  src="/Telekom_Malaysia-Logo.wine.png"
                />
                <div>
                  <h4>Telekom Applied Business SDN BHD - Malaysia</h4>
                  <p style={{ fontWeight: 600 }}>
                    Web Development intern | February 2019 - August 2019
                  </p>
                  <p>
                    For six months in the Development team as a Web Developer
                  </p>
                </div>
              </div>
              <Link className={styles.link} href="/experience">
                Find out more
              </Link>
            </div>
          </div>
        </div>

        <div
          className={expand==='education'?classnames(styles.education, styles.expand,'section'):classnames(styles.education, 'section')}
          id="education"
          onClick={() => setExpand('education')}
        >
          <div className={styles.overlay}>
            <h1>Education</h1>
            <div className={styles.content}>
              <div className={styles.edu_box}>
                <div>
                  <h4>International Islamic University Malaysia ( IIUM )</h4>
                  <h4 className={styles.year}>2015 – 2019</h4>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>
                    Bachelor of Computer Science & Information Technology
                  </p>
                  <p>
                    Relevant courses: Java programming language, Oracle , MySQL
                    Human-Computer Interaction, Operating Systems, Networks
                    Administration, Enterprise Networks, Cryptography. CGPA:
                    3.18
                  </p>
                </div>
              </div>
              <div className={styles.edu_box}>
                <div>
                  <h4>International Islamic University Malaysia ( IIUM )</h4>
                  <h4 className={styles.year}>2014 – 2015</h4>
                </div>
                <div>
                  <p style={{ fontWeight: 600 }}>
                    Foundation program of Computer Science & Information
                    Technology
                  </p>
                  <p>
                    Relevant courses: C/C++ , Basic Computer Skills, HTML/CSS,
                    GPA of 3.36
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={expand ==='skills'?classnames(styles.skills, styles.expand,'section',):classnames(styles.skills, 'section')}
          id="skills"
          onClick={() => setExpand('skills')}
        >
          <div className={styles.overlay}>
            <h1>Skills</h1>
            <div className={styles.content}>
              <ul className={styles.skills}>
                <li>React</li>
                <li>React Native</li>
                <li>Node</li>
                <li>ES6</li>
                <li>Express Js</li>
                <li>Next Js</li>
                <li>REST API</li>
                <li>HTML / CSS</li>
                <li>GIT</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>UI-UX Design</li>
                <li>Figma</li>
                <li>Illustrator / Photoshop</li>
                <li>Project Management</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={expand==='projects'?classnames(styles.projects, styles.expand,'section'):classnames(styles.projects, 'section')}
          id="projects"
          onClick={() => setExpand('projects')}
        >
          <div className={styles.overlay}>
            <h1>Projects</h1>
            <div className={styles.content}>
              <div className={styles.project}>
                <div>
                  <h4>My Mentor online mentoring platform</h4>
                  <p>
                    Developed using next JS and node JS, A web based platform
                    that aims to ease access to training and hands-on experience
                    in different fields.
                  </p>
                </div>
                <img src="/final.png" />
              </div>
              <div className={styles.project}>
                <div>
                  <h4>Eptikar IT Solutions official website</h4>
                  <p>
                    Developed using next JS along with the team, a website that
                    reflects the companies identity and displays it's
                    achievements, projects and investments.
                  </p>
                </div>
                <img src="/EIT 2022 Wallpaper Dark.png" />
              </div>
              <div className={styles.project}>
                <div>
                  <h4>Mutasim Nimir Centre for Environmental Culture </h4>
                  <p>
                    a website that showcases the center's programs and history,
                    developed in the early stages of my career during my
                    internship at Eptikar IT solutions using only pure html and
                    css.
                  </p>
                </div>
                <img src="/mnec.png" />
              </div>
              <div className={styles.project}>
                <div>
                  <h4>European Chamber of Commerce in Sudan </h4>
                  <p>
                    Developed alongside with the development team at Eptikar IT
                    Solutions is the official website for the ECCS which comes
                    with a platform for data entry and a members only portal.
                  </p>
                </div>
                <img
                  src="/eccs_logo.png"
                  style={{ backgroundColor: '#EEE', padding: '10px' }}
                />
              </div>
              <Link className={styles.link} href="/projects">
                Find out more
              </Link>
            </div>
          </div>
        </div>

        <div
          className={expand==='awards'?classnames(styles.experience,styles.expand,'section'):classnames(styles.experience, 'section')}
          id="awards"
          onClick={() => setExpand('awards')}
        >
          <div className={styles.overlay}>
            <h1>Awards</h1>
            <div className={styles.content}>
              <div className={styles.award}>
                <div>
                  <h4>Final Year Project Showcase Finalist</h4>
                  <h4 className={styles.year}>2019</h4>
                </div>
                <p>
                  Project titled content adaptation for smart independent
                  devices.
                </p>
              </div>
              <div className={styles.award}>
                <div>
                  <h4>Dean’s list award</h4>
                  <h4 className={styles.year}>2016</h4>
                </div>
                <p>For Academic excellence with a GPA of 3.5</p>
              </div>
              <div className={styles.award}>
                <div>
                  <h4>Dean’s list award</h4>
                  <h4 className={styles.year}>2015</h4>
                </div>
                <p>For Academic excellence with a GPA of 3.6</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.title}>
        <div>
          <h1>Hello, this is Balqees</h1>
          <h1>
            Welcome to my <span style={{ color: '#FD7013' }}>Portfolio</span>
          </h1>
        </div>
        <a href="">
          <h4>Download my CV</h4>
        </a>
      </div>
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
}
