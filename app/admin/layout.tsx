import type React from "react"
import { AdminSidebar } from "@/components/admin-sidebar"
import { UserNav } from "@/components/user-nav"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-50 border-b bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <UserNav />
          </div>
        </header>
        <main className="flex-1 p-4 md:p-8">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}

