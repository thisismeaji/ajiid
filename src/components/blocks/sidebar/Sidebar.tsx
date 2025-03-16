"use client"; // Pastikan ini ada di baris pertama

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pakai usePathname
import Styles from "../sidebar/sidebar.module.css";
import {
  ChartNoAxesColumn,
  ExternalLink,
  Layers2,
  LogOut,
  MessageSquareMore,
  Settings,
  StickyNote,
  Wallet,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname(); // Ambil path halaman saat ini

  return (
    <aside className={Styles.aside}>
      <div>
        <ul>
          <Link href="/dashboard">
            <li className={pathname === "/dashboard" ? Styles.menuActive : ""}>
              <div>
                <StickyNote size={20} />
              </div>
              <span>Posts</span>
            </li>
          </Link>
          <Link href="/dashboard/stats">
            <li className={pathname === "/dashboard/stats" ? Styles.menuActive : ""}>
              <div>
                <ChartNoAxesColumn size={20} />
              </div>
              <span>Stats</span>
            </li>
          </Link>
          <Link href="/dashboard/comments">
            <li className={pathname === "/dashboard/comments" ? Styles.menuActive : ""}>
              <div>
                <MessageSquareMore size={20} />
              </div>
              <span>Comments</span>
            </li>
          </Link>
          <Link href="/dashboard/earnings">
            <li className={pathname === "/dashboard/earnings" ? Styles.menuActive : ""}>
              <div>
                <Wallet size={20} />
              </div>
              <span>Earnings</span>
            </li>
          </Link>
          <Link href="/dashboard/pages">
            <li className={pathname === "/dashboard/pages" ? Styles.menuActive : ""}>
              <div>
                <Layers2 size={20} />
              </div>
              <span>Pages</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              <div>
                <ExternalLink size={20} />
              </div>
              <span>View Blog</span>
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <ul>
          <Link href="/dashboard/settings">
            <li className={pathname === "/dashboard/settings" ? Styles.menuActive : ""}>
              <div>
                <Settings size={20} />
              </div>
              <span>Settings</span>
            </li>
          </Link>
          <Link href="/">
            <li>
              {" "}
              {/* Tidak pakai class menuActive */}
              <div>
                <LogOut size={20} />
              </div>
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
