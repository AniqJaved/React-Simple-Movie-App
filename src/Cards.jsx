import React from "react";

const d = new Date();
let a = d.getHours();
let b = d.getMinutes();
let c = 0;
if(a%12==0){
    c = a;
}
else{
    c = a%12;
}

function Cards(props) {
    return(
      <>
                <div className="card" style={{width: 18 + 'rem'}}>
                    <div className="card-body">
                        <span className="card-title"></span>
                        <h3 className='card-text'>{`${c}:${b}`}</h3>
                    </div>
                </div>
            
    </>
    );
    
  }
  
  export default Cards;