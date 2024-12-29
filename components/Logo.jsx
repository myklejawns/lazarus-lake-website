import styles from "../styles/modules/Logo.module.css";
// import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logocontainer}>
      <Link href="/">
        <picture>
          <source srcSet="/images/photo-9-no-bg.webp" />
          <img
            className={styles.img}
            src="/images/photo-9-no-bg.png"
            alt="Lazarus Lake's logo"
            
          />
        </picture>
      </Link>
    </div>
  );
}

export default Logo;
