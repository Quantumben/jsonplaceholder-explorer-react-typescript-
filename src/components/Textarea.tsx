import type { ChangeEvent } from "react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

function Textarea({label, name, value, placeholder, onChange,}: TextareaProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-700"
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={6}
        className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}

export default Textarea;