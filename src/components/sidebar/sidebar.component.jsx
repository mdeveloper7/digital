import React from "react";
import SearchNav from '/components/search-nav/search-nav.component';
import AddNav from '/components/add-nav/add-nav.component';

import { SideBarContent } from './sidebar.styles.jsx';
import './sidebar.styles.scss';

const Sidebar = () => {
    return (
        <>
            <SideBarContent className="d-none d-md-block d-lg-block">
                <SearchNav />
                <AddNav />
            </SideBarContent>
        </>
    );
};

export default Sidebar;