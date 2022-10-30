import type { PropsWithChildren } from "react";

const NLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <div className="flex justify-center">
      <div className="relative flex flex-col w-full max-w-2xl gap-6">
        {children}
      </div>
    </div>
  );
};

export default NLayout;
