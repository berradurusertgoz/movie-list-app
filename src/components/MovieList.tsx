import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar,Container,Nav,Form, FormControl,Button } from 'react-bootstrap';


function MovieList() {
  const API_URL =
    'https://api.themoviedb.org/3/movie/popular?api_key=b0fc272d6e33db2fe3ebd4f44aab2f1f'
  const API_SEARCH =
    'https://api.themoviedb.org/3/search/movie?api_key=b0fc272d6e33db2fe3ebd4f44aab2f1f&query'
  const API_IMG = 'https://image.tmdb.org/t/p/w500/'



  const [movies, setMovies] = useState(JSON.parse(localStorage.getItem('movies') as string))
  const [query, setQuery]=useState('');



  useEffect(() => {
    if (!movies) {
      fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies([...data.results.map((f: any) =>({...f,isFavorite:false,comments:[]}))])
      })
    }
  }, []);

  const searchMovie = async(e: { preventDefault: () => void; })=>{
    e.preventDefault();
    try{
      const url=`https://api.themoviedb.org/3/search/movie?api_key=b0fc272d6e33db2fe3ebd4f44aab2f1f&query=${query}`;
      const res= await fetch(url);
      const data= await res.json();
      setMovies(data.results);
    }
    catch(e){
      console.log(e);
    }
  }

  const changeHandler=(e: { target: { value: React.SetStateAction<string>; }; })=>{
    setQuery(e.target.value);
  }
useEffect(() => {
  localStorage.setItem('movies', JSON.stringify(movies))
},[movies])
  const addFavoriteMovie = (movie: { poster_path?: string; id: any; isFavorite?: any; }) => {
    setMovies((prev: any[]) => ([...prev.map(f => {
      if (f.id == movie.id) {
        return {...f,isFavorite:true}
      }else {
        return f
      }
    })]))
   

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

<Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
              type="search"
              placeholder="Movie Search"
              className="me-2"
              aria-label="search"
              name="query"
              value={query} onChange={changeHandler}>
            </FormControl>
              <Button variant="secondary" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container">
        <div className="grid">
          {movies?.map((item: { poster_path: string; id: any; isFavorite: any; }, index: React.Key | null | undefined) => (
            <div  key={index} className="card text-center bg-dark mb-3">
              <div className="p-2">
                <img
                  className="card-img-top"
                  src={API_IMG + item.poster_path}
                />
                <div>
                  <Link to={`/${item.id}`}>
                  <button type="button" className="btn btn-dark">View More</button>
                    </Link>
                    <button onClick={()=> addFavoriteMovie(item)} type="button" className={item.isFavorite ? 'btn btn-success' : 'btn btn-dark'}>Add Favorite</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default MovieList
