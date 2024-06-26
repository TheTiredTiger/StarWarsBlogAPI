function Card(props) {
    return ( 
        <>
            <div className="card">
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        Gender: {props.gender}<br/>
                        Eye colour: {props.eye}<br/>
                        Hair colour: {props.hair}
                    </p>
                    <div className="buttons d-flex">
                        <button href="#" className="btn btn-primary">Learn more</button>
                        <button href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
            </div>     
        </>
     );
}

export default Card;