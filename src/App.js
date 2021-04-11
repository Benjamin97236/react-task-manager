import './App.css';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import {useState, useEffect} from 'react';
//Importing components
import Header from './components/Header';
import FormControls from './components/FormControls';
import Form from './components/Form';
import Todos from './components/Todos';
import Footer from './components/Footer';


function App() {
  //Setting states
  const [formVisibility, formVisibilityHandler] = useState(false);
  const [type, typeHandler] = useState("all");
  const [autoFilter, setAutoFilter] = useState(false);

  const [posts, postHandler] = useState([]);

  const [limiter, limiterHandler] = useState(3);
  const [typeFilter, typeFilterHandler] = useState([]);

  //Only running once, when the page first loads
  useEffect(() => {
    getLocalPosts();
  }, []);

  //Setting effects
  useEffect(() => {
    filteredPostsType();
  }, [posts, type, autoFilter]);

  //Saving local posts
  useEffect(() => {
    saveLocalPosts();
  }, [posts])

  //The filter function returns the filtered posts
  const filteredPostsType = () => {
    //Switch statement
    switch(type) {
      case 'uncompleted':
        //If the type is set to uncompleted, filter the typeFilterHandler correctly
        typeFilterHandler(posts.filter((post) => post.completed === false));
        return;

      case 'completed':
        //If the type is set to completed, filter the typeFilterHandler correctly
        typeFilterHandler(posts.filter((post) => post.completed));
        return;

      case 'all':
        //Creating arrays to seperate the completed posts from the uncompleted ones
        var returnArrayCompleted = [];
        var returnArrayUncompleted = [];
        var returnResult = [];
        //Looping through each post
        for(var i = 0; i < posts.length; i++) {

          //If autofilter is true, we want to filter the posts
          if(autoFilter) {
            //Setting the uncompleted posts into 'returnArrayUncompleted'
            if(posts[i].completed === false) {
              returnArrayUncompleted.push(posts[i]);
            }
            //Setting the completed posts into 'returnArrayCompleted'
            if(posts[i].completed) {
              returnArrayCompleted.push(posts[i]);
            }
          }

          //If autofilter is false, we do not want to filter the posts
          if(!autoFilter) {
            returnResult.push(posts[i]);
          }
        }

        //Also, if autofilter is true, we have to do one more thing
        if(autoFilter) {
          returnResult = returnArrayUncompleted.concat(returnArrayCompleted);
        }

        //Setting the typeFilterHandlers value
        //This will have filtered the posts so that the uncompleted shows up on top.
        //This will only apply when the 'type state' has been set to 'all'
        typeFilterHandler(returnResult);
        //Setting the arrays back to the default val  ue
        returnArrayCompleted = [];
        returnArrayUncompleted = [];
        return;

      default:
        typeFilterHandler(posts);
        return;
    }
  }

  const saveLocalPosts = () => {
    localStorage.setItem('posts', JSON.stringify(posts))
  }

  const getLocalPosts = () => {
    if(localStorage.getItem('posts') === null) {
      localStorage.setItem('posts', JSON.stringify([]));
    } else {
      let localPost = JSON.parse(localStorage.getItem('posts'));
      postHandler(localPost);
    }
  }

  return (
    <div className="App">
      <Router>
        <Header type={type} typeHandler={typeHandler} />
        <div className="component-container-body">

          <FormControls formVisibilityHandler={formVisibilityHandler}
          formVisibility={formVisibility} setAutoFilter={setAutoFilter}
          autoFilter={autoFilter} />

          <Form formVisibility={formVisibility}
          posts={posts} postHandler={postHandler} />

          <Todos limiter={limiter} type={type}
          posts={posts} postHandler={postHandler} typeFilter={typeFilter} />
          
        </div>
        <Footer />
        <Route path="/" exact />
      </Router>
    </div>
  );
}

export default App;
