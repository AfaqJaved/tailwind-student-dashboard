import User from "../assets/user.svg";
import Notification from "../assets/notifcations.svg";
import Bars from "../assets/bars.png";

interface Props {
  setShowSideBar: (flag: boolean) => void;
  show: boolean;
}
export default function Header(props: Props) {
  return (
    <div className="w-full h-16   flex pt-3 pb-3 mb-6 ">
      <div className="flex w-full items-center">
        <img
          onClick={() => {
            props.setShowSideBar(!props.show);
          }}
          className="z-50 w-7 h-7 hidden md:block cursor-pointer bg-white"
          src={Bars}
        ></img>
        <input type="text" className="md:ml-4 border-2 border-[#925FE2] rounded-full w-1/3 font-poppins font-normal text-right shadow-md text-lg pr-5" placeholder="Search" />
      </div>
      <div className="flex ml-auto">
        <img className="w-7 h-7" src={User}></img>
        <img className="w-7 h-7 " src={Notification} />
      </div>
    </div>
  );
}
