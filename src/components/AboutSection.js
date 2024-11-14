import React from 'react';
import bookimg from "../images/books.jpg"

function AboutSection() {
    return (
        <div>
        <div className="description"> 
            <div className="title"> 
                 <div className="hide"> 
              <h2>Be educated so that</h2>  
                </div>
                <div className="hide"> 
               <h2>you can change</h2> 
                </div>
                <div className="hide"> 
             <h2> the world</h2>  
                </div>
                </div>
                <p>An educated mind can teach many.An educated mind is better than empty</p>
                <button>About us</button>
        </div>
        <div className="image">
            <img src={bookimg} alt='book'></img>
        </div>
        </div>
    )
}

export default AboutSection;
