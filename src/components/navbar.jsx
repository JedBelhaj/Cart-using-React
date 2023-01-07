
//stateless functional component
//cant use life cycle hooks

const NavBar = ({totalCounters}) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">React App</a>
          <span className="badge m-2 text-bg-secondary">
            {totalCounters}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
