import styles from "../../styles/modules/ListenSection.module.css";
import StreamLinks from "./StreamLinks";

function ListenSection() {
  return (
    <section id="listen" className="section container-fluid btm-margin">
    
    <div className={styles.grid}>
      <h1 className={styles.title}>MUSIC</h1>
      <iframe
          className={styles.spotify}
          src="https://open.spotify.com/embed/artist/67IyI8M5pUu1XJSS2XbMd0?utm_source=generator&theme=0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      {/* <StreamLinks className={styles.links}/> */}
      </div>
    </section>
  );
}

export default ListenSection;
