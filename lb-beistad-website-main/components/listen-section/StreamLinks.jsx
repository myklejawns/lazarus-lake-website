import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpotify,
  faItunesNote,
  faBandcamp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../../styles/modules/StreamLinks.module.css";

function StreamLinks() {
  return (
    <section className={styles.iconsection}>
      <ul className={styles.socialicons}>
        <li>
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
        <li>
          <Link
            className={styles.socialbaricon}
            href="https://music.apple.com/us/artist/lb-beistad/1559771908"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faItunesNote} />
          </Link>
        </li>
        {/* BANDCAMP */}
        <li>
          <Link
            className={styles.socialbaricon}
            href="https://lbbeistad.bandcamp.com/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faBandcamp} />
          </Link>
        </li>
        {/* YOUTUBE */}
        <li>
          <Link
            className={styles.socialbaricon}
            href="https://music.youtube.com/channel/UCvGX15gBN8QfX6nsshx6nAQ"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default StreamLinks;
