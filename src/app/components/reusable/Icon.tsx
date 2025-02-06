import Link from "next/link";
import Image from "next/image";

import { HeaderIcon } from "@/app/utils/types";

export default function Icon({
  icon,
  classNames,
}: {
  icon: HeaderIcon;
  classNames?: string;
}) {
  return (
    <Link href={icon.href} className={classNames}>
      <Image src={icon.icon} width={24} height={24} alt={icon.href} />
    </Link>
  );
}
