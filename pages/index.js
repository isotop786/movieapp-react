import React ,{Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Carousel from '../components/Carosoul';
import MovieList from '../components/MovieList';

const Home = ()=>{
    const data = 'Hello';
    return(
    
        <Layout>
 



  <div className="container">
    <div className="row">

     {/* sidebar */}
    <Sidebar/>



      <div className="col-lg-9">
      {/* Carosoule */}

      <Carousel/>

        
        {/* MovieList */}
        <MovieList/>


      </div>
    </div>
  </div>


  </Layout>



    )
}

export default Home;