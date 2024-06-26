function Navbar() {
    return (
    <>
        <nav className="navbar">
        <div className="container">
            <a className="navbar-brand">Star Wars</a>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-warning" type="submit">Search</button>
            </form>
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favourites
          </a>
          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">
              Action 
              <div className="hidden">
                <i className="fa-solid fa-trash" aria-hidden="true"/>
              </div>
            </a></li>
          </ul>
        </div>
        </nav>

        <h5 className="perspective">
            A long time ago<br/>
            in a galaxy far, far away...
        </h5>
    </> );
}

export default Navbar;

