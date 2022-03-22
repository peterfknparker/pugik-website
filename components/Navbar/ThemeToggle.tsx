import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { RiMoonClearLine, RiLightbulbLine } from "react-icons/ri";
const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const checkbox = useRef<HTMLInputElement>(null);
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    if (checkbox.current != null) {
      checkbox.current.blur();
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      toggleTheme();
    }
  };
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="h-full flex items-center">
      <label className="cursor-pointer" htmlFor="dark-mode-toggle">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          aria-label="Toggle dark mode theme"
          aria-checked={resolvedTheme === "dark" ? true : false}
          role="switch"
          checked={resolvedTheme === "dark" ? true : false}
          className="sr-only peer"
          onKeyPress={handleKeyPress}
          readOnly
          onClick={toggleTheme}
          ref={checkbox}
        />
        <div className="border-black dark:border-white border-opacity-0 dark:border-opacity-0 border-2 p-1 rounded-full peer-focus:border-opacity-100">
          {resolvedTheme === "dark" ? <RiLightbulbLine /> : <RiMoonClearLine />}
        </div>
      </label>
    </div>
  );
};
export default ThemeToggle;
