'use client';

import Sidebar from "./Sidebar"
import Header from "./Header"

export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-foreground">
            <Header />
            <div className="container mx-auto pt-24 px-4">
                <div className="flex gap-6">
                    <Sidebar />
                    <main className="flex-1">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}