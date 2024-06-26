import { useContext } from "react";
import Card from "./Card";
import { Context } from "./Context";

function CarouselView() {
    const { data, setData } = useContext(Context);

    return ( 
    <div>
        <h3>Characters</h3>
        <div>
            {data && data.map((person, index) => 
            <Card
            name={person.name}
            gender={person.gender}
            eye={person.eye_color}
            hair={person.hair_color}
            img={person.img}
            />)}
        </div>       
    </div>
    );
}

export default CarouselView;