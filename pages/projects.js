import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import Carousel from 'react-multi-carousel';
import classNames from 'classnames';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Project from '../components/Project';
import { PROJECTS } from '../constants';

const projects = (props) => {
  const [show, setShow] = useState('main');
  return (
    <>
      {show == 'main' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> Creative
              Outcomes
            </h1>
          </div>
          <div className={styles.projects}>
            <div
              className={styles.project_card}
              onClick={() => setShow('uiux-design')}
            >
              <div className={styles.card_img}>
                <img src="/uiux_design.jpg" />
              </div>
              <h4 className={styles.card_count}>10</h4>
              <h2 className={styles.card_title}>UI UX Design</h2>
            </div>
            <div className={styles.project_card} onClick={() => setShow('web-development')}>
              <div className={styles.card_img}>
                <img src="/web_design.jpg" />
              </div>
              <h4 className={styles.card_count}>09</h4>
              <h2 className={styles.card_title}>Web Development</h2>
            </div>
            <div className={styles.project_card} onClick={() => setShow('graphic-design')}>
              <div className={styles.card_img}>
                <img src="/graphic.jpg" />
              </div>
              <h4 className={styles.card_count}>12</h4>
              <h2 className={styles.card_title}>Graphic Design</h2>
            </div>
            <div className={styles.project_card} onClick={() => setShow('mobile-development')}>
              <div className={styles.card_img}>
                <img src="/mobile_apps.jpg" />
              </div>
              <h4 className={styles.card_count}>02</h4>
              <h2 className={styles.card_title}>Mobile Apps Development</h2>
            </div>
          </div>
        </div>
      )}

      {show == 'uiux-design' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> UI - UX Design
            </h1>
            <FaArrowAltCircleLeft style={{ fontSize: '40px' }} onClick={() => setShow('main')} />
          </div>
          <div className={styles.projects}>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <a href='https://www.figma.com/file/3QR2g22o4YEYf3yWwyoKxv/Untitled?node-id=0%3A1&t=ZToWNpkJEvc9AJ7Z-1'>
                <div className={styles.card_img}>
                  <img src="/mymenotr_ui.png" />
                </div>
                <h2 className={styles.card_title}>My Mentor wireframe</h2>
                <p>Online mentoring platform web design using figma</p>
              </a>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <a href='https://www.figma.com/file/hIOaYUzpGYX4qd5ysz3dKF/import%2Fexport?node-id=0%3A1&t=ZToWNpkJEvc9AJ7Z-1'>
                <div className={styles.card_img}>
                  <img src="/import_export_platform.png" />
                </div>
                <h2 className={styles.card_title}>Import and export platform wirframe</h2>
                <p>Online Import and export platform web design using figma</p>
              </a>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/mncec.png" />
              </div>
              <h2 className={styles.card_title}>Mutasim Nimir Centre</h2>
              <p>Mutasim Nimir Centre for Environmental Culture official website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/eitwebsite.png" />
              </div>
              <h2 className={styles.card_title}>Eptikar IT Solutions</h2>
              <p>The company's official website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
              onClick={() => setShow('uiux-design')}
            >
              <div className={styles.card_img}>
                <img src="/savannah.png" />
              </div>
              <h2 className={styles.card_title}>Savannah Innovation Labs</h2>
              <p>The organization's official website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/CivilEd.png" />
              </div>
              <h2 className={styles.card_title}>CivilEd</h2>
              <p>Online learning platform</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/donation.png" />
              </div>
              <h2 className={styles.card_title}>Damancash Donation Campaign</h2>
              <p>Online donations website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/eccs.png" />
              </div>
              <h2 className={styles.card_title}>ECCS</h2>
              <p>European Chamber of Commerce in Sudan official website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/nba.png" />
              </div>
              <h2 className={styles.card_title}>Sudan National Business Agenda</h2>
              <p>The project's official website</p>
            </div>
            <div
              className={classNames(styles.project_card, styles.unisize)}
            >
              <div className={styles.card_img}>
                <img src="/portfolio.png" />
              </div>
              <h2 className={styles.card_title}>My Personal Portfolio V 1.0</h2>
              <p>The previous version of my portfolio</p>
            </div>
          </div>
        </div>
      )}

      {show == 'web-development' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <div>
              <h1 className={styles.main_title}>
                Projects <span style={{ color: '#FD7013' }}>|</span> Web Development
              </h1>
              <p>Any project tagged with "<span style={{color:'#FD7013'}}>Team Efforts</span>" was done with the great help and supervision of the great development team at Eptikar IT Solutions </p>
            </div>
            <FaArrowAltCircleLeft style={{ fontSize: '40px' }} onClick={() => setShow('main')} />
          </div>
          <div className={styles.projects}>
            {
              PROJECTS.map((project,index)=>{
                return(
                  <Project key={index} name={project.name} description={project.description} type={project.type} coverPhoto={project.coverPhoto} url={project.url}/>
                );
              })
            }
          </div>
        </div>
      )}

      {show == 'graphic-design' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> Graphic Design
            </h1>
            <FaArrowAltCircleLeft style={{ fontSize: '40px' }} onClick={() => setShow('main')} />
          </div>
          <div className={styles.projects}>
            <div
              className={styles.project_card}
              onClick={() => setShow('uiux-design')}
            >
              <div className={styles.card_img}>
                <img src="/uiux_design.jpg" />
              </div>
              <h4 className={styles.card_count}>08</h4>
              <h2 className={styles.card_title}>UI UX Design</h2>
            </div>
          </div>
        </div>
      )}

      {show == 'mobile-development' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> Mobile Apps Development
            </h1>
            <FaArrowAltCircleLeft style={{ fontSize: '40px' }} onClick={() => setShow('main')} />
          </div>
          <div className={styles.projects}>
            <div
              className={styles.project_card}
              onClick={() => setShow('uiux-design')}
            >
              <div className={styles.card_img}>
                <img src="/uiux_design.jpg" />
              </div>
              <h2 className={styles.card_title}>UI UX Design</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default projects;
