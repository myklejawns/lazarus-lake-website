import styles from "../../styles/modules/BioSection.module.css";
import ContactInfo from "./ContactInfo";
import Press from "./Press";
import Bio from "../../files/bio.json";

function BioSection() {
  return (
    <section id="bio" className="section container-fluid btm-margin">
      <div className={styles.grid}>
        <div className={`${styles.title}`}>
          <h1>BIO</h1>
        </div>
        <div className={`align-text-right ${styles.quote}`}>
          <h3>Press</h3>
          <Press />
          <br />
          <h3>Contact</h3>
          <ContactInfo />
        </div>
        <div className={`align-text-left ${styles.bio}`}>
        {Bio['home-page-bio'].map((item, index) =>(
            <p>{item}<br /></p>
          ))}
        </div>
      </div>
    </section>
  );
}
export default BioSection;
