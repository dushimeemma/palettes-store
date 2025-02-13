import Logo from "@/app/components/reusable/Logo";
import { navItems, headerIcons } from "@/app/utils/data";
import Icon from "@/app/components/reusable/Icon";
import NavItem from "@/app/components/reusable/NavItem";
import SideDrawer from "./Drawer";

export default function Header() {
  return (
    <>
      <header className="lg:hidden flex items-center justify-between m-6">
        <div />
        <Logo labelClassNames="text-sm" width={32} height={32} />
        <SideDrawer />
      </header>
      <header className="py-6 px-12 hidden lg:flex items-center justify-between">
        <Logo />
        <nav>
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <NavItem item={item} key={item.id} />
            ))}
          </ul>
        </nav>
        <aside className="flex gap-8">
          {headerIcons.map((icon) => (
            <Icon icon={icon} key={icon.id} />
          ))}
        </aside>
      </header>
    </>
  );
}
