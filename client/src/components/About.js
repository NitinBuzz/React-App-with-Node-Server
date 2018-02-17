import React from 'react';
import axios from 'axios';
import Snackbar from 'material-ui/Snackbar';
import {
  Grid,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import World from 'material-ui/svg-icons/social/public';
import School from 'material-ui/svg-icons/social/school';
import Cake from 'material-ui/svg-icons/social/cake';
import Error2 from 'material-ui/svg-icons/alert/error';
import Favorite from 'material-ui/svg-icons/action/favorite';
import Work from 'material-ui/svg-icons/action/work';
import Send from 'material-ui/svg-icons/content/send';
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Anonymous',
      email: null,
      message: null,
      sent: false,
      open: false,
      open2: false,
      serverMessage: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEMailChange = this.handleEMailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEMailChange(event) {
    this.setState({ email: event.target.value });
  }
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleSubmit = event => {
    axios
      .post('/api/user', {
        Name: this.state.name,
        Email: this.state.email,
        Message: this.state.message
      })
      .then(response => {
        this.setState({
          name: 'Anonymous',
          email: null,
          message: null,
          serverMessage: response.data,
          sent: true
        });
        console.log(response);
        setTimeout(
          function() {
            this.setState({ sent: false });
          }.bind(this),
          3000
        );
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="about" style={{}}>
        <div className="aboutHead">
          <h1>About Me</h1>
        </div>
        <div className="aboutBody">
          <p>
            <p className="aboutStrip1">
              Isha represents modern indian women. Isha is just 20, she's{' '}
              beautiful inside out.
            </p>
            <p className="aboutStrip2">
              Isha is about to finish her undergraduation{' '}
              <School
                color={'#ffffff'}
                hoverColor={'#F9A825'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />
              & she already had multiple offers{' '}
              <Work
                color={'#ffffff'}
                hoverColor={'#F9A825'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />
              in hand.
            </p>{' '}
            <p className="aboutStrip3">
              Isha is world class Certified Senior System Architect.
            </p>
            <p className="aboutStrip4">
              Isha is Daddy's Gal{' '}
              <Favorite
                color={'#ffffff'}
                hoverColor={'#D84315'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />
              and Mommy's World{' '}
              <World
                color={'#ffffff'}
                hoverColor={'#D84315'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />{' '}
            </p>
            <p className="aboutStrip5">
              {' '}
              <Cake
                color={'#ffffff'}
                hoverColor={'#00695c'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />
              Wish her on Sep 19th.
            </p>{' '}
            <p className="aboutStrip6">
              You hurt her,{' '}
              <Error2
                color={'#ffffff'}
                hoverColor={'#12140c'}
                style={{ margin: 0, marginBottom: -3, marginRight: 5 }}
              />I will cut you.
            </p>
          </p>
        </div>
        <div className="aboutHead" style={{ marginTop: '55px' }}>
          <h1>Contact Me</h1>
        </div>
        {this.state.sent ? (
          <div>
            <div className="contactMessage">
              <Grid>
                <Row>
                  <Col mdOffset={4} md={4} mdOffset={4}>
                    {this.state.serverMessage}
                  </Col>
                </Row>
              </Grid>
            </div>
          </div>
        ) : (
          <div className="contactForm">
            <Grid>
              <Row>
                <Col mdOffset={2} md={8} mdOffset={2}>
                  <form onSubmit={this.handleSubmit}>
                    <TextField
                      fullWidth
                      hintText="Name (Optional)"
                      hintStyle={{ color: '#ffffff' }}
                      onChange={this.handleNameChange}
                      style={{ marginLeft: '5px' }}
                      inputStyle={{ color: '#ffffff' }}
                    />

                    <TextField
                      fullWidth
                      hintText="Email"
                      hintStyle={{ color: '#ffffff' }}
                      onChange={this.handleEMailChange}
                      style={{ marginLeft: '5px' }}
                      errorText="This field is required."
                      errorStyle={{ color: '#F9A825' }}
                      inputStyle={{ color: '#ffffff' }}
                    />

                    <TextField
                      fullWidth
                      multiLine
                      hintText="Message"
                      hintStyle={{ color: '#ffffff' }}
                      onChange={this.handleMessageChange}
                      style={{ marginLeft: '5px' }}
                      errorText="This field is required."
                      errorStyle={{ color: '#F9A825' }}
                      textareaStyle={{ color: '#ffffff' }}
                    />
                    <Col smOffset={4} sm={4} smOffset={4}>
                      <RaisedButton
                        fullWidth
                        backgroundColor="#177094"
                        label="Say Hi"
                        labelPosition="before"
                        labelStyle={{
                          color: '#ffffff',
                          fontFamily: 'Audiowide'
                        }}
                        icon={<Send color={'#ffffff'} />}
                        style={{ margin: 12, align: 'center' }}
                        onClick={this.handleSubmit}
                      />
                    </Col>
                  </form>
                </Col>
              </Row>
            </Grid>
          </div>
        )}
        <Snackbar
          open={this.state.open}
          message="Please Provide valid email and message"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default About;
