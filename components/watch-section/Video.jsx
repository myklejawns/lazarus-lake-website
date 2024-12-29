import styles from "../../styles/modules/WatchSection.module.css";

function Video(params) {
    return (
        <div key={params.idx} className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src={params.link}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen></iframe>
        </div>
    )
}

export default Video;