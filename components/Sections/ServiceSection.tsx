import geodetic from "../../public/images/geodetic.png";
import map from "../../public/images/map.png";
import implementation from "../../public/images/implementation.png";
import loan from "../../public/images/loan.png";
import ServiceBlock from "../ServiceBlock";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const q = gsap.utils.selector(el);

    gsap.set(q(".service-block"), {
      opacity: 0,
    });

    gsap.fromTo(
      q(".service-block"),
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        ease: "power4",
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".services-grid", // make .services-grid the trigger
          start: "10% bottom", // 50% of .services-grid enters the bottom of the viewport
          // Whatever other ScrollTrigger vars you need here
        },
      }
    );
  }, []);

  return (
    <section className="container py-10 px-10 md:px-20  max-w-screen-xl mx-auto">
      <h2 className="w-full font-bold text-4xl py-20">Usługi</h2>
      <div
        ref={el}
        className="services-grid grid place-items-center md:grid-cols-2 gap-40 "
      >
        <ServiceBlock image={geodetic} alt="Pomiary">
          <h3 className="text-center font-bold text-lg py-6">Pomiary</h3>
          <p>Pomiarów sytuacyjno-wysokościowych i opracowania ich wyników.</p>
        </ServiceBlock>
        <ServiceBlock image={map} alt="Mapowanie">
          <h3 className="text-center font-bold text-lg py-6">Mapowanie</h3>
          <p>
            Rozgraniczeń, podziałów oraz sporządzania dokumentacji i map do
            celów prawnych.
          </p>
        </ServiceBlock>
        <ServiceBlock image={implementation} alt="Realizacja">
          <h3 className="text-center font-bold text-lg py-6">Mapowanie</h3>
          <p>Geodezyjnych pomiarów realizacyjnych i inwentaryzacyjnych.</p>
        </ServiceBlock>
        <ServiceBlock image={loan} alt="Inwestycje">
          <h3 className="text-center font-bold text-lg py-6">Mapowanie</h3>
          <p>Geodezyjnej obsługi inwestycji.</p>
        </ServiceBlock>
      </div>
    </section>
  );
};

export default ServiceSection;
