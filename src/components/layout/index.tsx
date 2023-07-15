import classNames from "classnames";
import { FC } from "react";

const Layout: FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className={classNames("w-full min-h-[5rem]", "bg-red-500")}></div>
        <div className="w-full min-h-[5rem] bg-blue-600"></div>
        <div className="w-full min-h-[5rem] bg-green-600"></div>
        <div className="w-full min-h-[5rem] bg-yellow-400"></div>
      </div>
    </>
  );
};
export default Layout;
