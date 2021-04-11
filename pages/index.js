import React ,{Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carosoul';
import MovieList from '../components/MovieList';
import {useState,useEffect} from 'react';
import {getMovies} from '../actions'



/// functional component 

const Home = (props)=>{
  
  const {movies} = props

  // const [movieState, setMovie] = useState([])
  

  // useEffect(()=>{
  //   getMovies().then(movies=>{
  //     setMovie(movies)
  //   })
  //   .catch(err=>{
  //     console.log(`Data rendering is failed due to ${err}`)
  //   })
  // },[])
  
  //   getMovies().then((movies )=>{
  //     setMovie(movies)
  //   })
    
    
    return(
    

 



  <div className="container">
    <div className="row">

     {/* sidebar */}
    <Sidebar appName={"Movie DB"} 
    />



      <div className="col-lg-9">
      {/* Carosoule */}

      <Carousel/>
      <div className="d-flex justify-content-space-between">
      </div>

          

        
        {/* MovieList */}
        <MovieList movie_data={ movies||[]}/>


      </div>
    </div>
  </div>





    )
}

Home.getInitialProps = async ()=>{
  const movies = await getMovies();

  return{
    movies
  }
}




/// /////////////// class component
// class Home  extends Component{
  
//   // const [movieState, setMovie] = useState([])
  
//   constructor(props){
//     super(props);
//     this.state = {
//       movies: []
//     }
//   }



//   componentDidMount(){
//     getMovies().then(mov=>{
//       this.setState({
//         movies:mov
//       }
//     )
//     }).
//     catch(err=>{
//       console.log(`Data rendering failed due to ${err}`);
//     })
//   }

//   static getIinitialProps(){
//     getMovies().then(movie=>{
//       setState({
//         movies:movie
//       })
//     })
//     .catch(err=>{
//       console.log(`data rendering error is ${err}`)
//     })

//     return{
      
//     }
//   }






//   // componentDidUpdate(){
//   //   getMovies().then(mov=>{
//   //     this.setState([
//   //       this.state.movies=mov
//   //     ]
//   //   )
//   //   }).
//   //   catch(err=>{
//   //     console.log(`Data rendering failed due to ${err}`);
//   //   })
//   // }

//   // useEffect(()=>{
//   //   getMovies().then(movies=>{
//   //     setMovie(movies)
//   //   })
//   //   .catch(err=>{
//   //     console.log(`Data rendering is failed due to ${err}`)
//   //   })
//   // },[])
  
//     // getMovies().then((movies )=>{
//     //   setMovie(movies)
//     // })



//   render(){

//     const {movies} = this.state;

//     return(
    
//       <Layout>




// <div className="container">
//   <div className="row">

//    {/* sidebar */}
//   <Sidebar appName={"Movie DB"} 
//   />



//     <div className="col-lg-9">
//     {/* Carosoule */}

//     <Carousel/>
//     <div className="d-flex justify-content-space-between">
//     </div>

        

      
//       {/* MovieList */}
//       <MovieList movie_data={movies}/>


//     </div>
//   </div>
// </div>


// </Layout>



//   )
//   }

   
// }



export default Home;