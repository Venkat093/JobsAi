import React from 'react';
import Codeai from './Codeai';
import Discriptiveai from './Discriptiveai';
import Profile from './Profile';
import Resume from './Resume';

const Appwrapper = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>www.interviewcopilot.com</div>

      {/* Main layout after header */}
      <div style={styles.main}>
        {/* Top row (40%) */}
        <div style={styles.topRow}>
          <div style={styles.profile}><Profile /></div>
          <div style={styles.discriptive}><Discriptiveai /></div>
        </div>

        {/* Bottom row (60%) */}
        <div style={styles.bottomRow}>
          <div style={styles.resume}><Resume /></div>
          <div style={styles.code}><Codeai /></div>
        </div>
      </div>
    </div>
  );
};

const HEADER_HEIGHT = 60;

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    height: `${HEADER_HEIGHT}px`,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: `${HEADER_HEIGHT}px`,
    borderBottom: '2px solid black'
  },
  main: {
    flex: 1, // remaining height after header
    display: 'flex',
    flexDirection: 'column'
  },
  topRow: {
    flexBasis: '40%',
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '2px solid black'
  },
  bottomRow: {
    flexBasis: '60%',
    display: 'flex',
    flexDirection: 'row'
  },
  profile: {
    width: '30%',
    borderRight: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box'
  },
  discriptive: {
    width: '70%',
    padding: '10px',
    boxSizing: 'border-box'
  },
  resume: {
    width: '30%',
    borderRight: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box'
  },
  code: {
    width: '70%',
    padding: '10px',
    boxSizing: 'border-box',
    borderTop: '2px solid black' // Optional: visual separation within bottom
  }
};

export default Appwrapper;
