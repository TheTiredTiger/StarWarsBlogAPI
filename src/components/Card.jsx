import { Link } from "react-router-dom";

function Card(props) {
    return ( 
        <div>
            <div className="card">
                <img src={props.img} className="card-img-top" alt={props.name} />
                <div className="card-body carousel-card">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        Gender: {props.gender}<br/>
                        Eye colour: {props.eye}<br/>
                        Hair colour: {props.hair}
                    </p>
                    <div className="buttons d-flex justify-content-between">
                        <button href="#" className="btn btn-primary"> 
                            <Link className="character-link" to={`/character/${props.id}`}>
                                Learn more
                            </Link>
                        </button>
                        <button href="#" className="btn btn-outline-warning"
                        onClick={props.onAdd}>
                            <i className="fa-regular fa-heart"></i>
                        </button>                        
                    </div>
                </div>
            </div>     
        </div>
     );
}

export default Card;