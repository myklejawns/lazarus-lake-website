import Link from "next/link";

function ContactInfo() {
  return (
    <div>
      {/* <h4>Management | Press | Booking</h4> */}
      <h5>Michael Jones</h5>
      <Link href="mailto:myklejawnsmusic@gmail.com">myklejawnsmusic [at] gmail [dot] com</Link>
      <br/>
      <br />
    </div>
  );
}

export default ContactInfo;
