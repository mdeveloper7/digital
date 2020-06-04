import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

import './label-card.styles';

const LabelCard = () => {
    return (
        <div className="card link-card">
            <div className="card-block link-content">
                <p><span>Label</span></p>
                <p><FaPlus /> Label</p>
                <p><FaPlus /> Label</p>
                <p><FaMinus /> Label</p>
                <p><input type="checkbox" />Item</p>
                <p><input type="checkbox" />Item</p>
                <p><input type="checkbox" />Item</p>
                <p><input type="checkbox" />Item</p>
            </div>
        </div>
    );
};

export default LabelCard;