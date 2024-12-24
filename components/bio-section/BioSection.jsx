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
          <p>
            LB Beistad is an independent artist who defies categorization with
            her infectious melodies, thought-provoking lyrics, and dynamic stage
            presence. With the release of their latest single, "Dogma," LB
            continues to push creative boundaries and explore new sonic
            territories. She has opened for acts such as Olivia Jean, Larkin
            Poe, and Nordista Freeze.
            <br />
            <br />
            Inspired by a diverse range of artists spanning various genres, LB
            embarked on a musical journey that led to the crafting of a sound as
            eclectic as it is engaging. Their musical style incorporates
            elements of folk, grunge, and pop; resulting in a sonic landscape
            that is uniquely their own. Collaboration with producer Jared Corder
            (of *repeat repeat) has brought a new layer to her songs.
            <br />
            <br />
            With deeply personal and introspective songwriting, LB delves into
            themes of love, loss, self-discovery, and social issues. Whether
            performing solo or with a full band, LB's stage presence is
            magnetic, commanding the attention of the audience from the first
            note. Their music has garnered positive reviews from critics and has
            been featured on various blogs, radio stations, and playlists.
          </p>
        </div>
      </div>
    </section>
  );
}
export default BioSection;
