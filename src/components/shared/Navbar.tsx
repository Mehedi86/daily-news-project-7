import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { RiMenu2Line } from "react-icons/ri";


export default function Navbar() {
    return (
        <header className="py-4 shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* logo */}
                <div>
                    <Link className="text-xl font-bold" href="/">
                        Daily News
                    </Link>
                </div>

                {/* desktop menu */}
                <NavigationMenu className="hidden lg:flex font-semibold">
                    <NavigationMenuList className="flex gap-4">

                        {/* simple link */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/news">
                                News
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/counter">
                                Counter
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        {/* dropdown item */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 w-48">
                                    <li>
                                        <NavigationMenuLink href="/news">
                                            Web Development
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/news">
                                            Mobile Apps
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href="/news">
                                            SEO
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        {/* simple links */}
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/posts">
                                Posts
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/comments">
                                Comments
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* color switcher and login button*/}
                <div className="hidden lg:flex items-center gap-2">
                    <span>Dark Mode</span>
                    <Switch className="cursor-pointer" />
                    <Button className="cursor-pointer">Login</Button>
                </div>
                {/* mobile hamburger menu */}
                <div className="lg:hidden">
                    <Button
                        variant={"outline"}>
                        <RiMenu2Line />
                    </Button>
                </div>
            </nav >
        </header >
    );
}
