import NewRelease from "./NewRelease";
import NewSection from "./NewSection";

function CoverSection() {
  return (
    <section id="cover" className="container-fluid section">
      <div id="new" className="row">
        {/* Dogma */}
        <div className="col-lg-10 mx-auto">
          <div className="ratio ratio-16x9 my-3">
            <iframe
              width="100%"
              src="https://www.youtube.com/embed/j6FUXdzV6pA?si=CrqzmB6BmoPc_mwD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="col-lg-6 my-3">
          <iframe
            src="https://open.spotify.com/embed/track/2mh9CpE5EolN8thZ5GR1nW?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="col-lg-6 my-3">
          <iframe
            src="https://open.spotify.com/embed/track/4Rr0NRe2jaZKDtCLzRgFYT?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
