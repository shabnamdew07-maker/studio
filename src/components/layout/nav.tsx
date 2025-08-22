
"use client";

import { usePathname } from 'next/navigation';
import {
  BookOpen,
  Bell,
  LayoutDashboard,
  Map,
  ShieldAlert,
  Sparkles,
  LogIn,
  LogOut,
  Ticket,
} from 'lucide-react';

import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import Link from 'next/link';

const navItems = [
  { href: '/login', icon: LogIn, label: 'Login' },
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/map', icon: Map, label: 'Event Map' },
  { href: '/shows', icon: Ticket, label: 'Shows' },
  { href: '/recommendations', icon: Sparkles, label: 'Recommendations' },
  { href: '/alerts', icon: Bell, label: 'Alerts' },
  { href: '/report', icon: ShieldAlert, label: 'Report Incident' },
  { href: '/resources', icon: BookOpen, label: 'Resources' },
  { href: '/signout', icon: LogOut, label: 'Sign Out' },
];

export function Nav({ isMobile = false }: { isMobile?: boolean }) {
  const pathname = usePathname();

  return (
    <div className="flex w-full flex-col gap-2 p-2">
      <SidebarMenu>
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              tooltip={isMobile ? undefined : item.label}
            >
              <Link href={item.href}>
                <item.icon />
                <span>{item.label}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}
