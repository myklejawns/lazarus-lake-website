import styles from "../../styles/modules/BioSection.module.css";
import ContactInfo from "./ContactInfo";
import Press from "./Press";

function BioSection() {
  return (
    <section id="bio" className="section container-fluid btm-margin">
      <div className={styles.grid}>
        <div className={`${styles.title}`}>
          <h1>BIO</h1>
        </div>
        <div className={`align-text-right ${styles.quote}`}>
          <Press />
          <br />
          <h3>Contact</h3>
          <ContactInfo />
        </div>
        <div className={`align-text-left ${styles.bio}`}>
        <h3>Press</h3>
        <p>
        &quot;He has a great voice and ear for country. He came through with something that is very heartfelt. 
        In order to make a song like 'Family Tree' work, I feel like you have to have your full heart in it, and I felt it. 
        Super pleasant, easy on the ears, just very feel-good.&quot;
        <br />
        <span className="bold">- Brad Taste In Music</span>
      </p>
        </div>
      </div>
    </section>
  );
}
export default BioSection;
