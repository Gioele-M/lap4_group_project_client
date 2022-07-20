import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { Container, Row, Col }  from 'react-bootstrap';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';


const  ProfilePageCard2 = () => {
    const pStars= useSelector((state) => state.media.data.data[1].averageStars[0])
    const pName= useSelector((state) => state.media.data.data[0].playlistName)
    const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
    const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

    
    const [cardInfo, setCardInfo] = useState ([
        { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
        { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
        { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}}
        
    ]);
    // function that render cards

    const renderCard = (card, index) => {
        return (
            
                <>
                 <Col lg={3} className="m-4" >
                <Card style={{ width: '18rem' }} key={index}>
                <Card.Body>
                    <Card.Title>{pName}</Card.Title>
                    <Card.Text>
                        <ul>
                        <li>Average stars: {pStars}</li>
                        <li>Playlist owner: {pOwner}</li>
                        <li>Background colour: {pTheme}</li>
                        </ul>
                    </Card.Text>
                    <a href="/playlist" class="stretched-link"></a>
                </Card.Body>
                {/* <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer> */}
                </Card>
                </Col>
                </>
          
        )
    }

  return (
    
            <Container>
            <Row>
                {cardInfo.map(renderCard)}  
            </Row>
            </Container>   
  );
}

export default ProfilePageCard2;
