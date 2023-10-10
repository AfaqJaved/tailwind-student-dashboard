import StudentMain from "../assets/college-student.png";
import Scholar from "../assets/scholar.svg";
import Bag from "../assets/bag.svg";
import Coins from "../assets/coins.svg";
import Money from "../assets/money.svg";
import Bars from "../assets/bars.svg";
import Charts from "../assets/charts.svg";
import Avatar1 from "../assets/avatar-6.png";
import Avatar2 from "../assets/avatar-7.png";
import Avatar3 from "../assets/avatar-8.png";
export default function MainContent() {
  return (
    <div>
      <div style={{ background: "linear-gradient(99deg, #925FE2 53.12%,  #DFCFF7 155.43% )" }} className="w-full sm:h-[400px] h-[256px] rounded-3xl flex sm:flex-col relative mb-6 ">
        <div className=" w-1/2 sm:w-full sm:h-[200px] p-12 ">
          <div className=" h-full relative  ml-auto mr-auto">
            <p className="text-white font-poppins font-thin text-sm">January 4,2023</p>
            <h1
              className="text-white font-poppins absolute bottom-[10%] md:bottom-[25%] font-semibold text-[32px]
            lg:text-[28px] md:text-[20px]"
            >
              Welcome back,John!
            </h1>
            <p className="text-white absolute bottom-0 font-poppins font-thin text-sm lg:text-[10px] ">Always stay updated in your student portal</p>
          </div>
        </div>
        <div>
          <img src={Scholar} alt="" className="absolute bottom-0 right-[14%] md:right-0" />
          <img src={StudentMain} alt="" className="absolute bottom-0 right-[5%] md:right-0" />
          <img src={Bag} className="absolute right-0 bottom-0" alt="" />
        </div>
      </div>

      {/* Finance */}

      <div className="flex w-full gap-5  md:flex md:flex-col ">
        <div className="mb-4 w-[75%] lg:w-[65%]  md:w-full gap-4 flex flex-col flex-wrap">
          <div className="w-full">
            <h1 className="text-black font-poppins font-normal text-xl mb-2 ">Finance</h1>
            <div className="flex sm:flex-col gap-4 justify-between w-full">
              <div className="bg-white shadow-md sm:w-full w-1/3 p-4  rounded-3xl flex justify-center items-center flex-col ">
                <img className="w-32 h-32" src={Coins} alt="" />
                <p className="text-center font-poppins font-semibold text-xl">$10,000</p>
                <p className="text-center font-poppins font-normal text-black opacity-50 text-sm">Total Payable</p>
              </div>
              <div className="bg-white sm:w-full border-4 border-[#925FE2] border-solid p-4 shadow-lg w-1/3  rounded-3xl flex flex-col justify-center items-center ">
                <img className="w-32 h-32" src={Money} alt="" />
                <p className="text-center font-poppins font-semibold text-xl">$5,000</p>
                <p className="text-center font-poppins font-normal text-black opacity-50 text-sm">Total Paid</p>
              </div>
              <div className="bg-white sm:w-full p-4 shadow-lg w-1/3  rounded-3xl flex justify-center items-center flex-col ">
                <img className="w-32 h-32" src={Bars} alt="" />
                <p className="text-center font-poppins font-semibold text-xl">$300</p>
                <p className="text-center font-poppins font-normal text-black opacity-50 text-sm">Others</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-4 ">
            <div className="mt-2">
              <div className="flex justify-between">
                <h1 className="text-black font-poppins font-normal text-xl mb-2">Enrolled Courses</h1>
                <h1 className=" font-poppins font-normal text-xl mb-2 text-[#925FE2]">See All</h1>
              </div>
              <div className="flex gap-5 sm:flex-col justify-between w-full ">
                <div className="bg-[#e1d4f7] border-4 border-[#925FE2] border-solid shadow-md w-1/2 p-4  rounded-3xl flex justify-center items-center sm:w-full">
                  <div className="w-1/2">
                    <p className="text-[#925FE2] font-poppins font-semibold ">Fundamentals of database Systems</p>
                    <button className="text-lg mt-4 font-poppins font-semibold text-white pl-6 pr-6 pt-2 pb-2 bg-[#925FE2] rounded-full mr-auto">View</button>
                  </div>
                  <div className="w-1/2">
                    <img src={Charts} alt="" />
                  </div>
                </div>
                <div className="bg-[#e1d4f7] border-4 sm:w-full border-[#925FE2] border-solid shadow-md w-1/2 p-4  rounded-3xl flex justify-center items-center">
                  <div className="w-1/2">
                    <p className="text-[#925FE2] font-poppins font-semibold ">Object Oriented Programming</p>
                    <button className="text-lg mt-4 font-poppins font-semibold text-white pl-6 pr-6 pt-2 pb-2 bg-[#925FE2] rounded-full mr-auto">View</button>
                  </div>
                  <div className="w-1/2">
                    <img src={Charts} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[25%] lg:w-[35%] sm:w-full md:w-full">
          <div className="w-full">
            <h1 className="text-black font-poppins font-normal text-xl mb-2 ">Course Instructors</h1>
            <div className="flex justify-around gap-1 ">
              <img className="rounded-full w-20 h-20 border-4 border-[#925FE2]" src={Avatar1} />
              <img className="rounded-full w-20 h-20 border-4 border-[#925FE2]" src={Avatar2} alt="" /> <img className="rounded-full w-20 h-20 border-4 border-[#925FE2]" src={Avatar3} alt="" />
            </div>

            <div className="flex justify-between mt-12 ">
              <h1 className="text-black font-poppins font-normal text-xl mb-2 ">Daily Notice</h1>
              <h1 className="text-[#925FE2] font-poppins font-normal text-xl mb-2 ">See all</h1>
            </div>
            <div className="">
              <div className="bg-white shadow-md p-4 rounded-3xl ">
                <div>
                  <h1 className="text-black font-poppins font-normal text-sm">Prelim payment due</h1>
                  <p className="text-black opacity-50 font-poppins font-normal text-sm">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <h1 className="text-[#925FE2] font-poppins font-normal text-sm">See more</h1>
                </div>
                <div className="mt-12 ">
                  <h1 className="text-black font-poppins font-normal text-sm">Prelim payment due</h1>
                  <p className="text-black opacity-50 font-poppins font-normal text-sm">Sorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <h1 className="text-[#925FE2] font-poppins font-normal text-sm">See more</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Courses */}
    </div>
  );
}
