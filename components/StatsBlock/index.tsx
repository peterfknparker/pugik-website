import ReactNode from "react";

type Props = {
  statistic: string;
  description: string;
};

const StatsBlock = ({ statistic, description }: Props) => {
  return (
    <div className="md:w-1/3 flex-col flex text-center py-5">
      <span className="w-full font-bold text-4xl py-4 text-[#0087B1] dark:text-white">
        5{statistic}
      </span>
      <span className="text-[#0087B1] dark:text-white">{description}</span>
    </div>
  );
};

export default StatsBlock;
