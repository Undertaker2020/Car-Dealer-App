"use client"

import dropArrow from "@/assets/icon_chevron-down.svg"
import { useState } from "react";
import Image from 'next/image';

export default function Dropdown({
                                     label,
                                     options,
                                     onChange,
                                     placeholder
                                 }) {
    const [isOpen, setIsOpen] = useState(false);
    const [displayedValue, setDisplayedValue] = useState(placeholder);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (optionValue, optionLabel) => {
        onChange({ target: { value: optionValue } });
        setDisplayedValue(optionLabel);
        setIsOpen(false);
    };

    return (
        <div className="w-full relative inline-block text-left">
            <label className="block text-lg font-semibold text-gray-700 mb-2 tracking-wide">{label}</label>
            <button
                className="w-full px-4 py-3 text-left text-gray-600 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg flex items-center justify-between shadow-md hover:from-purple-200 hover:to-blue-200 transition-all duration-300 ease-in-out focus:ring-2 focus:ring-blue-400"
                onClick={handleToggle}
            >
                {displayedValue || "Select an option"}
                <Image src={dropArrow} alt="drop arrow" className="w-4 h-4 transform transition-transform duration-200"
                       style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </button>
            {isOpen && (
                <ul className="w-full absolute mt-2 border border-gray-200 rounded-lg shadow-xl bg-white max-h-60 overflow-auto z-20 animate-slide-down">
                    {options.map((option) => (
                        <li
                            key={option.value || option}
                            className="px-4 py-3 text-gray-700 cursor-pointer hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 hover:text-blue-900 transition-colors duration-200 ease-in-out"
                            onClick={() => handleSelect(option.value, option.label || option)}
                        >
                            {option.label || option}
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
}
