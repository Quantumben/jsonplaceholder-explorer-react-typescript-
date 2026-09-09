import type { ChangeEvent } from "react";

interface InputProps {
  label: string;
  name: string;
  value: string;
  type?: "text" | "number" | "email";
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  name,
  value,
  type = "text",
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

export default Input;