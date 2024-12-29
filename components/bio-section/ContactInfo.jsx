import Link from "next/link";

function ContactInfo() {
  return (
    <div>
      {/* <h4>Management | Press | Booking</h4> */}
      <h5>Michael Jones</h5>
      <Link href="myklejawnsmusic@gmail.com">myklejawnsmusic [at] gmail [dot] com</Link>
      <br/>
      <br />
      {/* <h4>Licensing</h4>
      <h5>Music Alternatives</h5> */}
      {/* <Link href="mailto:licensing@musicalternatives.com">licensing@musicalternatives.com</Link> */}

    </div>
  );
}

export default ContactInfo;
