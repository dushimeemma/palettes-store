import Link from "next/link";

import { NavItem as Item } from "@/app/utils/types";

export default function NavItem({ item }: { item: Item }) {
  return (
    <li>
      <Link href={item.href} className="font-normal text-dark font-poppins">
        {item.label}
      </Link>
    </li>
  );
}
