import { FaStar, FaRegStar } from "react-icons/fa";
type Props = {
  rating: 1 | 2 | 3 | 4 | 5;
};
const Rating = ({ rating }: Props) => {
  return (
    <div className="text-[#FFA800] flex text-xl gap-1">
      {[...Array(rating)].map((e, i) => (
        <FaStar key={i} />
      ))}
      {[...Array(5 - rating)].map((e, i) => (
        <FaRegStar key={i} />
      ))}
    </div>
  );
};

export default Rating;
