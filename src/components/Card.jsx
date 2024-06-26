function Card(props) {
    return ( 
        <div>
            <div className="card" style={{width: "18rem", flex: "0 0 auto"}}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        Gender: {props.gender}<br/>
                        Eye colour: {props.eye}<br/>
                        Hair colour: {props.hair}
                    </p>
                    <div className="buttons d-flex justify-content-between">
                        <button href="#" className="btn btn-primary">Learn more</button>
                        <button href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>                        
                    </div>
                </div>
            </div>     
        </div>
     );
}

export default Card;