function Content({ page }) {
  return (
    <div className="container">
      {page === "home" && (
        <>
          <h2><i className="fa-solid fa-house"></i> Home</h2>
          <p>Welcome to React Single Page Application.</p>
        </>
      )}

      {page === "about" && (
        <>
          <h2><i className="fa-solid fa-circle-info"></i> About</h2>
          <p>This project is built using React components.</p>
        </>
      )}

      {page === "contact" && (
        <>
          <h2><i className="fa-solid fa-envelope"></i> Contact</h2>
          <p>Email: example@gmail.com</p>
          <p>Phone: 987XXXX210</p>
        </>
      )}
    </div>
  );
}

export default Content;
