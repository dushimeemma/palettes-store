import Link from "next/link";
import Image from "next/image";

export default function Logo({
  label,
  imageURL,
  alt,
  width,
  height,
  linkClassNames,
  imageClassNames,
  labelClassNames,
  href,
}: {
  label?: string;
  imageURL?: string;
  alt?: string;
  width?: number;
  height?: number;
  linkClassNames?: string;
  imageClassNames?: string;
  labelClassNames?: string;
  href?: string;
}) {
  return (
    <Link
      className={`flex items-center gap-2 ${linkClassNames}`}
      href={href ?? "/"}
    >
      <Image
        src={imageURL ?? "/logo.png"}
        alt={alt ?? "Palette Express Logo"}
        width={width ?? 50}
        height={height ?? 32}
        className={imageClassNames}
      />
      <h1
        className={`text-3xl font-poppins text-dark font-bold ${labelClassNames}`}
      >
        {label ?? " Palette Express LLC"}
      </h1>
    </Link>
  );
}
