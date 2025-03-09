"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Film, Home, BarChart, Users, MessageSquare, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      href: "/admin",
      label: "Dashboard",
      icon: Home,
      active: pathname === "/admin",
    },
    {
      href: "/admin/movies",
      label: "Movies",
      icon: Film,
      active: pathname === "/admin/movies",
    },
    {
      href: "/admin/users",
      label: "Users",
      icon: Users,
      active: pathname === "/admin/users",
    },
    {
      href: "/admin/reviews",
      label: "Reviews",
      icon: MessageSquare,
      active: pathname === "/admin/reviews",
    },
    {
      href: "/admin/analytics",
      label: "Analytics",
      icon: BarChart,
      active: pathname === "/admin/analytics",
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: Settings,
      active: pathname === "/admin/settings",
    },
  ]

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
        >
          <route.icon className="mr-2 h-4 w-4" />
          <span className="hidden md:inline">{route.label}</span>
        </Link>
      ))}
      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  )
}

