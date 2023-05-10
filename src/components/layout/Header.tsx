import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { mainNavigation } from "@/config/main-navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <header className="bg-white py-3">
        <div className="m-auto flex w-svw-95 max-w-7xl justify-between">
          <div className="my-auto h-full text-lg font-semibold">
            UgwAd Party
          </div>
          <nav>
            <NavigationMenu>
              <NavigationMenuList>
                {mainNavigation.primary.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          item.external ? "after:content-['_↗']" : ""
                        )}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer noopener" : ""}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </header>
    </>
  );
}
