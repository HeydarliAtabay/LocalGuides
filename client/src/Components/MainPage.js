import React, {Component} from 'react';
import {Card, Image, Form, Col} from 'react-bootstrap';
import './CSS/MainPage.css'

class MainPage extends Component {
  render() {
    return (
      <div id="main">
        <h3 id="mainText">Choose Your Next Destination</h3>
        <div id='card'>
          <input type='text'></input>
        </div>
        {/* <Card
          className="text-center"
          border="secondary"
          style={{
            margin: '200px auto',
            width: '40rem',
            height: '20rem',
            background: 'rgba(0, 0, 0, 0.2)'

        }}>
          <Card.Body>
            <Form>
              <Form.Row>
                <Col>
                  <Form.Control placeholder="Search City"/>
                </Col>
              </Form.Row>
            </Form>
          </Card.Body>
        </Card> */}
      </div>
    );
  }
}

export default MainPage;