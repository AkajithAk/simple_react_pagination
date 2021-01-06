/* import React , {Component} from 'react';
import Data from './data.json';
import Datas from './page1.json';
import Pagination from './components/Pagination';
function App(){

  return (
    <div className="App">
    <div className="posts">
      { 
        Datas.map(post=>{
          return(
            <>
            <div key={post.id}>
            <h1>{post.sub_header}</h1>
            <p>{post.publish_date}</p>
            <p>{post.url}</p>
            <p>{post.tag}</p>
            
            </div>
            <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Datas.length}
        paginate={paginate}
      />
            </>
          )
        })
      }
    </div>
    </div>
  )
}

export default App;  */

import Datas from './page1.json';
import React, { useState, useEffect } from 'react';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import axios from 'axios';
import './App.css';
import jsonData from "./page1.json";
console.log(jsonData);

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {console.log("aa");
    const fetchPosts = async () => {
      setLoading(true);console.log("before");
      /*const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); */
      const res = await axios.get(jsonData); 
     
      console.log(res);console.log("after try");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = Datas.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (<>
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Page</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Datas.length}
        paginate={paginate}
      />
    </div>
    
    </>
  );
};

export default App;

/*
import PostData from './page2.json';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
       const res = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
      const ress = await axios.get('./page2.json');
      setPosts(res.data);
      setLoading(false);
    };
*/