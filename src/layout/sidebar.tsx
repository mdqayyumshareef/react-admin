import { faChartBar, faClipboardList, faParagraph, faScroll, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="w-[240px] bg-transparent py-3 pr-2 border-r border-gray-300 overflow-y-scroll">
            <List>
                <List.Item to="/dashboard">
                    <FontAwesomeIcon icon={faChartBar} />
                    <span>Dashboard</span>
                </List.Item>
                <List.Item to="/typography">
                    <FontAwesomeIcon icon={faParagraph} />
                    <span>Typography</span>
                </List.Item>
                <List.Item to="/forms">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <span>Forms</span>
                </List.Item>
                <List.Item to="/posts">
                    <FontAwesomeIcon icon={faScroll} />
                    <span>Posts</span>
                </List.Item>
            </List>
        </div>
    )
}

const List = ({ children }: { children: ReactNode }) => {
    return (
        <nav className="space-y-1">
            {children}
        </nav>
    )
}

List.Item = ({ to, children }: { to: string, children: ReactNode }) => {
    return (
        <NavLink
            to={to}
            className="flex items-center space-x-2 py-2 pl-6 text-sm font-medium hover:bg-gray-200 rounded-tr-md rounded-br-md transition-all ease-in duration-150"
            activeClassName="bg-blue-100 hover:bg-blue-100 tracking-wide border-l-4 border-blue-600"
        >
            {children}
        </NavLink>
    )
}