import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={logo} className={styles.Logo} alt="logo" />
        <p>
          Hello World!
        </p>
      </header>
    </div>
  );
}

export default App;
