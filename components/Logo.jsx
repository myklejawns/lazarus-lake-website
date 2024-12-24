import styles from "../styles/modules/Logo.module.css";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className={styles.logocontainer}>
      <Link href="/">
        {/* <Image
          className={styles.img}
          src="/images/LB_logo.png"
          fill
          alt="name logo"
        /> */}
        <picture>
          <source srcSet="/images/LB_logo.webp" />
          <img
            className={styles.img}
            src="/images/coverimage.jpg"
            alt="LB Beistad's logo"
            
          />
        </picture>
      </Link>
    </div>
  );
}

export default Logo;
