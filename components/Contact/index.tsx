import Image from "next/image";
import mapLight from "../../public/images/map-light.jpg";
import mapDark from "../../public/images/map-light.jpg";

const Contact = () => {
  return (
    <div className="w-full  md:grid grid-cols-2 dark:bg-[#00456B]">
      <div className="w-full relative min-h-[400px]">
        <Image src={mapLight} alt="Map" layout="fill" objectFit="cover" />
      </div>
      <div
        itemScope
        itemType="http://schema.org/LocalBusiness"
        className="flex flex-col px-10 md:px-44 py-20"
      >
        <h2 className="w-full font-bold text-4xl pb-6">Kontakt</h2>
        <div className="py-4">
          <span className="uppercase text-[#0083CD] border-b border-[#0083CD] dark:text-[#00CD90] dark:border-[#00CD90] border-dotted">
            Znajdź nas
          </span>
        </div>
        <address className="text-2xl not-italic">
          <span itemProp="address">
            Rechnieskiego 12 Lok.
            <br />
            100 03-980 Warszawa
          </span>
        </address>
        <div className="pt-10 pb-4">
          <span className="uppercase text-[#0083CD] border-b border-[#0083CD] dark:text-[#00CD90] dark:border-[#00CD90] border-dotted">
            Zadzwoń do nas
          </span>
        </div>
        <span itemProp="telephone" className="text-2xl">
          <a href="tel:+48226718210">(22) 671-82-10</a>
        </span>
        <div className="pt-10 pb-4">
          <span className="uppercase text-[#0083CD] border-b border-[#0083CD] dark:text-[#00CD90] dark:border-[#00CD90] border-dotted">
            Wyślij do nas e-mail
          </span>
        </div>
        <span itemProp="email" className="text-2xl">
          <a href="mailto:pugik@interia.pl">pugik@interia.pl</a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
