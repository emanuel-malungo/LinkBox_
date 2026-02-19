import Header from "@/src/components/layout/user/Header";

export default function Dashboard() {
    return (
        <div className="min-h-screen bg-linear-to-br from-foreground via-foreground to-[#7C3AED]">
            <Header />
            <h1 className="text-3xl font-bold text-white">Bem-vindo ao Dashboard!</h1>
        </div>
    )
}