import NewRelease from "./NewRelease";
import NewSection from "./NewSection";

function CoverSection() {
  return (
    <section id="cover" className="container-fluid section">
      <NewSection></NewSection>
      <div id="new" className="row">
        {/* Family Tree Spotify Link */}
        <div className="col-lg-6 my-3">
          <iframe
            src="https://open.spotify.com/embed/track/7dgBnMd1mmh4LqTDgzNhA1?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        {/* Cover Video */}
        <div className="col-lg-6 my-3">
        <iframe className="cover-video" src="https://www.youtube.com/embed/RGfFpuUqDu4?si=4ar5HxMABrdnZUw7" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
}

export default CoverSection;
