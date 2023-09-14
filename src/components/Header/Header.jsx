import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-slate-50 mb-4">
      <h3 className=" text-2xl font-bold">Knowledge Cafe </h3>
      <img src={profile} className="w-[60px] rounded-full" />
    </div>
  );
};

export default Header;
