import CoverSection from "../cover-section/CoverSection"
import BioSection from "../bio-section/BioSection";
import ListenSection from "../listen-section/ListenSection";
import WatchSection from "../watch-section/WatchSection";
import ShowsSection from "../shows-section/ShowsSection";
import ContactSection from "../contact-section/ContactSection";

function Overlay() {
    return (
        <div className="overlay">
            <CoverSection />
            <BioSection />
            <ListenSection />
            <WatchSection />
            <ShowsSection />
            <ContactSection />
        </div>
    );
}

export default Overlay;