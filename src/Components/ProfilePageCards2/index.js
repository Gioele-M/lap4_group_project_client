import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { Container, Row, Col }  from 'react-bootstrap';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import "./styles.css";


const  ProfilePageCard2 = (props) => {
    // const pStars= useSelector((state) => state.media.data.data[1].averageStars.currentRating)
    // const pName= useSelector((state) => state.media.data.data[0].playlistName)
    // const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
    // const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

    
    // let data = { title: {props.pName}, owner: {props.pOwner}, stars: {props.pStars}, bgc:  {props.pTheme}}

    let data = { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}}
    // const [cardInfo, setCardInfo] = useState ([
    //     { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
    //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
    //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}}
        
    // ]);

    // function that render cards

    const renderCard = (card, index) => {
        return (
            
                <>
                 <Col lg={3} className="m-4" >
                <Card style={{ width: '18rem', backgroundColor: 'rgb{pTheme}'  }} key={index}>
                <Card.Body>
                    <Card.Title>{props.pName}</Card.Title>
                    <Card.Text>
                        <ul>
                        <li>Average stars: {props.pStars}</li>
                        <li>Playlist owner: {props.pOwner}</li>
                        <li>Background colour: {props.pTheme}</li>
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
