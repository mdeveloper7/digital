import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddNav = () => {
    const [links, setLinks] = useState([]);

    return (
        <>
            <div className="nav-link">Add Link
                <span className="nav-icon" onClick={() => setLinks(linkState => [...linkState, linkState.length + 1])}>
                    <FaPlus />
                </span>
            </div>
            {
                links &&
                links.map(link => {
                    return (
                        <div key={`link-plus-${link}`} className="nav-link">Link {link}</div>
                    )
                })
            }
        </>
    );
};

export default AddNav;