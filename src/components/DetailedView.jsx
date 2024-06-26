import { useContext } from "react";
import { Context } from "./Context";
import { useParams } from "react-router-dom";

function DetailedView(props) {
    const { data, setData } = useContext(Context);

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
                <li>Height: {character.height} </li>
                <li>Skin color: {character.skin_color}</li>
                <li>Home world: {character.homeworld} </li>
            </ul>
        </div>
     );
}

export default DetailedView;