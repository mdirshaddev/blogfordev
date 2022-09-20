import { FC } from "react";
import Link from "next/link";

const Sidebar: FC = (): JSX.Element => {
  return (
    <nav className="w-[30%]">
      <div>
        <ul>
          <li>
            <Link href={"/"}>
              <a>
                <span>🏠</span> Home
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
