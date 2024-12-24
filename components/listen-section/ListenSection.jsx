import styles from "../../styles/modules/ListenSection.module.css";
import StreamLinks from "./StreamLinks";

function ListenSection() {
  return (
    <section id="listen" className="section container-fluid btm-margin">
    
      <div className={styles.grid}>
      <h1 className={styles.title}>MUSIC</h1>
        <StreamLinks className={styles.links}/>
        <iframe
          className={styles.spotify}
          src="https://open.spotify.com/embed/artist/6GIxvMMnmO9lEGQSbVs0KJ?utm_source=generator"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </div>
    </section>
  );
}

export default ListenSection;
