function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="container-fluid" id="footer">
      <h3>Lazarus Lake</h3>

      <p className="copyright">© Lazarus Lake {currentYear}</p>

      <p className="attrib">
        Icons provided by
        <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
          FontAwesome
        </a>
      </p>
    </section>
  );
}
export default Footer;
