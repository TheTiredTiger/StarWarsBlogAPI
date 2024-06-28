import { useContext } from "react";
import Card from "./Card";
import { Context } from "./Context";

function CarouselView() {
    const { data, setData, handleAdd } = useContext(Context);

    return ( 
    <div>
        <h3 className="section-title">Characters</h3>
        <div className="container-fluid scrolling-wrapper">
            {data && data.map((person, id) => 
            <Card key={person.id}
            name={person.name}
            gender={person.gender}
            eye={person.eye_color}
            hair={person.hair_color}
            img={person.img}
            id={id}
            onAdd={() => handleAdd(person)}
            />)}
        </div>       
    </div>
    );
}

export default CarouselView;
