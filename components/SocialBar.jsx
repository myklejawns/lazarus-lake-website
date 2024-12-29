import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunesNote,
  faBandcamp,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/modules/SocialBar.module.css";

function SocialBar() {
  return (
    <section>
      <ul className={styles.socialicons}>
        <li className={styles.itemspacing}>
          {/* SPOTIFY */}
          <a
            className={styles.socialbaricon}
            href="https://open.spotify.com/artist/67IyI8M5pUu1XJSS2XbMd0?si=SxVU5tT1QZiYpcK7iQbATQ"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </li>
        {/* APPLE MUSIC */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://music.apple.com/us/artist/lazarus-lake/1664765958"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faItunesNote} />
          </Link>
        </li>
        {/* BANDCAMP */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://lazaruslake.bandcamp.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faBandcamp} />
          </Link>
        </li>
        {/* INSTAGRAM */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.instagram.com/myklejawns/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
        {/* YOUTUBE */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.youtube.com/channel/UCvcALWirgGs5hiS66W59b8Q/?sub_confirmation=1"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
        {/* TIKTOK */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.tiktok.com/@lazaruslake"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
        </li>
        {/* FACEBOOK */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.facebook.com/lazaruslakemusic"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default SocialBar;
