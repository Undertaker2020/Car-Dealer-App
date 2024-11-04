import React, { Suspense } from 'react';
import Link from 'next/link';
import ListMake from '@/components/ListMake';

export async function generateStaticParams() {
    const VEHICLE_API_URL = process.env.NEXT_PUBLIC_MAKES_URL;

    if (!VEHICLE_API_URL) {
        console.error('API URL is not defined');
        return [];
    }

    try {
        const response = await fetch(VEHICLE_API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch vehicle makes');
        }
        const data = await response.json();

        const makes = data.Results.slice(0, 10).map(make => make.Make_ID.toString());
        const years = Array.from({ length: 2024 - 2004 + 1 }, (_, i) => (2004 + i).toString());

        const params = makes.flatMap(makeId =>
            years.map(year => ({ makeId, year }))
        );

        return params;
    } catch (error) {
        console.error('Error fetching vehicle makes:', error);
        return [];
    }
}

export default async function ResultPage({ params }) {
    const { makeId, year } = await params;

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-purple-50">
            <h1 className="mb-10 text-4xl font-bold text-gray-800">
                Car Models {year}:
            </h1>
            <Link href="/">
                <button
                    className="mb-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-semibold text-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                    Back to Start Page
                </button>
            </Link>
            <Suspense fallback={<p className="text-gray-500 text-xl">Loading...</p>}>
                <ListMake makeId={makeId} year={year} />
            </Suspense>
        </div>
    );
}
