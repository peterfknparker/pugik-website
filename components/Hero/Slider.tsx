import { gsap } from "gsap";
import { useState, useRef, useEffect } from "react";
import Button from "../utilities/button";
import Text from "./Text";

const Slider = () => {
  const textSlide = [
    ["Wysoka jakość,", "rzetelność i", "krótkie", "terminy."],
    ["Jesteśmy jedną z", "najstarszych firm", "geodezyjnych ", "w Polsce."],
  ];

  const [slideNum, setSlideNum] = useState<number>(0);

  const el = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function nextSlide() {
      if (slideNum < textSlide.length - 1) {
        setSlideNum((prev) => prev + 1);
      } else setSlideNum(0);
    }

    const q = gsap.utils.selector(el);
    var tl = gsap.timeline();

    // Target ALL descendants with the class of .text-container-inner
    tl.set(q(".text-container-inner"), {
      opacity: 1,
    });
    tl.from(q(".text-container-inner"), {
      duration: 2.5,
      yPercent: 100,
      ease: "power4",
      stagger: 0.2,
    });
    tl.to(
      q(".text-container-inner"),
      {
        duration: 2.5,
        yPercent: 100,
        easeIn: "power4",
        // opacity: 0,
        stagger: 0.2,
      },
      "+=4"
    );
    tl.add(() => nextSlide());
  }, [slideNum, textSlide.length]);

  return (
    <div className="flex flex-col">
      <div ref={el}>
        {textSlide.map((slide, key) => {
          if (slideNum == key)
            return slide.map((line, i) => {
              return <Text key={i}>{line}</Text>;
            });
        })}
      </div>

      <Button size="large" url="http://google.com">
        Wycena bez zobowiązań
      </Button>
    </div>
  );
};

export default Slider;
