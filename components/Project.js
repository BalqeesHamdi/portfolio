import React from 'react';
import styles from '../styles/Projects.module.css';
import classNames from 'classnames';

const Project = ({props}) => {
  const {name,description,coverPhoto,url,type,status}= props;
  if (url !==''){
    return (   
      <a
        href={url}
        className={classNames(styles.project_card, styles.unisize,'tooltip')}
        style={status !== 'Live' && status !== 'Figma' ? {cursor:'default'}:{}} rel="noreferrer noopener" 
        target='_blank'
      >
        <div className={styles.card_img}>
          <img src={coverPhoto} />
        </div>
        <div className={styles.title_wrapper}>
          <h2 className={styles.card_title}>{name}</h2>
          {type && <p className={styles.project_tag}>{type}</p>}
        </div>
        <p style={{width:'90%'}}>{description}</p>
        <span class="bottom-tooltip-text">{status}</span>
      </a>
    );
  }else {
    return(
      <div
        className={classNames(styles.project_card, styles.unisize,'tooltip')}
      >
        <div className={styles.card_img}>
          <img src={coverPhoto} />
        </div>
        <div className={styles.title_wrapper}>
          <h2 className={styles.card_title}>{name}</h2>
          {type && <p className={styles.project_tag}>{type}</p>}
        </div>
        <p style={{width:'90%'}}>{description}</p>
        <span class="bottom-tooltip-text">{status}</span>
      </div>
    );
  }
};

export default Project;