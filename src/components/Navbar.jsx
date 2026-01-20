function Navbar({ setPage }) {
  return (
    <nav>
      <button onClick={() => setPage("home")}>
        <i className="fa-solid fa-house"></i> Home
      </button>

      <button onClick={() => setPage("about")}>
        <i className="fa-solid fa-circle-info"></i> About
      </button>

      <button onClick={() => setPage("contact")}>
        <i className="fa-solid fa-envelope"></i> Contact
      </button>
    </nav>
  );
}

export default Navbar;
