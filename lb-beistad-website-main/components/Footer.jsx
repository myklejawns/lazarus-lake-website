function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="container-fluid" id="footer">
      <h3>LB Beistad</h3>

      <p className="copyright">© LB Beistad {currentYear}</p>

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
