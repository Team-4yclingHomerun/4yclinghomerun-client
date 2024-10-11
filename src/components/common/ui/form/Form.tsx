import {
  FieldError,
  UseFormRegister,
  UseFormHandleSubmit,
  Path,
} from 'react-hook-form';

type FormProps<TFormValues extends Record<string, any>> = {
  onSubmit: (data: TFormValues) => void;
  handleSubmit: UseFormHandleSubmit<TFormValues>;
  children: React.ReactNode;
};

type FormFieldProps<TFormValues extends Record<string, any>> = {
  label: string;
  name: Path<TFormValues>; // 폼 값의 유효한 경로만 전달 가능함
  type: string;
  register: UseFormRegister<TFormValues>;
  error?: FieldError;
  placeholder?: string;
};

const Form = <TFormValues extends Record<string, any>>({
  onSubmit,
  handleSubmit,
  children,
}: FormProps<TFormValues>) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {children}
    </form>
  );
};

const FormField = <TFormValues extends Record<string, any>>({
  label,
  name,
  type,
  register,
  error,
  placeholder,
}: FormFieldProps<TFormValues>) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-base">
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm transition-all duration-200 hover:ring-2 hover:ring-kt-blue focus:outline-none focus:ring-2 focus:ring-kt-gray-1"
      />
      {error && (
        <span className="mt-1 text-sm text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export { Form, FormField };
