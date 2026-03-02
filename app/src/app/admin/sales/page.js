// src/app/admin/sales/page.js
import SalesReport from "@/components/Admin/SalesReport";
import { getOrdersByDate } from "@/lib/api";

export default async function SalesPage({ searchParams }) {
      const start = searchParams?.start || "2019-12-10";
      const end = searchParams?.end || "2020-10-10";

      const orders = await getOrdersByDate(start, end);

      return (
            <>
                  <SalesReport orders={orders} currentStart={start} currentEnd={end} />
            </>
      );
}
