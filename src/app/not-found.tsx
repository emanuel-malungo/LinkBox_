import Image from "next/image";
import { Card } from "@/src/components/ui/card";
import icon from "@/src/assets/images/icon.png";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-foreground via-foreground to-[#7C3AED]/20">
      <Card className="w-full max-w-md p-6 bg-[#1D1B2B] rounded-lg shadow-lg border-none">
        <div className="text-center">
          <Image src={icon} alt="Icon" className="w-24 h-24 mb-6 mx-auto opacity-50" priority />
          
          <h1 className="text-6xl font-bold text-[#7C3AED] mb-2">404</h1>
          
          <h2 className="text-2xl font-semibold text-white mb-4">Página não encontrada</h2>
          
          <p className="text-center text-white/55 mb-8">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          
          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50">
                Voltar ao Login
              </Button>
            </Link>
            
            <Link href="/" className="block">
              <button className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/10 text-white/55 hover:text-white font-semibold rounded-lg transition-all duration-200">
                Ir para Home
              </button>
            </Link>
          </div>
          
          <p className="text-xs text-white/30 mt-6">Erro: 404 - Not Found</p>
        </div>
      </Card>
    </div>
  );
}
