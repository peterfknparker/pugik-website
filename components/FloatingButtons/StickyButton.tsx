import { BiPhoneCall } from "react-icons/bi";
import { BiMailSend } from "react-icons/bi";
import { IconContext } from "react-icons";
type Props = {
  type: "phone" | "email";
  value: string;
};

const StickyButton = ({ type, value }: Props) => {
  let color = null;
  let icon = null;
  let alt = null;
  if (type == "phone") {
    value = "tel:" + value;
    color = "bg-[#7ED368] hover:bg-[#5FB949]";
    icon = <BiPhoneCall />;
    alt = "Zadzwoń do nas";
  }
  if (type == "email") {
    value = "mailto:" + value;
    color = "bg-[#68ADD3] hover:bg-[#3189BB]";
    icon = <BiMailSend />;
    alt = "Wyślij do nas e-mail";
  }

  return (
    <a href={value} className={`${color} inline-block p-3 text-3xl text-white`}>
      {icon}
      <span className="sr-only">{alt} </span>
    </a>
  );
};

export default StickyButton;
