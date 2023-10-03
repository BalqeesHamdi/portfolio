import React from 'react';
import styles from '../styles/Projects.module.css';
import classNames from 'classnames';

const Project = ({name,description,coverPhoto,url,type}) => {
  return (
    <div
      className={classNames(styles.project_card, styles.unisize)}
    >
      <div className={styles.card_img}>
        <img src={coverPhoto} />
      </div>
      <h2 className={styles.card_title}>{name} <p>{type}</p></h2>
      <p>{description}</p>
    </div>
  );
};

export default Project;