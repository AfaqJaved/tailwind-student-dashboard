import Student from "../assets/student.svg";
import { MENUS } from "../constants/Menu";
import LogOut from "../assets/logout.svg";

interface Props {
  show: boolean;
  setShow: (flag: boolean) => void;
}

export default function SideBar(props: Props) {
  return (
    <>
      <div className={`md:${props.show ? "block" : "hidden"} z-50 h-screen w-[20%] md:w-[35%] fixed flex justify-center items-center md:mt-12 ` + (props.show ? "block" : "")}>
        <div style={{ background: "linear-gradient(0deg, #925FE2 80.26%, rgba(146, 95, 226, 0.00) 143.39%, #E2D4F7 143.39%)" }} className="h-[90%] w-[80%] rounded-[24px] relative ">
          <div className="flex justify-center p-12 mb-5 ">
            <img src={Student}></img>
          </div>
          {/* LINKS */}
          <ul className="flex justify-center flex-col items-center ">
            {MENUS.map((menu) => {
              return (
                <li className="cursor-pointer flex w-5/6 ml-2 items-center gap-3 mb-[18px] ">
                  <img src={menu.icon} alt="" />
                  <p className={"font-poppins font-semibold text-lg " + menu.active ? " text-white" : "text-gray-400"}>{menu.title}</p>
                </li>
              );
            })}

            <li className="cursor-pointer flex w-5/6 ml-6 items-center gap-3 mb-[18px] absolute bottom-5 left-0 right-0 ">
              <img src={LogOut} className="text-white" alt="" />
              <p className={"font-poppins text-lg font-semibold text-white"}>Logout</p>
            </li>
          </ul>
          <p className="ml-auto mr-auto bg-indigo-500 text-center font-poppins text-white ">
            Coded in React By<br></br>{" "}
            <b>
              <a href="https://afaqjaved.com">Afaq Javed</a>
            </b>
          </p>
        </div>
      </div>
    </>
  );
}
