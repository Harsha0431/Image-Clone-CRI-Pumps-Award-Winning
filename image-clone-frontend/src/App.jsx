import Logo from "./assets/logo.png";
import Trophy from "./assets/1.png";
import AwardPresent from "./assets/2.png";
import Products from "./assets/3.png";

function App() {
  const footerContent = [
    "CHEMICALS & PROCESS",
    "POWER",
    "WATER & WASTE WATER",
    "OILS & GAS",
    "PHARMA",
    "SUGARS & DISTILLERIES",
    "PAPER & PULP",
    "MARINE & DEFENCE",
    "METAL & MINING",
    "FOOD & BEVERAGE",
    "PETROCHEMICAL & REFINERIES",
    "SOLAR",
    "BUILDING",
    "HVAC",
    "FIRE FIGHTING",
    "AGRICULTURE & RESIDENTIAL",
  ];

  return (
    <div className="flex tracking-wide flex-col h-full w-[100vw] min-h-[100vh] overflow-x-hidden px-1.5 text-base max-lg:text-sm/5 max-vsm:text-xs pb-1.5 bitter-font">
      <header className="image-container w-full object-contain overflow-x-hidden flex justify-center place-items-center">
        <img
          src={Logo}
          alt="logo"
          className="max-w-[500px] max-sm:w-[90vw] h-auto object-contain"
        />
      </header>
      <div className="w-full h-auto overflow-x-hidden justify-center flex gap-x-3 gap-y-4 py-2 max-md:flex-col">
        <figure className="trophy-container flex justify-center place-items-center md:w-[30%]">
          <img
            src={Trophy}
            alt="NATIONAL ENERGY CONSERVATION AWARD"
            className="max-h-[650px] max-xxl:max-h-[600px] max-md:max-h-[450px] max-sm:max-h-[450px] max-vsm:max-h-[350px]"
          />
        </figure>
        <div className="description-container md:w-[60%] flex flex-col gap-y-3 justify-center place-items-center">
          <div className="description-data flex flex-col gap-y-2">
            <span className="font-extrabold text-start">
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </span>
            <div className="space-y-1 py-1 relative ml-8">
              <span className="list-item">
                C.R.I.&lsquo;s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </span>
              <span className="list-item">
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </span>
            </div>
          </div>
          <div className="award-present-container w-full flex-col flex justify-center place-items-center">
            <img
              src={AwardPresent}
              alt=""
              className="max-h-[400px] max-xl:max-h-[300px] max-md:max-h-[450px] max-sm:max-h-[300px]"
            />
            <span className="">
              Government of India has awarded the{" "}
              <span className="font-extrabold">
                &quot;National Energy Conservation Award 2018&quot;
              </span>
              . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group
              received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha
              & Shri. Raj Kumar Singh, Honorable Minister of State.
            </span>
          </div>
        </div>
      </div>
      <span className="w-full text-center py-8 ">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.{" "}
      </span>
      <div className="products-container flex w-full h-max justify-center place-items-center object-contain">
        <figure className="max-w-[1000px] w-[90vw]">
          <img src={Products} alt="Products List" className="object-contain" />
          <div className="w-full flex text-center justify-center place-items-center">
            <span className="py-1.5 w-full text-center text-xs max-vsm:text-xs max-vvsm:text-[10px]">
              Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables
              - Solar Systems - Motors
            </span>
          </div>
        </figure>
      </div>
      <div className="border-t-[2px] pt-4 relative mt-4 border-[#a52326]">
        <div className="flex w-full text-base max-ssm:text-xs justify-center place-items-center text-center">
          <span className="font-extrabold">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </span>
        </div>
        <div className="py-2">
          <div className="content-list flex gap-y-1 justify-center text-center flex-wrap">
            {footerContent.map((item, index) => {
              return (
                <div key={item}>
                  <span className="array-item px-1 text-sm max-vsm:text-xs">
                    {item}
                  </span>
                  {index != footerContent.length - 1 && (
                    <span className="border-l-[2px] border-[#a52326]"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="w-full px-4 py-4 bg-[#ec3237] min-h-[100px] max-sm:justify-center flex max-sm:place-items-center overflow-hidden">
        <div className="gap-x-4 gap-y-1 max-sm:flex-col max-sm:justify-center flex justify-around w-fit md:w-full">
          <div className="flex gap-x-2 h-fit text-white text-xs items-end">
            <div className="size-7 max-sm:size-6 flex justify-center  place-items-center rounded-full bg-[#fff]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="size-[70%] fill-[#ec3237]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <div className="flex justify-center align-text-bottom h-fit">
              <span className="align-text-bottom flex tracking-wider">
                Toll free<span className="font-bold px-1">1800 200 1234</span>
              </span>
            </div>
          </div>

          <a
            href="https://www.facebook.com/cripumps"
            target="_blank"
            className="flex gap-x-1 h-fit text-white text-xs items-end"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 max-sm:size-6 fill-[#fff]"
              viewBox="0 0 50 50"
            >
              <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
            </svg>
            <div className="flex justify-center align-text-bottom h-full relative top-[40%]">
              <span className="align-text-bottom flex tracking-wider">
                www.facebook.com/cripumps
              </span>
            </div>
          </a>

          <a
            href="https://www.crigroups.com"
            className="flex gap-x-1 text-white text-xs h-fit items-end"
            target="_blank"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-7 max-sm:size-6"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="style=fill">
                  {" "}
                  <g id="web">
                    {" "}
                    <g id="Vector">
                      {" "}
                      <path
                        d="M15.3222 10.383C15.3796 10.9457 15.4125 11.4903 15.4125 12C15.4125 12.9541 15.2972 14.0315 15.1208 15.1208C14.0315 15.2972 12.9541 15.4125 12 15.4125C11.0502 15.4125 9.97313 15.2975 8.87911 15.1205C8.70281 14.0312 8.5875 12.954 8.5875 12C8.5875 11.4905 8.62039 10.9458 8.67789 10.383C9.82608 10.5668 10.9715 10.6875 12 10.6875C13.0286 10.6875 14.174 10.5668 15.3222 10.383Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M16.8752 10.0994C16.9462 10.7579 16.9875 11.399 16.9875 12C16.9875 12.8769 16.8997 13.8389 16.7599 14.8153C18.7425 14.4016 20.575 13.8731 21.5567 13.5722C21.8739 13.475 21.9986 13.4363 22.1658 13.3694C22.2494 13.336 22.326 13.302 22.4259 13.2543C22.4748 12.843 22.5 12.4244 22.5 12C22.5 10.878 22.324 9.79714 21.9982 8.78346L21.9133 8.81017C20.8868 9.12245 18.9652 9.6745 16.8752 10.0994Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M21.4017 7.31948C20.3698 7.63221 18.579 8.14039 16.6599 8.53603C16.2178 5.84926 15.443 3.16951 15.0702 1.95598C17.8422 2.80227 20.1273 4.76467 21.4017 7.31948Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M15.1117 8.82229C14.0253 8.99781 12.9513 9.1125 12 9.1125C11.0487 9.1125 9.97477 8.99781 8.88843 8.8223C9.30471 6.28005 10.0478 3.68306 10.4278 2.44333C10.525 2.12606 10.5637 2.00144 10.6306 1.83418C10.664 1.75062 10.698 1.67398 10.7457 1.57414C11.157 1.52518 11.5756 1.5 12 1.5C12.4434 1.5 12.8803 1.52748 13.3093 1.58083C13.3184 1.61564 13.3268 1.64679 13.3351 1.67626C13.3597 1.76333 13.3982 1.8857 13.4628 2.09104L13.4696 2.11261C13.7935 3.14223 14.6519 6.01401 15.1117 8.82229Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M7.34004 8.536C7.7801 5.86107 8.54986 3.19576 8.92192 1.98181L8.92983 1.95597C6.15777 2.80225 3.8727 4.76465 2.59835 7.31946C3.63018 7.63219 5.42095 8.14036 7.34004 8.536Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M2.00184 8.78345C1.67598 9.79714 1.5 10.878 1.5 12C1.5 12.4389 1.52693 12.8715 1.57923 13.2963L1.74471 13.3515L1.74603 13.3519L1.74765 13.3525L1.74879 13.3528C1.80205 13.3705 3.36305 13.886 5.41878 14.3975C5.99886 14.5418 6.61307 14.6844 7.24006 14.8151C7.10025 13.8388 7.0125 12.8769 7.0125 12C7.0125 11.3988 7.05374 10.7577 7.12472 10.0994C5.03428 9.67436 3.11218 9.12212 2.08597 8.80989L2.07883 8.80771L2.00184 8.78345Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M12 16.9875C12.8769 16.9875 13.8389 16.8997 14.8153 16.7599C14.4016 18.7425 13.8731 20.575 13.5722 21.5566C13.475 21.8739 13.4363 21.9985 13.3694 22.1658C13.336 22.2494 13.302 22.326 13.2543 22.4259C12.843 22.4748 12.4244 22.5 12 22.5C11.5756 22.5 11.157 22.4748 10.7457 22.4259C10.698 22.326 10.664 22.2494 10.6306 22.1658C10.5637 21.9986 10.525 21.8739 10.4278 21.5567C10.1269 20.5751 9.59846 18.7427 9.18478 16.7603C10.1579 16.8996 11.1201 16.9875 12 16.9875Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M5.0385 15.9259C3.73853 15.6024 2.63135 15.2775 1.95597 15.0702C2.97258 18.4002 5.59982 21.0274 8.92983 22.044L8.92192 22.0182C8.59705 20.9582 7.96897 18.7917 7.52191 16.4784C6.6525 16.3103 5.80722 16.1171 5.0385 15.9259Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M22.0182 15.0781C20.9582 15.403 18.7915 16.0311 16.4781 16.4781C16.0311 18.7915 15.403 20.9581 15.0781 22.0182L15.0702 22.044C18.4002 21.0274 21.0274 18.4002 22.044 15.0702L22.0182 15.0781Z"
                        fill="#fff"
                      ></path>{" "}
                      <path
                        d="M1.6103 13.323C1.64665 13.3277 1.67628 13.3327 1.68611 13.3349C1.69472 13.337 1.70821 13.3406 1.7131 13.3419L1.72391 13.345L1.72973 13.3468L1.73585 13.3487L1.74098 13.3503C1.7381 13.3494 1.67976 13.3348 1.6103 13.323Z"
                        fill="#fff"
                      ></path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <div className="flex justify-center align-text-bottom h-fit">
              <span className="align-text-bottom flex tracking-wider">
                www.crigroups.com
              </span>
            </div>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
