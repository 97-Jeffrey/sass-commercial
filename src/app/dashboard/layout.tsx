import { ReactNode } from "react";
import NavBar from "./_components/NavBar";

export default function DashboardLayout({ children}: {children: ReactNode}) {
   return (
    <div className="bg-cyan-50/40 min-h-screen">
        <NavBar />
        <div className="container py-6">{children}</div>
    </div>
   )
}