import React from 'react';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import { Container, Row, Col }  from 'react-bootstrap';
import { useSelector } from 'react-redux'


function ProfilePageCards() {
    console.log("********Igor")
    const pStars= useSelector((state) => state.media.data.data[1].averageStars[0])
    const pName= useSelector((state) => state.media.data.data[0].playlistName)
    const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
    const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

    // console.log({pName})



  return (
        <>
        
        {/* <h1> User Account / Playlist Topics</h1>
        <div className="d-grid gap-2 mb-5">
      <Button variant="danger" size="lg">
       ADD CARD/ TOPIC
      </Button>
        </div> */}

        <Container>
            <Row>
                     {/* CARD 1 */}

                <Col lg={3} className="m-3" >
                <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Title: {pName}</Card.Title>
                    <Card.Text>
                {/* const pName= useSelector((state) => state.media.data[0].playlistTheme) */}
                        <ul>
                        <li>Average stars: {pStars}</li>
                        <li>Playlist owner: {pOwner}</li>
                        <li>Background colour: {pTheme}</li>

                     
                        </ul>
                  
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer>
                </Card>

                </Col>

                    
                     {/* CARD 2 */}

                <Col lg={3} className="m-3" >
                <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Title: {pName}</Card.Title>
                    <Card.Text>
                {/* const pName= useSelector((state) => state.media.data[0].playlistTheme) */}
                        <ul>
                        <li>Average stars: {pStars}</li>
                        <li>Playlist owner: {pOwner}</li>
                        <li>Background colour: {pTheme}</li>

                     
                        </ul>
                  
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer>
                </Card>

                </Col>

                <Col lg={3} className="m-3" >
                <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                    <Card.Title>Card Title: {pName}</Card.Title>
                    <Card.Text>
                {/* const pName= useSelector((state) => state.media.data[0].playlistTheme) */}
                        <ul>
                        <li>Average stars: {pStars}</li>
                        <li>Playlist owner: {pOwner}</li>
                        <li>Background colour: {pTheme}</li>

                     
                        </ul>
                  
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
