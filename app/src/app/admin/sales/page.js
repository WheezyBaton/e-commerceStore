// src/app/admin/sales/page.js

import SalesReport from "@/components/Admin/SalesReport";
import { getOrdersByDate } from "@/lib/api";

export default async function SalesPage() {
      const initialOrders = await getOrdersByDate("2019-12-10", "2020-10-10");

      return (
            <div>
                  <SalesReport initialOrders={initialOrders} />
            </div>
      );
}
