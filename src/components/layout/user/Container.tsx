'use client';

import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-linear-to-br from-foreground via-foreground to-[#7C3AED]">
            <Header />
            <div className="flex container mx-auto mt-8" >
                <Sidebar />
                <main className="ml-64 w-full">
                    {children}
                </main>
            </div>
           
        </div>
    )
}