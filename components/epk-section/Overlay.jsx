import CoverSection from "../cover-section/CoverSection";
import BioSection from "../bio-section/BioSection";
import ListenSection from "../listen-section/ListenSection";
import WatchSection from "../watch-section/WatchSection";
import ShowsSection from "../shows-section/ShowsSection";
import ContactSection from "../contact-section/ContactSection";

import styles from "../../styles/epk-styles.module.css";

function Overlay() {
  return (
    <div className={styles.overlay}>
      <h2 className={styles.title}>LB BEISTAD</h2>

      <div className={styles.container}>
        {/* music */}
        <iframe
          className={styles.spotify}
          src="https://open.spotify.com/embed/artist/6GIxvMMnmO9lEGQSbVs0KJ?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* quotes */}
        <div className={styles.quotes}>
          <h3>Press</h3>
          <p>
            &quot;all the grit of Stevie Nicks, combined with the soft and
            gentle delivery of Hope Sandoval...&quot;
            <br />
            <span className="bold">- Up To Hear</span>
          </p>
          <p>
            &quot;Dreamy indie pop with swagger and a punchy beat&quot;
            <br />
            <span className="bold">- The Wild Is Calling</span>
          </p>
          <p>
            &quot;It&apos;s a timeless anthem for the wanderers, the dreamers,
            and anyone else who refuses to settle for the status quo.&quot;
            <br />
            <span className="bold">- Neon Music</span>
          </p>
        </div>

        {/* bio */}
        <div className={styles.bio}>
          <h3>Bio</h3>
          <p>
            LB Beistad is an independent artist who defies categorization with
            her infectious melodies, thought-provoking lyrics, and dynamic stage
            presence. With the release of their latest single, "Dogma," LB
            continues to push creative boundaries and explore new sonic
            territories. She has opened for acts such as Olivia Jean, Larkin
            Poe, and Nordista Freeze.
            <br />
            <br />
            Inspired by a diverse range of artists spanning various genres, LB
            embarked on a musical journey that led to the crafting of a sound as
            eclectic as it is engaging. Their musical style incorporates
            elements of folk, grunge, and pop; resulting in a sonic landscape
            that is uniquely their own. Collaboration with producer Jared Corder
            (of *repeat repeat) has brought a new layer to her songs.
            <br />
            <br />
            With deeply personal and introspective songwriting, LB delves into
            themes of love, loss, self-discovery, and social issues. Whether
            performing solo or with a full band, LB's stage presence is
            magnetic, commanding the attention of the audience from the first
            note. Their music has garnered positive reviews from critics and has
            been featured on various blogs, radio stations, and playlists.
          </p>
        </div>

        {/* videos */}
        <div className={styles.videos}>
          {/* Dogma Music Video */}
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/j6FUXdzV6pA?si=4jI-27XOVxSpjliW"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* If I was / Honey's Gone Bad Live Video */}
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/_KqAoP40A_8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* Why Don't We Go West Music Video */}
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/v75yqaRRiag?si=ZqPiZTlVuSHBj8jB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          {/* Haunt you Music Video */}
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/BGD1voxLT-Q"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* photos */}
        <div className={styles.photos}>
          <a
            className={styles.link}
            href="https://drive.google.com/drive/folders/1XcDN7RVrj--9g49ba8sL2PJ7N2SxjuFE?usp=drive_link"
            target="_blank"
          >
            <h3>Photos</h3>
            <picture>
              <source srcSet="/images/PolychromeNSN-3.webp" />
              <img className={styles.photo} src="/images/PolychromeNSN-3.jpg" />
            </picture>
            <picture>
              <img className={styles.photo} src="/images/studio1.jpg" />
            </picture>
            <picture>
              <source srcSet="/images/PolychromeNSN-5.webp" />
              <img className={styles.photo} src="/images/PolychromeNSN-5.jpg" />
            </picture>
            <picture>
              <img className={styles.photo} src="/images/studio2.jpg" />
            </picture>
            <picture>
              <source srcSet="/images/PolychromeNSN-12.webp" />
              <img
                className={styles.photo}
                src="/images/PolychromeNSN-12.jpg"
              />
            </picture>
            <picture>
              <img
                className={styles.photo}
                src="/images/LB_Beistad_3-25-23-5.jpg"
              />
            </picture>
            <picture>
              <source srcSet="/images/PolychromeNSN-13.webp" />
              <img
                className={styles.photo}
                src="/images/PolychromeNSN-13.jpg"
              />
            </picture>
          </a>
        </div>

        {/* contact */}
        <div className={styles.contact}>
          <h3>Contact</h3>
          <h4>Management | Press | Booking</h4>
          <p>Derek Andrew</p>
          <p>derekbeistad [at] gmail [dot] com</p>
          <h4>Licensing</h4>
          <h5>Music Alternatives</h5>
          <p>licensing@musicalternatives.com</p>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
