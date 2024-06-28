import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DetailedView() {
    let data = JSON.parse(localStorage.getItem("data"));
    let { id } = useParams();
    let character = data[id];
    

    return ( 
        <div className="card" style={{width: "90%", margin: "auto"}} key={character.id}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={character.img} className="img-fluid rounded-start" alt={character.name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title character-name" style={{color: "black"}}>{character.name}</h5>
                        <div className="card-text">
                            <ul >
                                <li>Birth year: {character.birth_year}</li>
                                <li>Eye color: {character.eye_color}</li>
                                <li>Hair color: {character.hair_color}</li>
                                <li>Gender: {character.gender}</li>
                                <li>Height: {character.height} cm</li>
                                <li>Skin color: {character.skin_color}</li>
                                {/* <li>Home world: {character.homeworld} </li> */}
                            </ul>
                        </div>
                    </div>
                    <div style={{position: "absolute", right: "0", bottom: "0", margin: "1.5rem"}}>
                        <button href="#" className="btn btn-primary" style={{marginRight: "1rem"}}> 
                            <Link className="button-return" to="/">
                                Go back
                            </Link>
                        </button>
                        <button href="#" className="btn btn-outline-warning">
                            <i className="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DetailedView;