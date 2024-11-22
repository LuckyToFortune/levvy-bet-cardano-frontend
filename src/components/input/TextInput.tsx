interface TextInputProps {
  classNames?: string;
  type: string;
  placeholder: string;
  value: any;
  max?: number;
  setValue: React.Dispatch<React.SetStateAction<any>>;
}

const TextInput = ({
  classNames,
  type,
  placeholder,
  value,
  max,
  setValue,
}: TextInputProps) => {
  return (
    <input
      className={`w-full rounded-xl p-2 text-front focus:outline-none bg-back border-2 border-primary ${classNames}`}
      placeholder={placeholder}
      type={type}
      min={0}
      max={max}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextInput;
