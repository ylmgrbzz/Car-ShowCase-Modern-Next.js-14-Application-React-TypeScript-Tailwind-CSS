"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types/index";

const CustomButton = ({
  isDisabled,
  btnType,
  containerStyles,
  textStyles,
  title,
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`flex items-center justify-center ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1   ${textStyles}      `}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>;
};

export default CustomButton;
