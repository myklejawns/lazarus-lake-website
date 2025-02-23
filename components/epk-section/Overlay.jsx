import styles from "../../styles/epk-styles.module.css";
import Link from "next/link";
import Images from "../../files/images.json";
import Videos from "../../files/videos.json";
import Bio from "../../files/bio.json";
import PressQuotes from "../../files/press.json";
import SpotifyFeature from "../../files/spotify-feature.json";

function Overlay() {

  return (
    <div className={styles.overlay}>
      <h2 className={styles.title}>Lazarus Lake</h2>

      <div className={styles.container}>
        {/* Bio */}
        <div className={styles.quotes}>
          <h3>Bio</h3>

          {Bio['bio'].map((item, index) =>(
            <p>{item}<br /></p>
          ))}

          <h3>Press</h3>

          {PressQuotes['press'].map((item, index) =>(
          <p>
            &quot;{item['quote']}&quot;
            <br />
            <span className="bold">- {item['source']}</span>
          </p>
          ))}
        </div>

        {/* spotify */}
        <iframe
          className={styles.spotify}
          src={"https://open.spotify.com/embed/track/" + SpotifyFeature['embed-code'] + "?utm_source=generator&theme=0"}
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* videos */}
        <div className={styles.videos}>
          {/* Nashville Looks Live Video */}

          {Videos['embed-code-epk'].map((item, index) =>(
            <iframe
            key={index}
            className={styles.video}
            src={"https://www.youtube.com/embed/" + item}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ></iframe>
          ))}

          {/* <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/RGfFpuUqDu4?si=4ar5HxMABrdnZUw7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe> */}
        </div>

        {/* photos */}
        <div className={styles.photos}>
          
            <h3>Photos</h3>

            {Images['file-names'].map((item, index) =>(
              <picture>
              <img className={styles.photo} key={index} src={"/images/" + item} />
            </picture>
            ))}

        </div>

        {/* contact */}
        <div className={styles.contact}>
          <h3>Contact</h3>
          {/* <h4>Management | Press | Booking</h4> */}
          <p>Michael Jones</p>
          <Link href="myklejawnsmusic@gmail.com">myklejawnsmusic [at] gmail [dot] com</Link>
        </div>
      </div>
    </div>
  );
}

export default Overlay;
