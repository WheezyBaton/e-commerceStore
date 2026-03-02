// src/app/admin/orders/page.js

import OrderManagement from "@/components/Admin/OrderManagement";
import { getOrders } from "@/lib/api";

export default async function OrdersPage() {
      const orders = await getOrders();

      return (
            <div>
                  <OrderManagement initialOrders={orders} />
            </div>
      );
}
