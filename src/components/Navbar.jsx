import React from "react";

const Navbar = () => {
  const [open, setOpen] = React.useState(true);
  const Content = [
    { Name: "HOME" },
    { Name: "SERVICE" },
    { Name: "ABOUT" },
    { Name: "BLOGS" },
    { Name: "CONTACT" },
  ];
  const linkRef = React.useRef(null);
  React.useEffect(() => {
    if (!open) {
      linkRef.current.style.top = `${59}px`;
    } else {
      linkRef.current.style.top = `-${300}px`;
    }
  }, [open]);
  return (
    <nav className="  relative md:flex bg-white w-full md:static md:justify-between">
      <div className="py-[15px] px-[25px] bg-white sticky md:static z-10 flex justify-between md:w-auto w-full md:flex md:items-center">
        <h1 className="font-semibold text-xl">Designer</h1>

        {open && (
          <button className="z-10 md:hidden" onClick={() => setOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        )}
        {!open && (
          <button className="z-10  md:hidden" onClick={() => setOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      {
        <ul
          className={` absolute md:flex md:static md:w-auto    duration-300 w-full px-[20px] py-[30px] left-0 bg-white`}
          ref={linkRef}
        >
          {Content.map((item, index) => {
            return (
              <li
                key={index}
                className="mb-[20px] md:mx-2 md:mb-0 flex items-center duration-300 hover:text-slate-400"
              >
                <a href="/#">{item.Name}</a>
              </li>
            );
          })}
          <li className="py-[5px] px-[15px] bg-[#4f46e5] duration-300 hover:bg-[#9995e6] w-fit rounded-md text-white cursor-pointer ">
            Get Started
          </li>
        </ul>
      }
    </nav>
  );
};
export default Navbar;
