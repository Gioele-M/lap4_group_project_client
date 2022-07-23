import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { setSelectedPlaylist } from '../../State/actionCreators/selection'
import { useNavigate } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
import './style.css'

const ProfilePageCards2 = ({ data }) => {
  // const pStars= useSelector((state) => state.media.data.data[1].averageStars.currentRating)
  // const pName= useSelector((state) => state.media.data.data[0].playlistName)
  // const pOwner= useSelector((state) => state.media.data.data[0].playlistOwner)
  // const pTheme= useSelector((state) => state.media.data.data[0].playlistTheme)

  // let data = { title: {props.pName}, owner: {props.pOwner}, stars: {props.pStars}, bgc:  {props.pTheme}}
  console.log('*******************')
  console.log('DATA for the playlist from profilecards2: ', data)
  // let data = { title: {props.data.title}, owner: {props.data.owner}, stars: {props.data.stars}, bgc:  {props.data.bgc}}

  // const [cardInfo, setCardInfo] = useState ([
  //     { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
  //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}},
  //     // { title: {pName}, owner: {pOwner}, stars: {pStars}, bgc:  {pTheme}}

  // ]);

  // function that render cards

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logo = require('../../images/watermark.png')

  const renderCard = () => {
    const thisPage = () => {
      //dispatch is actually for playlist
      dispatch(setSelectedPlaylist(data.title))
      console.log(data.title)
      navigate('/playlist')
    }
    return (
      <>
        <Col lg={3} className="m-4">
          <div
            className="card bg-dark text-white"
            style={{
              width: '18rem',
              height: '18rem',
              backgroundColor: 'rgb{data.bgc}',
            }}
            key={data.title}
          >
            {/* <img src="..." class="card-img" alt="..."> */}
            {/* <Card.Img src="../src/images/logo.png" alt="Card image" /> */}
            <img
              className="navbar-brand navbar-logo igor"
              href="#"
              src={logo}
              alt="Write and Watch Logo"
            />
            <div className="card-img-overlay">
              <h2 className="card-title text-center">{data.title}</h2>
              <br></br>
              <p className="card-text text-center">
                <br></br>
                {data.owner}
              </p>
              <a href="#" class="stretched-link" onClick={thisPage}></a>
              <p className="card-text text-center text-muted">
                Rating stars: {data.stars}
              </p>
            </div>
          </div>
        </Col>
      </>
    )
  }

  return (
    // <Container>
    // <Row>
    <>{renderCard()}</>
    // </Row>
    // </Container>
  )
}

export default ProfilePageCards2
