import { Github, MapPin, Tag, Twitter } from "lucide-react";

import { MenuDivider } from "./menu-divider";
import { MenuFooter } from "./menu-footer";
import { MenuHeader } from "./menu-header";
import { MenuItem } from "./menu-item";

export const Sidebar = (): JSX.Element => {
  return (
    <nav className="flex flex-col justify-between h-full pt-4">
      <div className="flex flex-col gap-2">
        <MenuHeader />

        <MenuDivider title="Collections" />

        <ul className="flex flex-col gap-1">
          <MenuItem href="/places" icon={<MapPin size={16} />}>
            Places
          </MenuItem>

          <MenuItem href="/goods" icon={<Tag size={16} />}>
            Goods
          </MenuItem>
        </ul>

        <MenuDivider title="Contact" />

        <ul className="flex flex-col gap-1">
          <MenuItem
            href="https://github.com/itsmingjie"
            icon={<Github size={16} />}
            hint="@itsmingjie"
            external
          >
            GitHub
          </MenuItem>

          <MenuItem
            href="https://twitter.com/itsmingjie"
            icon={<Twitter size={16} />}
            hint="@itsmingjie"
            external
          >
            Twitter
          </MenuItem>
        </ul>
      </div>

      <MenuFooter />
    </nav>
  );
};
