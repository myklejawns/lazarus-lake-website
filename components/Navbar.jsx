import styles from "../styles/modules/NavBar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <section>
      <div className={styles.navgrid}>
        <Link className={`${styles.navdiv} ${styles.navdivborder}`} href="/">
          <h5 className={styles.navgriditem}>LB BEISTAD</h5>
        </Link>
        <Link className={`${styles.navdiv} ${styles.navdivborder}`} href="#bio">
          <h6 className={styles.navgriditem}>BIO</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="#listen">
          <h6 className={styles.navgriditem}>LISTEN</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="#watch">
          <h6 className={styles.navgriditem}>WATCH</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="#shows">
          <h6 className={styles.navgriditem}>SHOWS</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="#contact">
          <h6 className={styles.navgriditem}>CONTACT</h6>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
