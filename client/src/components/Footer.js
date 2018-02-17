import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Favorite from 'material-ui/svg-icons/action/favorite';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Grid>
          <Row>
            <Col mdOffset={2} md={8} mdOffset={2}>
              <p>
                Find Isha on{' '}
                <a
                  href="https://www.facebook.com/profile.php?id=100006157187297"
                  target="_blank"
                >
                  {' '}
                  Facebook{' '}
                </a>{' '}
                ||
                <a
                  href="https://www.linkedin.com/in/lakshmi-sirisha-gaddipati-758a2113b/"
                  target="_blank"
                >
                  {' '}
                  Linkedin{' '}
                </a>
              </p>
              <br />
              <br />
              <p>Thanks for visiting.</p>
              <br />
              <br />
              <p>
                Made with{' '}
                <Favorite
                  color={'#C62828'}
                  hoverColor={'#D84315'}
                  style={{
                    height: 15,
                    width: 15,
                    margin: 0,
                    marginBottom: -3
                  }}
                />{' '}
                by{' '}
                <a href="http://nitinbuzz.online" target="_blank">
                  Nitin
                </a>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Footer;
