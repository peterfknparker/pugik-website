import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  url: string;
  color?: "primary" | "secondary";
  style?: "rounded" | "square";
  size?: "small" | "medium" | "large";
};

const Button = ({
  children,
  url,
  color = "primary",
  style = "square",
  size = "medium",
}: Props) => {
  let sizeClass = null,
    styleClass = null,
    colorClass = null;

  switch (size) {
    case "small":
      sizeClass = "text-xs md:text-sm";
      break;
    case "medium":
      sizeClass = "text-sm md:text-base py-2 px-5";
      break;
    case "large":
      sizeClass = "text-base md:text-lg py-3 px-7";
      break;
    default:
      break;
  }

  switch (style) {
    case "rounded":
      styleClass = "rounded-full";
      break;
    case "square":
      styleClass = "rounded-md";
      break;
    default:
      break;
  }

  switch (color) {
    case "primary":
      colorClass = "bg-gradient-to-br from-[#2882C2] to-[#28A7C2] text-white";
      break;
    case "secondary":
      colorClass = "bg-gradient-to-br from-[#C228B3] to-[#C22869] text-white";
  }

  const animation =
    "transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110";

  return (
    <Link href={url}>
      <a
        className={`self-start my-4 font-normal inline-block ${sizeClass} ${styleClass} ${colorClass} ${animation}`}
      >
        {children}
      </a>
    </Link>
  );
};
export default Button;
