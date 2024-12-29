import styles from "../../styles/modules/WatchSection.module.css";
import Video from "./Video";
import Videos from "../../files/videos.json";

function WatchSection() {
  return (
    <section id="watch" className="section container-fluid btm-margin">
      <h1>WATCH</h1>
      <div className={styles.grid}>
      {Videos['embed-code-main'].map((item, index) =>(
        <Video idx={index} link={"https://www.youtube.com/embed/" + item} />
      ))}
      </div>
    </section>
  );
}

export default WatchSection;
