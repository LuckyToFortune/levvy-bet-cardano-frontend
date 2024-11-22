import React, { ReactNode } from "react";

interface PrimaryButtonProps {
  children: ReactNode;
  classNames?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  classNames = "",
  onClick,
  disabled,
}: PrimaryButtonProps) => {
  const [effect, setEffect] = React.useState(false);
  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
        setEffect(true);
      }}
      className={`${classNames} rounded bg-amber-600 text-black px-2 py-2 duration-500 min-w-[200px] ${
        disabled ? "opacity-50" : "hover:shadow-xl "
      } ${effect && "animate-wiggle"}`}
      disabled={disabled}
      onAnimationEnd={() => setEffect(false)}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
