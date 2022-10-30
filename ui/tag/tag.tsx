import { clsx } from "@/lib/utils/clsx";

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
}

export const Tag = ({ label, className, ...props }: TagProps): JSX.Element => {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-light text-dark cursor-default",
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
};
