import { ReactNode } from "react";

interface SecondaryButtonProps {
  children: ReactNode;
  classNames?: string;
  onClick?: () => void;
}

const SecondaryButton = ({
  children,
  classNames = "",
  onClick,
}: SecondaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${classNames} rounded-3xl bg-secondary px-2 py-2 duration-500 hover:scale-95 min-w-[250px]`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
