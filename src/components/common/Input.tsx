
import { Input as UIInput } from "../ui/input"
import { Lineicons } from '@lineiconshq/react-lineicons';

interface CustomInputProps extends React.ComponentProps<"input"> {
  icon?: any;
  iconClassName?: string;
  wrapperClassName?: string;
  errorMessage?: string;
}

export default function Input({ 
  icon, 
  iconClassName = "w-5 h-5 text-white/55 absolute top-4 left-3",
  wrapperClassName = "mb-4",
  errorMessage,
  className = "w-full pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12",
  ...props 
}: CustomInputProps) {
  return (
    <div className={`relative ${wrapperClassName}`}>
      {icon && (
        <Lineicons 
          icon={icon} 
          className={iconClassName}
        />
      )}
      <UIInput 
        className={className}
        {...props}
      />
      {errorMessage && (
        <p className="text-red-500 text-xs mt-1 ml-1">
          {errorMessage}
        </p>
      )}
    </div>
  )
}