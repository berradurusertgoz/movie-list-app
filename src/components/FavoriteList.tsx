import React from 'react'
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';


function FavoriteList() {
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'

    const favoritesList = JSON.parse(localStorage.getItem('movies') as string)
    favoritesList.filter((f: { isFavorite: any; }) => f.isFavorite )
  return (
    
    <div>
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
  <div className="container">
        <div className="grid">
          {favoritesList?.map((item: { poster_path: string; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
            <div  key={index} className="card text-center bg-dark mb-3">
              <div className="p-2">
                <img
                  className="card-img-top"
                  src={API_IMG + item.poster_path}
                />
              <div>
           <p>{item.title}</p> 
        </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  
    </div>
  )
}

export default FavoriteList