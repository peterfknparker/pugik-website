import StickyButton from "./StickyButton";

const FloatingButtons = () => {
  return (
    <div className="fixed z-10 right-0 top-[25vh] flex flex-col">
      <StickyButton type="phone" value="+441234567" />
      <StickyButton type="email" value="jdegnen@gmail.com" />
    </div>
  );
};

export default FloatingButtons;
