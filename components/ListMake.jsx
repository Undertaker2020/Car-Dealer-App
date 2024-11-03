import React from 'react';

async function fetchData(makeId, year) {
    const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
    );
    const result = await response.json();
    return result.Results;
}

export default async function ListMark({ makeId, year }) {
    const data = await fetchData(makeId, year);

    if (!data || data.length === 0) {
        return <p>Sorry, but no data for the selected brand and year =(</p>;
    }

    return (
        <div className="w-1/2 min-w-[350px]">
            <ul className="overflow-hidden w-full max-h-[300px] bg-gradient-to-b from-blue-100 via-white to-blue-50 flex flex-col gap-2 p-4 rounded-lg shadow-lg overflow-y-auto">
                {data.map((model, index) => (
                    <li
                        className="text-center text-2xl text-gray-800 border border-gray-200 rounded-md px-5 py-3 hover:bg-gradient-to-r from-blue-400 to-blue-600 hover:text-white transition-all duration-200 ease-in-out transform hover:scale-105 cursor-pointer"
                        key={index}
                    >
                        {model.Model_Name}
                    </li>
                ))}
            </ul>
        </div>

    );
}