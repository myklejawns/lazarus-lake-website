import styles from '../../styles/modules/NewRelease.module.css'

function NewRelease() {
  return (
    <div className={styles.playerdiv}>
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/track/12IqYryBCAqqylTm3Ssdlc?si=edca656a8df64e46"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
      <iframe
        className="spotify"
        src="https://open.spotify.com/embed/track/2xHLYABCqnbQZdETL74jEj?utm_source=generator"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"></iframe>
    </div>
  );
}

export default NewRelease;
