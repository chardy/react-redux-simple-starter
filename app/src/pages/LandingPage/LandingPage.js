import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './LandingPage.module.scss';
// Example to import a component using ES6 destructuring.
import { MyAmazingContainer } from '../../containers';

const LandingPage = (props) => (
  <div className={styles.container}>
    <h1 className={styles.header}>Hello from landing page</h1>
    <MyAmazingContainer
      {...props}
    />
  </div>
);

export default CSSModules(LandingPage, styles);
