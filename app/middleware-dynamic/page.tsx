import { cookies } from "next/headers";
import { Menu } from "@/components/menu";

export default function Dynamic() {
  const cookieStore = cookies();
  return (
    <div>
      <Menu />
      <div>
        <p>
          This page is dynamically rendered (reading cookies from the server)
        </p>
        <p>Cookies size: {cookieStore.size}</p>
        <p>The middleware has a 3000 ms timeout</p>
      </div>
    </div>
  );
}
