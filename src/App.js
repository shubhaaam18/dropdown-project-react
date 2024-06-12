import React , { useState } from "react";
import './index.css'

const Dropdown = () => {
    // State to track whether the dropdown is hovered
    const [isHovered, setHovered] = useState(false);
    // State to store the list of dropdown options
    const [arrayList] = useState(['Yes', 'Probably not']);
    // State to store the selected value
    const [value, setValue] = useState('');

    // Function to handle click events on dropdown options
    const onClickHandeler = (e) => {
        // Set the selected value to the text of the clicked option
        setValue(e.target.textContent);
        // Hide the dropdown content after selection
        setHovered(false);
    }

    // Function to handle mouse enter event on the button
    const onMouseHover = () => {
        // Show the dropdown content when hovered
        setHovered(true);
    }

    // Map the arrayList to create the dropdown options
    const outputs = arrayList.map((output, index) => {
        return <a href="#" onClick={onClickHandeler} key={index}>{output}</a>;
    })

    return (
        <div className="dropdown-main-class">
            {/* Title */}
            <h1>Should you use a dropdown?</h1>
            {/* Display the selected value */}
            <h3>{value}</h3>
            {/* Button to trigger the dropdown */}
            <button className="dropdown-button" onMouseEnter={onMouseHover}>Select</button>
            {/* Dropdown content, visibility controlled by isHovered state */}
            <div className="dropdown-content" style={{ display: `${isHovered ? 'block' : 'none'}` }}>
                {outputs}
            </div>
        </div>
    );
}

export default Dropdown;
