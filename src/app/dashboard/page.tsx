import Container from "@/src/components/layout/user/Container";

export default function Dashboard() {
    return (
        <Container>
            <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
            <p className="text-white/80">Bem-vindo ao seu dashboard! Aqui você pode gerenciar seus links, categorias e visualizar suas estatísticas.</p>
        </Container>
    )
}