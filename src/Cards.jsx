import React from "react";

function Cards(props) {
    return(
      <>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <img className="card-img-top" src={props.imgsrc} alt="myPic"/>
                    <div className="card-body">
                        <span className="card-title">{props.title}</span>
                        <h3 className='card-text'>{props.desc}</h3>
                        <a href={props.link} target="_blank" className="btn btn-primary">Go to movie</a>
                    </div>
                </div>
            
    </>
    );
    
  }
  
  export default Cards;