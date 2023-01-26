import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';


function MovieDetail() {
   const [detail, setDetail] = useState("")
    const [comment, setComment] = useState('')
    const movies = JSON.parse(localStorage.getItem('movies'))
    const userCredential = JSON.parse(localStorage.getItem('credential'))
    const { id } = useParams()
    const [comments, setComments] = useState(movies?.find((m) => m.id == id)?.comments)
    const API_URL =
    `https://api.themoviedb.org/3/movie/${id}?api_key=b0fc272d6e33db2fe3ebd4f44aab2f1f&language=en-US`
    
    const API_IMG = 'https://image.tmdb.org/t/p/w500/'
    useEffect(() => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setDetail(data)
        })
    }, []);
    
   
    const addComment = () => {
      setComments((prev) => ([...prev,{mail:userCredential.mail,comment:comment}]))
      localStorage.setItem('movies',JSON.stringify(movies.map((m) => {
        if (m.id == id) {
          return {...m,comments:[...m.comments,{mail:userCredential.user.email,comment:comment}]}
        }
        else {
          return m
        }
      })))
    }
   
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">MovieDb App</Navbar.Brand>
        <Navbar.Brand href="/favorites">Favorites</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>

          <Navbar.Collapse id="navbarScroll">
            <Nav 
            className="me-auto my-2 my-lg-3"
            style={{maxHeight:'100px'}}
            navbarScroll></Nav>


          </Navbar.Collapse>
      </Container>
    </Navbar>
        <div className="card bg-dark" >
          <div className="card-body">
          <img className="card-img-top img-sect" src={API_IMG + detail.poster_path} alt="Card image cap" />
            <h5 className="card-title">{detail.title}</h5>
            <p className="card-text" key={detail.index}>
              {detail.overview}
            </p>
          </div>
        </div>
        <div className="form-group mt-3 comment-group">
    <textarea onChange={(e) => setComment(e.target.value)} placeholder='Give a comment' class="form-control comment-form" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button className='mt-3 comment-button' onClick={addComment}>Add</button>
  </div>

  <div className='comment-part'>
          {
            comments?.map((c) => (
              <h4>{c.comment}</h4>
            ))
          }
        </div>
    </>
  )
}

export default MovieDetail
