import Image from "next/image";

type BrandLogoVariant = "header" | "footer" | "hero";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
};

const sizeByVariant: Record<BrandLogoVariant, { className: string; width: number; height: number }> = {
  header: {
    className: "h-12 w-12",
    width: 48,
    height: 48,
  },
  footer: {
    className: "h-14 w-14",
    width: 56,
    height: 56,
  },
  hero: {
    className: "h-24 w-24 sm:h-32 sm:w-32",
    width: 128,
    height: 128,
  },
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const size = sizeByVariant[variant];

  return (
    <Image
      src="/brand/montaje-dsl-logo.png"
      alt="Logo MONTAJE DSL"
      width={size.width}
      height={size.height}
      priority={variant === "hero"}
      className={`${size.className} rounded-md object-contain`}
    />
  );
}
