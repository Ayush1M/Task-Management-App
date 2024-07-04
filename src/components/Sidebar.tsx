import { FC, ReactNode } from "react"

type SidebarProp = {
    children : ReactNode
}

const Sidebar : FC<SidebarProp> = ({children}) => {
    return (
        children
    )
}

export default Sidebar