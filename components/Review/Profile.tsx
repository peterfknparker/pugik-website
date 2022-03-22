import Image from "next/image";
import profileImg from "../../public/images/profilepic.png";

const Profile = () => {
  return (
    <div className="text-center text-[#838383] ">
      <div className="overflow-hidden rounded-full p-5">
        <Image src={profileImg} objectFit="fill" alt="Customer image" />
      </div>
      <p className=" font-bold">Glenda Grant</p>
      <p>Lawgroup Sp. Z.o.o</p>
    </div>
  );
};

export default Profile;
