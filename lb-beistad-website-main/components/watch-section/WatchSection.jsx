import styles from "../../styles/modules/WatchSection.module.css";
import Video from "./Video";

function WatchSection() {
  return (
    <section id="watch" className="section container-fluid btm-margin">
      <h1>WATCH</h1>
      <div className={styles.grid}>
        {/* Dogma Music Video */}
        <Video link="https://www.youtube.com/embed/j6FUXdzV6pA?si=4jI-27XOVxSpjliW" />
        {/* Tiny Desk Contest */}
        <Video link="https://www.youtube.com/embed/HyQUUSeAdN0?si=4qw-E5k7qLf86HK5" />
        {/* If I Was / honey's gone Live */}
        <Video link="https://www.youtube.com/embed/_KqAoP40A_8?si=pfhf8p-mJADMWRyy" />
        {/* Why Don't We Go West Music Video */}
        <Video link="https://www.youtube.com/embed/v75yqaRRiag?si=ZqPiZTlVuSHBj8jB" />
        {/* Why Don't We Go West live */}
        <Video link="https://www.youtube.com/embed/glDsBUSOzc8?si=v3s6ywTJkIkcL2nE" />
        {/* Honey's Gone Bad Music Video */}
        <Video link="https://www.youtube.com/embed/PXtY6Ldw2_Q" />
        {/* Why Don't We Go West Ending Laurel Cove */}
        <Video link="https://www.youtube.com/embed/J4bXQKbZydA" />
        {/* If I Was A Cowboy DrkMttr */}
        <Video link="https://www.youtube.com/embed/zCGw2UZiphI" />
        {/* Haunt You Music Video */}
        <Video link="https://www.youtube.com/embed/BGD1voxLT-Q" />
        {/* Pretty Good Live at Cafe CoCo */}
        <Video link="https://www.youtube.com/embed/eYJKeXcFSMs" />
        {/* Orange Coffee Rendevous */}
        <Video link="https://www.youtube.com/embed/2qbWCQ79754" />
        {/* Haunt You Tiny Desk Contest */}
        <Video link="https://www.youtube.com/embed/BsaEz6RWFyc" />
        {/* Metal Heart Live */}
        <Video link="https://www.youtube.com/embed/rSVXElUQHZY" />
        {/* Peace, Love, and Happines */}
        <Video link="https://www.youtube.com/embed/JkPSN9y4zI0" />
        {/* Why Don't We Go West Live at Cafe CoCo */}
        <Video link="https://www.youtube.com/embed/OoYpakLAB-I" />
      </div>
    </section>
  );
}

export default WatchSection;
