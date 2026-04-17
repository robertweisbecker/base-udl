import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import { CourseGrid } from "@/components/course-grid"
import { SidebarInset, SidebarProvider } from "@workspace/ui/components/sidebar"

export default function Page() {
  return (
    <SidebarProvider
      className="flex-col"
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 64)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <SiteHeader />
      <div className="flex min-h-0 w-full min-w-0 flex-1 pt-(--header-height)">
        <AppSidebar variant="sidebar" />
        <SidebarInset className="min-w-0 overflow-x-hidden">
          <div className="flex flex-1 flex-col gap-2">
            <CourseGrid />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
