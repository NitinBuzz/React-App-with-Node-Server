import React from 'react';
import Design from './Design';
import Bar from './Bar';
import About from './About';
import Footer from './Footer';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <Design />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
