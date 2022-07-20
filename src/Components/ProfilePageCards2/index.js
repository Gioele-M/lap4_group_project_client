import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux'
import { Container, Row, Col }  from 'react-bootstrap';
import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import "./styles.css";


const  ProfilePageCards2 = ({data}) => {
    // const pStars= useSelector((state) => state.media.data.data[1].averageStars.currentRating)
    // const pName= useSelector((state) => state.media.data.data[0].playlistName)
    // const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
    // const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

    
    // let data = { title: {props.pName}, owner: {props.pOwner}, stars: {props.pStars}, bgc:  {props.pTheme}}

    console.log(data)
    // let data = { title: {props.data.title}, owner: {props.data.owner}, stars: {props.data.stars}, bgc:  {props.data.bgc}}

    // const [cardInfo, setCardInfo] = useState ([
    //     { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
    //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
    //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}}
        
    // ]);

    // function that render cards

    const renderCard = () => {
        const thisPage = () => {
            console.log(data.title)
        }
        return (
            
                <>
                             
                 <Col lg={3} className="m-4" >
                <Card style={{ width: '18rem', backgroundColor: 'rgb{data.bgc}'}} key={data.title}>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        <ul>
                        <li>Average stars: {data.stars}</li>
                        <li>Playlist owner: {data.owner}</li>
                        <li>Background colour: {data.bgc}</li>
                        </ul>
                    </Card.Text>
                    <a href="#" class="stretched-link" onClick={thisPage}></a>
                </Card.Body>
                {/* <Card.Footer className="text-muted">Last update: 2 days ago</Card.Footer> */}
                </Card>
                </Col>
                </>
          
        )
    }

  return (
    
            // <Container>
            // <Row>
            <>
            {renderCard()}  
            
            </>
            // </Row>
            // </Container>   
  );
}

export default ProfilePageCards2;
