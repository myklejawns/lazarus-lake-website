import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunesNote,
  faBandcamp,
  faInstagram,
  faYoutube,
  faTiktok,
  faTwitch,
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
            href="https://open.spotify.com/artist/6GIxvMMnmO9lEGQSbVs0KJ?si=afVvt1eaQ6yWFQvHCDHWVQ"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} />
          </a>
        </li>
        {/* APPLE MUSIC */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://music.apple.com/us/artist/lb-beistad/1559771908"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faItunesNote} />
          </Link>
        </li>
        {/* BANDCAMP */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://lbbeistad.bandcamp.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faBandcamp} />
          </Link>
        </li>
        {/* INSTAGRAM */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.instagram.com/lbbeistad/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </li>
        {/* YOUTUBE */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://music.youtube.com/channel/UCvGX15gBN8QfX6nsshx6nAQ"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
        {/* TIKTOK */}
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://vm.tiktok.com/ZM8fyWxAR/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
        </li>
        {/* TWITCH
        <li className={styles.itemspacing}>
          <Link
            className={styles.socialbaricon}
            href="https://www.twitch.tv/lbbeistad"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </Link>
        </li> */}
      </ul>
    </section>
  );
}

export default SocialBar;
