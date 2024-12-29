import styles from "../styles/modules/NavBar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <section>
      <div className={styles.navgrid}>
        <Link className={`${styles.navdiv} ${styles.navdivborder}`} 
          href="/">
          <h5 className={styles.navgriditem}>Lazarus Lake</h5>
        </Link>
        <Link className={`${styles.navdiv} ${styles.navdivborder}`} 
          href="/#bio">
          <h6 className={styles.navgriditem}>Bio</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="/#listen">
          <h6 className={styles.navgriditem}>Listen</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="/#watch">
          <h6 className={styles.navgriditem}>Watch</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="/#shows">
          <h6 className={styles.navgriditem}>Shows</h6>
        </Link>
        <Link
          className={`${styles.navdiv} ${styles.navdivborder}`}
          href="/#contact">
          <h6 className={styles.navgriditem}>Contact</h6>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
