'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Dropdown from '@/components/Dropdown';

const VEHICLE_API_URL = process.env.NEXT_PUBLIC_MAKES_URL;

export default function FilterPage() {
    const [makes, setMakes] = useState([]);
    const [selectedMake, setSelectedMake] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2004 + 1 }, (_, i) => 2004 + i);

    const fetchVehicleMakes = useCallback(async () => {
        if (!VEHICLE_API_URL) {
            console.error('API URL is not defined');
            return;
        }

        try {
            const response = await fetch(VEHICLE_API_URL);
            const data = await response.json();
            const formattedMakes = data.Results.map(make => ({
                value: make.MakeId,
                label: make.MakeName,
            }));
            setMakes(formattedMakes);
        } catch (error) {
            console.error('Error fetching vehicle makes:', error);
        }
    }, []);

    useEffect(() => {
        fetchVehicleMakes();
    }, [fetchVehicleMakes]);

    return (
        <div className="flex flex-col w-full h-screen items-center justify-center bg-gradient-to-br from-purple-500 to-blue-700">
            <div className="w-9/12 md:w-6/12 h-2/4 bg-gradient-to-r from-white via-blue-50 to-purple-100 rounded-lg flex flex-col drop-shadow-2xl items-center justify-center p-6">
                <h1 className="mb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-purple-600 tracking-wider">
                    Choose Your Vehicle
                </h1>
                <div className="w-full max-w-xl space-y-4">
                    <Dropdown
                        label="Vehicle Make:"
                        options={makes}
                        onChange={e => setSelectedMake(e.target.value)}
                        placeholder="Select a make"
                    />
                    <Dropdown
                        label="Model Year:"
                        options={years.map(year => ({ value: year, label: year }))}
                        onChange={e => setSelectedYear(e.target.value)}
                        placeholder="Select a year"
                    />
                    <Link href={`/result/${selectedMake}/${selectedYear}`} passHref>
                        <button
                            disabled={!selectedMake || !selectedYear}
                            className="mt-6 w-full rounded-md bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:from-purple-600 hover:to-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            Show me Cars
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
