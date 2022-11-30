import { FaBitcoin, FaExchangeAlt } from "react-icons/fa"
import { AiOutlineDatabase, AiFillSetting } from "react-icons/ai"
import {  MdDoubleArrow } from "react-icons/md"

export const sidebarData = [
    {
        id: 1,
        name: "Coins",
        icons: <FaBitcoin size={24} />
    },

    {
        id: 2,
        name: "Exchanges",
        icons: <FaExchangeAlt size={24} />
    },

    {
        id: 3,
        name: "Swap",
        icons: <MdDoubleArrow size={24} />
    },

    {
        id: 4,
        name: "API",
        icons: <AiOutlineDatabase size={24} />
    },

    {
        id: 5,
        name: "API",
        icons: <AiFillSetting size={24} />
    }
]