import React from 'react';
import styles from '../styles/About.module.css';
import HomeStyles from '../styles/Home.module.css';
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaFigma,
  FaGit,
  FaHtml5,
  FaPaintBrush,
} from 'react-icons/fa';
import { RiBriefcase4Line } from 'react-icons/ri';
import { DiMongodb } from 'react-icons/di';
import { SiAdobeacrobatreader, SiMysql, SiStrapi } from 'react-icons/si';

const about = () => {
  return (
    <>
      <div className="main_container">
        <div className={styles.two_columns}>
          <div className={styles.main_title}>
            <h1>Get to know me a little bit more</h1>
          </div>
          <div>
            <p style={{ fontSize: '1.4em' }}>
              i am a{' '}
              <span style={{ color: '#FD7013' }}>
                Fullstack Software Developer{' '}
              </span>
              and a <span style={{ color: '#FD7013' }}> UI-UX designer </span>
              with 3 years of experience in Web, and Mobile Development using
              javascript and libraries like React, React Native and more.
              Looking for a challenging software development environment where
              my technical expertise and academic skills will grow and expand.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.row}>
          <div style={{ marginRight: '50px', width: '57%' }}>
            <h1>Educational background</h1>
            <div
              className={HomeStyles.content}
              style={{
                display: 'flex',
              }}
            >
              <div className={HomeStyles.edu_box}>
                <div>
                  <h4>International Islamic University Malaysia ( IIUM )</h4>
                  <h4 className={HomeStyles.year}>2014 – 2015</h4>
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
              <div className={HomeStyles.edu_box}>
                <div>
                  <h4>International Islamic University Malaysia ( IIUM )</h4>
                  <h4 className={HomeStyles.year}>2015 – 2019</h4>
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
            </div>
          </div>
          <div>
            <h1>Awards</h1>
            <div className={HomeStyles.content} style={{ display: 'flex' }}>
              <div className={HomeStyles.award}>
                <div>
                  <h4>Final Year Project Showcase Finalist</h4>
                  <h4 className={HomeStyles.year}>2019</h4>
                </div>
                <p>
                  Project titled content adaptation for smart independent
                  devices.
                </p>
              </div>
              <div className={HomeStyles.award}>
                <div>
                  <h4>Dean’s list award</h4>
                  <h4 className={HomeStyles.year}>2016</h4>
                </div>
                <p>For Academic excellence with a GPA of 3.5</p>
              </div>
              <div className={HomeStyles.award}>
                <div>
                  <h4>Dean’s list award</h4>
                  <h4 className={HomeStyles.year}>2015</h4>
                </div>
                <p>For Academic excellence with a GPA of 3.6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h1>Skills</h1>
        <div className={styles.row}>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>React</h4>
              <FaReact style={{ fontSize: '25px' }} />
            </div>
            <p>For web application development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>React Native</h4>
              <FaReact style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>MongoDB</h4>
              <DiMongodb style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Node</h4>
              <FaNodeJs style={{ fontSize: '25px' }} />
            </div>
            <p>For backend development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Java Script</h4>
              <FaJs style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>UI / UX Design</h4>
              <FaPaintBrush style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Express JS</h4>
              <img
                src="/expressjs-icon.svg"
                style={{ fontSize: '25px', width: '25px' }}
              />
            </div>
            <p>For backend development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Next JS</h4>
              <img
                src="/next.svg"
                style={{ fontSize: '25px', width: '40px' }}
              />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Figma</h4>
              <FaFigma style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>REST API</h4>
            </div>
            <p>For backend development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>HTML / CSS</h4>
              <FaHtml5 style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Illustrator / Photoshop</h4>
              <SiAdobeacrobatreader style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>GIT</h4>
              <FaGit style={{ fontSize: '25px' }} />
            </div>
            <p>For backend development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>MySQL</h4>
              <SiMysql style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Strapi</h4>
              <SiStrapi style={{ fontSize: '25px' }} />
            </div>
            <p>Open source Headless CMSt</p>
          </div>
          <div className={styles.skill_block}>
            <div className={styles.skill_title}>
              <h4>Project Management</h4>
              <RiBriefcase4Line style={{ fontSize: '25px' }} />
            </div>
            <p>For mobile apps development</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
