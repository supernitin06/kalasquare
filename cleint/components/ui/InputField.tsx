"use client";

interface InputFieldProps {
  label: string;

  register: any;
  error?: string;
  placeholder?: string;
  type?: string;
  className?: string;
}

export default function InputField({
  label,
  register,
  error,
  placeholder,
  type = "text",
  className = "",
}: InputFieldProps) {
  return (
    <div className={className} >
      <label className="text-[clamp(15px,3vw,10px)]  font-medium">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full mt-1 px-2 py-2 text-[clamp(15px,3vw,10px)]  border rounded-xl focus:outline-none 
          focus:border-red-400 ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && <p className="text-red-500 text-[clamp(15px,3vw,10px)] mt-1">{error}</p>}
    </div>
  );
}
