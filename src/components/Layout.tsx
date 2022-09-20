import Image from "next/image";
import { FC } from "react";
import { IChildProps } from "types/react";
import Sidebar from "components/Sidebar";

const Layout: FC<IChildProps> = (props): JSX.Element => {
  return (
    <>
      <div className="bg-white border-b border-b-slate-400">
        <nav className="max-w-7xl px-4 py-2 mx-auto">
          <div className="">
            <nav className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center">
                  <Image
                    src="/favicon.ico"
                    alt="Hackfest"
                    width={"40px"}
                    height={"40px"}
                  />{" "}
                  <div className="font-bold italic">hackfest</div>
                </div>
                <div>
                  <div className="pl-4">
                    <input
                      title="Search"
                      placeholder="Search"
                      className="p-2 rounded-sm"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="px-4 py-2 font-bold bg-cyan-300-400 hover:bg-cyan-600 cursor-pointer hover:text-white rounded-md mr-2">
                  <a className="" href="/login">
                    Login
                  </a>
                </div>
                <div className="px-4 py-2 rounded-md ring-1 ring-cyan-800 font-bold hover:bg-cyan-800 hover:text-white cursor-pointer hover:ring-0 transition-all">
                  <a className="" href="/signup">
                    Create Account
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto bg-gray-100 flex flex-row items-center">
        <Sidebar />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
