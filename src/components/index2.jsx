import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { AiOutlineUser, AiOutlineQuestionCircle } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
export const headerLinks = [
  {
    id: 1,
    site: "Domain Names",
    // icon: <IoIosArrowDown />,
    subMenu: [
      {
        title: "Search for Domain",
      },
      {
        title: "Transfer Domain Names",
      },
      {
        title: "Auctions for Domain Names",
      },
    ],
  },

  {
    id: 2,
    site: "Websites & Hosting",
    // icon: <IoIosArrowDown />,
  },

  {
    id: 3,
    site: "Email & Marketing",
    // icon: <IoIosArrowDown />,
  },
];

export const headerSpan = [
  {
    id: 1,
    title: "Help Center",
    icon: <AiOutlineQuestionCircle />,
  },

  {
    id: 2,
    title: "Account",
    icon: <AiOutlineUser />,
  },

  {
    id: 3,
    title: "Basket",
    icon: <FiShoppingCart />,
  },
];
