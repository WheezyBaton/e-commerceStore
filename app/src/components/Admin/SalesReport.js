// src/components/Admin/SalesReport.js
"use client";

import { useRouter } from "next/navigation";

export default function SalesReport({ orders, currentStart, currentEnd }) {
      const router = useRouter();

      const handleDateChange = (type, value) => {
            const newStart = type === "start" ? value : currentStart;
            const newEnd = type === "end" ? value : currentEnd;
            router.push(`/admin/sales?start=${newStart}&end=${newEnd}`);
      };

      const totalSales = orders.reduce((total, order) => total + order.products.length, 0);

      return (
            <div className="p-4">
                  <h2 className="text-2xl font-bold mb-4">Sales report</h2>
                  <div className="mb-4">
                        <label className="block text-gray-700">Start date</label>
                        <input
                              type="date"
                              value={currentStart}
                              onChange={(e) => handleDateChange("start", e.target.value)}
                              className="border p-2 rounded text-black"
                        />
                  </div>
                  <div className="mb-4">
                        <label className="block text-gray-700">End date:</label>
                        <input
                              type="date"
                              value={currentEnd}
                              onChange={(e) => handleDateChange("end", e.target.value)}
                              className="border p-2 rounded text-black"
                        />
                  </div>
                  <div className="mt-4">
                        <p className="text-lg">
                              <strong>Number of orders:</strong> {orders.length}
                        </p>
                        <p className="text-lg">
                              <strong>Total sales:</strong> {totalSales} products
                        </p>
                  </div>
            </div>
      );
}
