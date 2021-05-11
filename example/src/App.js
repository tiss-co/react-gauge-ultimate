import React from 'react';
import { Gauge } from 'react-gauge-ultimate';
import 'react-gauge-ultimate/dist/index.css';
import './index.css';

const App = () => (
  <div lassName="App">
    <div className="Title">
      React Gauge Ultimate
    </div >

    <div className='Row'>
      <Gauge
        id='hideText'
        className='Gauge'
        label='Hide Text'
        percent={0.05}
        hideText
      />
      <Gauge
        id='labelByValue'
        className='Gauge'
        label='Custom Label'
        percent={0.9}
        darkMode={false}
      />
      <Gauge
        id='customArcColors'
        className='Gauge'
        label='Custom Arc Colors'
        percent={0.33}
        colors={['red', 'green', 'blue', 'orange']}
      />
    </div>

    <div className='Row'>
      <Gauge
        id='customArcWidth'
        className='Gauge'
        label='Custom Arc Width'
        percent={0.7}
        arcWidth={0.15}
      />
      <Gauge
        id='customArcsRanges'
        className='Gauge'
        label='Custom Arc Ranges'
        percent={0.5}
        arcsLength={[0.25, 0.25, 0.25, 0.25]}
      />
      <Gauge
        id='customCornerRadius'
        className='Gauge'
        label='Custom Corner Radius'
        percent={0.44}
        cornerRadius={15}
      />
    </div>
  </div >
);

export default App;