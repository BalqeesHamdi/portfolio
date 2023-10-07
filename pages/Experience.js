import React,{useState} from 'react';
import styles from '../styles/Experience.module.css';

const Experience = () => {
  const [show, setShow] = useState('EIT');
  return (<>
    <div className={styles.main_container}>
      <div className={styles.title_section}>
        <h1 className={styles.main_title}>
              Experience <span style={{ color: '#FD7013' }}>|</span> Employment History
        </h1>
      </div>
      <div className={styles.companies_main_container}>
        <div className={styles.company_show}> 
          {
            show === 'EIT' && 
            <div>
              <div className={styles.company_show_header}>
                <img
                  className={styles.logo}
                  src="/Eptikar-IT-Solutions-Logo.svg"
                />
                <div>
                  <h4>Eptikar IT Solutions - Sudan</h4>
                  <p>
                    Junior Developer | August 2020 - Current
                  </p>
                </div>
              </div>
              <p className={styles.company_show_description}>
                    As an intern for three months and as a junior developer
                    after that, working on web, mobile applications development
                    and design.
              </p>
              <ul className={styles.list}>
                <li>Developed and designed more than 6 websites including the company’s official website.</li>
                <li>Created and oversaw wireframe designs from clients requests.</li>
                <li>Developed and designed 2 mobile apps and helped in adding new features to existing apps.</li>
                <li>Designed logos and brochures for the company’s products and the company’s profile.</li>
                <li>Designed and developed web applications using React js which increased audience engagement by 20%.</li>
                <li>Conducted workshops and meetings to collect requirements from users. </li>
                <li>Conducted End-user training for more than 3 companies.</li>
              </ul>
            </div>
          }
          {
            show === 'tana' && 
            // <div>
            //   <img className={styles.logo} src="/tana.png" />
            //   <div>
            //     <h4>Tana Water Tanks - Sudan</h4>
            //     <p style={{ fontWeight: 600 }}>
            //         Graphic designer | November 2019 - August 2020
            //     </p>
            //     <p>In sales and Marketing team</p>
            //   </div>
            // </div>
            <div>
              <div className={styles.company_show_header}>
                <img
                  className={styles.logo}
                  src="/tana.png"
                />
                <div>
                  <h4>Tana Water Tanks - Sudan</h4>
                  <p>
                   Graphic designer | November 2019 - August 2020
                  </p>
                </div>
              </div>
              <p className={styles.company_show_description}>
              as a member of sales and marketing team, in addition to Design tasks, 
              i personally helped in sales transactions and in reporting, 
              playing a key role in the department as the right hannd of the team leader. 
              </p>
              <ul className={styles.list}>
                <li>Designed the company profile</li>
                <li>Designed brochures for the company’s products.</li>
                <li>Increased sales through social media platforms by more than 40%.</li>
                <li>Designed social media posters for the company.</li>
              </ul>
            </div>
          }
          {
            show === 'telekom' && 
            // <div>
            //   <img
            //     className={styles.logo}
            //     src="/Telekom_Malaysia-Logo.wine.png"
            //   />
            //   <div>
            //     <h4>Telekom Applied Business SDN BHD - Malaysia</h4>
            //     <p style={{ fontWeight: 600 }}>
            //         Web Development intern | February 2019 - August 2019
            //     </p>
            //     <p>
            //         For six months in the Development team as a Web Developer
            //     </p>
            //   </div>
            // </div>
            <div>
              <div className={styles.company_show_header}>
                <img
                  className={styles.logo}
                  src="/Telekom_Malaysia-Logo.wine.png"
                />
                <div>
                  <h4>Telekom Applied Business SDN BHD - Malaysia</h4>
                  <p>
                  Web Development intern | February 2019 - August 2019                  </p>
                </div>
              </div>
              <p className={styles.company_show_description}>
              As an intern for 6 months, and as the only international person in the comapny, 
              working at Telekom was a unique Experience where i got to learn a lot about software developemnt, 
              IT departments in big companies and Malaysian companies work environment.
              </p>
              <ul className={styles.list}>
                <li>Developed user interfaces with modern Javascript frameworks. HTML and CSS which improved user satisfaction by 31%.</li>
                <li>Performed tasks assigned by the internship supervisor efficiently.</li>
              </ul>
            </div>
          }
        </div>
        <div className={styles.companies_container}>
          <div className={styles.experience_Box} onClick={()=>setShow('EIT')}>
            <img
              className={styles.logo}
              src="/Eptikar-IT-Solutions-Logo.svg"
            />
            <div>
              <h4>Eptikar IT Solutions - Sudan</h4>
              <p>
                    Junior Developer | August 2020 - Current
              </p>
            </div>
          </div>
          <div className={styles.experience_Box} onClick={()=>setShow('tana')}>
            <img className={styles.logo} src="/tana.png" />
            <div>
              <h4>Tana Water Tanks - Sudan</h4>
              <p>
                    Graphic designer | November 2019 - August 2020
              </p>
            </div>
          </div>
          <div className={styles.experience_Box} onClick={()=>setShow('telekom')}>
            <img
              className={styles.logo}
              src="/Telekom_Malaysia-Logo.wine.png"
            />
            <div>
              <h4>Telekom Applied Business SDN BHD - Malaysia</h4>
              <p>
                    Web Development intern | February 2019 - August 2019
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>);
};

export default Experience;
