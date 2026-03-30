'use client';

import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-foreground">
            <Header />
            <Sidebar />  
        </div>
    )
}