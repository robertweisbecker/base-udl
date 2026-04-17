"use client"

import * as React from "react"
import Link from "next/link"

import { LogoIcon } from "@/components/logo"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@workspace/ui/components/sidebar"
import {
  Compass,
  ChalkboardTeacher,
  Student,
  Microphone,
  UserPlus,
  LifebuoyIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react"

const navItems = [
  { title: "Explore Courses", url: "/dashboard", icon: <Compass />, isActive: true },
  { title: "My Classes", url: "#", icon: <ChalkboardTeacher /> },
  { title: "My Students", url: "#", icon: <Student /> },
  { title: "Guest Speakers", url: "#", icon: <Microphone /> },
  { title: "Refer a Colleague", url: "#", icon: <UserPlus /> },
]

const secondaryItems = [
  { title: "Support", url: "#", icon: <LifebuoyIcon /> },
  { title: "Feedback", url: "#", icon: <PaperPlaneTiltIcon /> },
]

const user = {
  name: "Keith Kennedy",
  email: "k.kennedy@coss.com",
  avatar: "/placeholder-course-1.jpg",
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className="top-(--header-height) z-40 h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<Link href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <LogoIcon className="size-4" uniColor />
              </div>
              <div className="grid flex-1 text-start text-sm leading-tight">
                <span className="truncate font-medium">Everfi</span>
                <span className="truncate text-xs">Learning Platform</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    isActive={item.isActive}
                    render={<Link href={item.url} />}
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <NavSecondary items={secondaryItems} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
