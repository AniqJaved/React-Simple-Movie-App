import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Cards  from './Cards';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className="container">
        <div className="row">
          
            <Cards
            imgsrc = "images/movie-1.jpg"
            title = "Iron Man"
            desc = "Superhero movie"
            link = "link1"
            />
            <Cards
            imgsrc = "images/movie-2.jpg"
            title = "Superman"
            desc = "Superhero movie"
            link = "link2"
            />
            <Cards
            imgsrc = "images/movie-3.jpg"
            title = "Superman"
            desc = "Superhero movie"
            link = "link2"
            />
            
            </div>
            </div>
  </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
