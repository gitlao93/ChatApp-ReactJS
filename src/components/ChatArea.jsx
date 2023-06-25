import React from 'react';
import { Tab, Container, Row, Col, Nav } from 'react-bootstrap';
import ChatList from './ChatList';

function ChatArea () {
  return (
    
    <div className="chatbox">
    <div className="modal-dialog-scrollable">
      <div className="modal-content">
        
        
        
        <div className="modal-body">
        <div className="msg-head sticky-top">
          <Row>
            <Col xs={8}>
              <div className="d-flex align-items-center">
                <span className="chat-icon">
                  <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/arroleftt.svg" alt="image title" />
                </span>
                <div className="flex-shrink-0">
                  <img className="img-fluid" src="https://mehedihtml.com/chatbox/assets/img/user.png" alt="user img" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h3>Mehedi Hasan</h3>
                  <p>front end developer</p>
                </div>
              </div>
            </Col>
            
          </Row>
        </div>
          <div className="msg-body">
            <ul>
              <li className="sender">
                <p>Hey, Are you there?</p>
                <span className="time">10:06 am</span>
              </li>
              <li className="sender">
                <p>Hey, Are you there?</p>
                <span className="time">10:16 am</span>
              </li>
              <li className="reply">
                <p>yes!</p>
                <span className="time">10:20 am</span>
              </li>
              <li className="sender">
                <p>Hey, Are you there?</p>
                <span className="time">10:26 am</span>
              </li>
              <li className="sender">
                <p>Hey, Are you there?</p>
                <span className="time">10:32 am</span>
              </li>
              <li className="reply">
                <p>How are you?</p>
                <span className="time">10:35 am</span>
              </li>
              <li>
                <div className="divider">
                  <h6>Today</h6>
                </div>
              </li>

              <li className="reply">
                <p>yes, tell me</p>
                <span className="time">10:36 am</span>
              </li>
              <li className="reply">
                <p>yes... on it</p>
                <span className="time">junt now</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="send-box">
          <form action="">
            <input type="text" className="form-control" aria-label="message…" placeholder="Write message…" />

            <button type="button">
              <i className="fa fa-paper-plane" aria-hidden="true"></i> Send
            </button>
          </form>
              
        </div>
      </div>
    </div>
  </div>
  );
};

export default ChatArea;
