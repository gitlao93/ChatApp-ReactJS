import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function ChatList() {
  return (
  
        <div className="chatlist">
        <div className="modal-dialog-scrollable">
            <div className="modal-content">
                <div className="chat-header">
                    <div className="msg-search p-3">
                        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" aria-label="search" />
                    </div>

                </div>

                <div className="modal-body">
                    
                    <div className="chat-lists">
                    <ListGroup as="ul">
                        <ListGroup.Item as="li" active>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row className='d-flex flex-nowrap flex-row align-items-center justify-content-center'>
                                <Col xs={2}>
                                    <Image src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" width="50px" roundedCircle />
                                </Col>
                                <Col xs={10}>
                                    <p className='fw-semibold m-0 text-nowrap px-3'>Name NameNameNam</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
}

export default ChatList;
