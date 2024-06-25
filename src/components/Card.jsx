import React from "react";

function Card() {
    return ( 
        <>
            <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="buttons d-inline">
                    <button href="#" className="btn btn-primary">Go somewhere</button>
                    <button href="#" className="btn btn-outline-warning">Heart</button>
                </div>
            </div>
            </div>        
        </>
     );
}

export default Card;