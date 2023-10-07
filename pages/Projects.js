import React, { useState } from 'react';
import styles from '../styles/Projects.module.css';
import Carousel from 'react-multi-carousel';
import classNames from 'classnames';
import 'react-multi-carousel/lib/styles.css';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import Project from '../components/Project';
import { WEBPROJECTS,UIPROJECTS } from '../constants';

const Projects = (props) => {
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
              <h4 className={styles.card_count}>{UIPROJECTS.length}</h4>
              <h2 className={styles.card_title}>UI UX Design</h2>
            </div>
            <div className={styles.project_card} onClick={() => setShow('web-development')}>
              <div className={styles.card_img}>
                <img src="/web_design.jpg" />
              </div>
              <h4 className={styles.card_count}>{WEBPROJECTS.length}</h4>
              <h2 className={styles.card_title}>Web Development</h2>
            </div>
            {/* <div className={styles.project_card} onClick={() => setShow('graphic-design')}>
              <div className={styles.card_img}>
                <img src="/graphic.jpg" />
              </div>
              <h4 className={styles.card_count}>12</h4>
              <h2 className={styles.card_title}>Graphic Design</h2>
            </div> */}
            {/* <div className={styles.project_card} onClick={() => setShow('mobile-development')}>
              <div className={styles.card_img}>
                <img src="/mobile_apps.jpg" />
              </div>
              <h4 className={styles.card_count}>02</h4>
              <h2 className={styles.card_title}>Mobile Apps Development</h2>
            </div> */}
          </div>
        </div>
      )}

      {show == 'uiux-design' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <div>
              <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> UI - UX Design
              </h1>
              <FaArrowAltCircleLeft className="back_arrow" onClick={() => setShow('main')} />
            </div>
          </div>
          <div className={styles.projects}>
            {
              UIPROJECTS.map((project,index)=>{
                return( 
                  <div key={index}
                    className={classNames(styles.project_card, styles.unisize)}
                  >
                    <a href={project.url}>
                      <div className={styles.card_img}>
                        <img src={project.coverPhoto} />
                      </div>
                      <h2 className={styles.card_title}>{project.name}</h2>
                      <p>{project.description}</p>
                    </a>
                  </div>);
              })
            }
       
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
              <FaArrowAltCircleLeft className="back_arrow" onClick={() => setShow('main')} />
            </div>
            <p>Any project tagged with "<span style={{color:'#FD7013'}}>Team Efforts</span>" was done with the great help and supervision of the great development team at Eptikar IT Solutions </p>
          </div>
          <div className={styles.projects}>
            {
              WEBPROJECTS.map((project,index)=>{
                return(
                  <Project key={index} name={project.name} description={project.description} type={project.type} coverPhoto={project.coverPhoto} url={project.url}/>
                );
              })
            }
          </div>
        </div>
      )}

      {/* {show == 'graphic-design' && (
        <div className={styles.main_container}>
          <div className={styles.title_section}>
            <h1 className={styles.main_title}>
              Projects <span style={{ color: '#FD7013' }}>|</span> Graphic Design
            </h1>
            <FaArrowAltCircleLeft className="back_arrow" onClick={() => setShow('main')} />
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
            <FaArrowAltCircleLeft className="back_arrow" onClick={() => setShow('main')} />
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
      )} */}
    </>
  );
};

export default Projects;
