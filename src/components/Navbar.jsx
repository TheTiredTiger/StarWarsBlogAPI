import { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";

function Navbar( props ) {
  const { favorites, dispatch } = useContext(Context);
  // let favorites = JSON.parse(localStorage.getItem("favorites"))

 
  return (
    <>
        <nav className="navbar">
        <div className="container">
            <a className="navbar-brand">Star Wars</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
            <a className="btn btn-warning nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fa-regular fa-heart"></i>
            </a>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
              {favorites.map((item) => {
                return (<li key={item.id} ><Link className="dropdown-item" to={`/character/${item.id}`}>
                  {item.name}
                </Link>
                <div className="delete-icon">
                  <i className="fa-solid fa-trash" aria-hidden="true"/>
                </div>
            </li>)
          })}           
          </ul>
        </div>
        </nav>

        <h5 className="perspective">
            A long time ago<br/>
            in a galaxy far, far away...
        </h5>
    </>
  );
}

export default Navbar;

