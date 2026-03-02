// src/app/admin/users/page.js
import UserManagement from "@/components/Admin/UserManagement";
import { getUsers } from "@/lib/api";

export default async function UsersPage() {
      const users = await getUsers();

      return (
            <>
                  <UserManagement initialUsers={users} />
            </>
      );
}
