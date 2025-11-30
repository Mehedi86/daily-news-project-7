import { useAppSelector } from "@/app/redux/hooks";
import React from "react";

export default function Total() {
    const counters = useAppSelector((state) => state.counters);

    const total = (): number => {
        let totalCount = 0;
        for (const counter of counters) {
            totalCount = totalCount + counter.value;
        }
        return totalCount;
    }
    return (
        <div className="w-[320px] bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <p className="text-lg font-semibold text-gray-700 text-center">Total</p>

            <h1 className="text-5xl font-bold text-center mt-4 text-emerald-600">
                {total()}
            </h1>
        </div>
    );
}
