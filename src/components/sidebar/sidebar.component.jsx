import React from "react";
import './sidebar.styles';
import SearchNav from '/components/search-nav/search-nav.component';
import AddNav from '/components/add-nav/add-nav.component';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar d-none d-md-block d-lg-block">
                <SearchNav />
                <AddNav />
            </div>
        </>
    );
};

export default Sidebar;