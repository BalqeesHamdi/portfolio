import React from 'react';
import styles from '../styles/Contact.module.css';
import classnames from 'classnames';

const contact = () => {
  const test = 'test';
  return (
    <>
      <div className="main_container">
        <div className={styles.main_title}>
          <h1>Let's work together !</h1>
          <p>
            Have a website that you'd like to create? let me help you with that
          </p>
        </div>

        <form className={styles.contact_form}>
          <div className={classnames('row', 'space_between')}>
            <div className="column" style={{ marginRight: '10px' }}>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" />
            </div>
            <div className="column">
              <label htmlFor="email">Your Email</label>
              <input type="text" name="email" />
            </div>
          </div>
          <div className="column">
            <label htmlFor="company">Your organization or company name</label>
            <input type="text" name="company" />
          </div>
          <div className="row">
            <div className="column" style={{ marginRight: '10px' }}>
              <label htmlFor="budget">Your budget</label>
              <input type="number" name="budget" />
            </div>
            <div className="column">
              <label htmlFor="currency">Currency</label>
              <select name="currency" id="currency">
                <option value="USD">USD</option>
                <option value="SDG">SDG</option>
              </select>
            </div>
          </div>
          <div className="column">
            <label htmlFor="message">Tell me about your project</label>
            <textarea type="text" name="message" rows="4" cols="4" />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default contact;
