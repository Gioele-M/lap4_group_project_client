import React from 'react';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import { Container, Row, Col }  from 'react-bootstrap';


function ProfilePageCards() {
  return (
        <>
        
        <h1> User Account / Playlist Topics</h1>
        <div className="d-grid gap-2 mb-5">
      <Button variant="danger" size="lg">
       ADD CARD/ TOPIC
      </Button>

      
    </div>
        <Container>
            <Row>
                     {/* CARD 2 */}

                <Col lg={3} className="m-3" >
                <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Default Title</Card.Title>
                    <Card.Text>
                        Content:
                    - Number of chapters 
                    - Average stars 
                    - Playlist name 
                    - Playlist owner 
                    - Background colour 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer>
                </Card>

                </Col>

                     {/* CARD 2 */}
                     <Col lg={3} className="m-3">
                <Card style={{ width: '18rem' }} >
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Default Title</Card.Title>
                    <Card.Text>
                        Content:
                    - Number of chapters 
                    - Average stars 
                    - Playlist name 
                    - Playlist owner 
                    - Background colour 
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer>
                </Card>

                </Col>
            </Row>
        </Container>
       
        </>
      );
    }

export default ProfilePageCards;
