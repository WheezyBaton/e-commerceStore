// src/app/admin/orders/page.js
import OrderManagement from "@/components/Admin/OrderManagement";
import { getOrders } from "@/utils/api";

export default async function OrdersPage() {
      const orders = await getOrders();

      return (
            <>
                  <OrderManagement initialOrders={orders} />
            </>
      );
}
