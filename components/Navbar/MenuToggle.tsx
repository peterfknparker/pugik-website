import { useState, useRef } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const checkbox = useRef<HTMLInputElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (checkbox.current != null) {
      checkbox.current.blur();
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      toggleMenu();
    }
  };
  return (
    <div className="h-full flex items-center">
      <label className="cursor-pointer" htmlFor="menu-toggle">
        <input
          type="checkbox"
          id="menu-toggle"
          aria-label="Open main menu"
          aria-checked={isOpen}
          role="switch"
          checked={isOpen}
          className="sr-only peer"
          readOnly
          onClick={toggleMenu}
          onKeyPress={handleKeyPress}
          ref={checkbox}
        />
        <div className="border-black dark:border-white border-opacity-0 dark:border-opacity-0 border-2 p-1 rounded-full peer-focus:border-opacity-100">
          {isOpen ? <RiCloseLine size="30px" /> : <RiMenuLine size="30px" />}
        </div>
      </label>
    </div>
  );
};
export default MenuToggle;
