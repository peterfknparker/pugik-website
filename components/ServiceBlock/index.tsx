import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
type Props = {
  children: ReactNode;
  image: StaticImageData;
  alt: string;
};
const ServiceBlock = ({ children, image, alt }: Props) => {
  return (
    <div className="flex-col max-w-xs service-block opacity-1">
      <div className="w-[118px] h-[118px] relative mx-auto">
        <Image src={image} layout="fill" alt={alt} />
      </div>
      <div className="">{children}</div>
      <div>
        <Link href="#">
          <a className="inline-block text-[#0083CD] border-b-2 border-[#0083CD] border-dotted">
            <span className="flex items-center">
              Wycena bez zobowiązań <BsArrowRightShort size="20px" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ServiceBlock;
