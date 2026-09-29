import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {year} QFlow. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

