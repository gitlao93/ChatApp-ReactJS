import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ChatArea from '../components/ChatArea';
import ChatList from '../components/ChatList';
function Dashboard () {
    return (
        <main className="container-fl overflow-hidden">
            <Row className="justify-content-md-center">
                <Col xs={2} className='p-0'>
                <ChatList />
                </Col>
                <Col className='p-0'>
                <ChatArea />
                </Col>
            </Row>
        </main>
    );
}

export default Dashboard;