import { useContext } from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function DetailedView(props) {
/*     const { data, setData } = useContext(Context);
 */
    let data = JSON.parse(localStorage.getItem("data"));
    let { id } = useParams();
    let character = data[id];

    return ( 
        <div key={character.id}>
            <h2 className="character-name">{character.name}</h2>
            <img src={character.img} alt="" />
            <ul style={{color: "white"}} >
                <li>Birth year: {character.birth_year}</li>
                <li>Eye color: {character.eye_color}</li>
                <li>Hair color: {character.hair_color}</li>
                <li>Gender: {character.gender}</li>
                <li>Height: {character.height} cm</li>
                <li>Skin color: {character.skin_color}</li>
                {/* <li>Home world: {character.homeworld} </li> */}
            </ul>
            <div>
                <button href="#" className="btn btn-primary"> 
                    <Link className="button-return" to="/">
                        Go back
                    </Link>
                </button>
                <button href="#" className="btn btn-outline-warning">
                    <i className="fa-regular fa-heart"></i>
                </button>
            </div>
            
        </div>
     );
}

export default DetailedView;