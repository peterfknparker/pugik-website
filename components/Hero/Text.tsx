import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const Text = ({ children }: Props) => {
  return (
    <span className="text-container-outer inline-block w-full overflow-hidden text-3xl md:text-4xl md:leading-tight leading-tight lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight font-bold">
      <span className="opacity-0 text-container-inner inline-block">
        {children}
      </span>
    </span>
  );
};

export default Text;
