import styles from "@/app/styles";
import Link from "next/link";

const IntroSection = () => {
  return (
    <div className={`${styles.boxWidth} pt-20`}>
      <p className={`${styles.paragraph} max-w-6xl`}>
        The Federal Ministry of Art, Culture, and the Creative Economy's
        flagship initiative, Destination 2030 Nigeria, is set to host a
        groundbreaking global cultural showcase on September 24th, strategically
        aligned with the United Nations General Assembly.
      </p>
      <p className={`${styles.paragraph} max-w-6xl mt-4`}>
        This cultural experience is not just an event but a celebration of
        Nigeria's creative spirit and cultural heritage. It provides a unique
        opportunity to highlight Nigeria's creative talents on a global stage,
        foster international collaborations, and promote the growth of Nigeria’s
        creative economy.
      </p>
      <p className={`${styles.paragraph} max-w-6xl mt-4`}>
        Policymakers, creators, government officials, and key stakeholders are
        scheduled for an evening of cultural conversations, artistic
        performances, and networking opportunities.
      </p>
      <div className="pt-5">
        <Link href="/request-an-invitation">
          <button className="flex-none  rounded-sm bg-white/5 uppercase font-poppins font-bold px-3.5 py-2.5 text-dn-green shadow-sm ring-1 ring-dn-green hover:bg-dn-green hover:text-white transition-colors focus:outline-none">
            Register now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IntroSection;
