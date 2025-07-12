import { Control, FieldPath, FieldValues } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectInputProps<FValue extends FieldValues> = {
  label?: string;
  control: Control<FValue>;
  name: FieldPath<FValue>;
  options: Readonly<
    {
      label: string;
      value: string | number;
    }[]
  >;
  placeholder?: string;
  /// used as ui indicator to show the field is required
  required?: boolean;
};

export const SelectInput = <FValue extends FieldValues>({
  control,
  name,
  options,
  label,
  placeholder,
  required = true,
}: SelectInputProps<FValue>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          {label && (
            <FormLabel>
              {label} {required && <span className="text-destructive">*</span>}
            </FormLabel>
          )}
          <Select onValueChange={field.onChange} value={field.value}>
            <FormControl>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="w-full">
              {options.map((opt) => (
                <SelectItem
                  value={opt.value.toString().toLowerCase()}
                  key={opt.value.toString().toLowerCase()}
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
