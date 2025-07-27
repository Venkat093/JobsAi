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

      {/* Grid Layout */}
      <div style={styles.grid}>
        {/* Left Column: Nested Grid */}
        <div style={styles.leftColumn}>
          <div style={styles.profile}><Profile /></div>
          <div style={styles.resume}><Resume /></div>
        </div>

        {/* Right Column: Nested Grid */}
        <div style={styles.rightColumn}>
          <div style={styles.discriptive}><Discriptiveai /></div>
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
    flexDirection: 'column',
    boxSizing: 'border-box'
  },
  header: {
    height: `${HEADER_HEIGHT}px`,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: `${HEADER_HEIGHT}px`,
    borderBottom: '2px solid black',
    boxSizing: 'border-box'
  },
  grid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: '30% 70%',
    height: `calc(100vh - ${HEADER_HEIGHT}px)`,
    width: '100%',
    boxSizing: 'border-box'
  },
  leftColumn: {
    display: 'grid',
    gridTemplateRows: '40% 60%',
    borderRight: '2px solid black',
    height: '100%',
    boxSizing: 'border-box'
  },
  profile: {
    borderBottom: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  resume: {
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  rightColumn: {
    display: 'grid',
    gridTemplateRows: '60% 40%',
    height: '100%',
    boxSizing: 'border-box'
  },
  discriptive: {
    borderBottom: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  code: {
    borderTop: '2px solid black',
    padding: '10px',
    boxSizing: 'border-box',
    overflow: 'auto'
  }
};

export default Appwrapper;
