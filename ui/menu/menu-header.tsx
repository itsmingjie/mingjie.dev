"use client";

import { Repeat } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const MenuHeader = (): JSX.Element => {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <Link href="/">
      <div className="flex items-center justify-between pb-2 pl-4 group">
        <h1 className="text-lg font-medium tracking-wide">
          {isEnglish ? "Mingjie Jiang" : "姜明劼"}
        </h1>

        <div
          className="transition-opacity opacity-0 text-hint/50 group-hover:opacity-100"
          onClick={() => setIsEnglish(!isEnglish)}
        >
          <Repeat size={16} />
        </div>
      </div>
    </Link>
  );
};
