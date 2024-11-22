import { ReactNode } from "react";

interface CheckBoxProps {
  children: ReactNode;
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const CheckBox = ({ children, value, setValue }: CheckBoxProps) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => setValue(!value)}
        className="hidden"
      />
      <div className={`w-5 h-5 border-2 rounded-md mr-2 flex justify-center items-center ${ value ? "border-primary" : "border-focus"}`}>
        {value && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-primary"
            viewBox="6 10 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 16.25l-3.292-3.292a1 1 0 0 1 1.416-1.416L10 13.584l3.292-3.292a1 1 0 1 1 1.416 1.416L11.416 16.25a1 1 0 0 1-1.416 0z"
              clipRule="evenodd"
              transform="scale(1.5)" 
            />

          </svg>
        )}
      </div>
      {children}
    </label>
  );
};

export default CheckBox;
