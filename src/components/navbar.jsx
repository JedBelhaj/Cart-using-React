//stateless functional component
//cant use life cycle hooks

const NavBar = (props) => {
  return (
    <nav className="navbar sticky-top p-0 justify-content-around">
      <div className="container-fluid" style={{ backgroundColor: "#0d6efd" }}>
        <a className="navbar-brand" style={{ color: "white" }}>
          React Shopping Cart
        </a>
        <div className="m-3">
          <button className="btn btn-warning" onClick={props.onCart}>
            Cart
          </button>
          <span
            className="badge text-bg-danger"
            style={{ position: "absolute", right: 15 }}
          >
            {props.totalCounters}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
