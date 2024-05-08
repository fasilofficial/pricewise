import { cn } from "@/lib/utils";
import { PriceInfoCardProps } from "@/types";
import Image from "next/image";
import React from "react";

const PriceInfoCard = ({
  title,
  iconSrc,
  value,
  otherStyles,
}: PriceInfoCardProps) => {
  return (
    <div className={cn("price-info_card", otherStyles)}>
      <p className="text-base text-black-100">{title}</p>
      <div className="flex gap-1">
        <Image src={iconSrc} width={24} height={24} alt={title} />
        <p className="text-2xl font-bold text-secondary">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
