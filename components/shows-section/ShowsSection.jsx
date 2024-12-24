import styles from "../../styles/modules/ShowsSection.module.css";

function ShowsSection() {
  return (
    <section id="shows" className="btm-margin container-fluid">
      <div className={styles.container}>
        <h1>SHOWS</h1>
        <a
          href="https://www.songkick.com/artists/10264089"
          className="songkick-widget"
          data-theme="light"
          data-track-button="on"
          data-detect-style="true"
          data-font-color="#181818"
          data-background-color="#c39c68"
          data-locale="en">
          LB Beistad tour dates
        </a>
      </div>
    </section>
  );
}

export default ShowsSection;
