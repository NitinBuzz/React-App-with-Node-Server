import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import ContentMail from 'material-ui/svg-icons/content/mail';
import FlatButton from 'material-ui/FlatButton';
import { red500, lightBlue50, blue500 } from 'material-ui/styles/colors';

function handleClick() {
  alert('onClick triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
    fontFamily: 'Audiowide',
    fontSize: '200%',
    marginBottom: -10
  }
};

class Bar extends React.Component {
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Sirisha G</span>}
        style={{ background: '#177094', marginBottom: '50px' }}
        iconElementLeft={
          <IconButton iconStyle={{ marginTop: -5, height: 40, width: 40 }}>
            <WhatsHot color={'#ffffff'} hoverColor={red500} />
          </IconButton>
        }
        iconElementRight={
          <IconButton
            hoveredStyle={{ backgroundColor: '#424242' }}
            tooltip="eMail Isha"
            target="_blank"
            href="mailto:g.lakshmisirisha19@gmail.com?cc=reachnitinvenkat@gmail.com"
          >
            <ContentMail />
          </IconButton>
        }
      />
    );
  }
}
export default Bar;
