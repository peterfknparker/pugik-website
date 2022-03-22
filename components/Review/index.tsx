import Profile from "./Profile";
import ReviewText from "./ReviewText";

const Reviews = () => {
  return (
    <div className="md:flex gap-20">
      <div className="w-[300px] mx-auto pb-10">
        <Profile />
      </div>
      <div className="w-full shrink">
        <ReviewText />
      </div>
    </div>
  );
};

export default Reviews;
