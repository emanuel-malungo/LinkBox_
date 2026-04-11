import Image from "next/image";
import { Card } from "@/src/components/ui/card";
import { RandomSquaresBackground } from "@/src/components/ui/random-squares-background";
import icon from "@/src/assets/images/icon.png";
import { Button } from "@/src/components/ui/button";
import Input from "@/src/components/common/Input";
import { Envelope1Bulk, Locked1Bulk } from '@lineiconshq/free-icons';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-foreground via-foreground to-[#7C3AED] relative overflow-hidden">
        <RandomSquaresBackground />
        <Card className="w-full max-w-md p-6 bg-[#1D1B2B] rounded-lg shadow-lg border-none relative z-10">
            <div>
              <Image src={icon} alt="Icon" className="w-24 h-24 mb-4 mx-auto" priority />
              <p className="text-center text-lg text-white/55 mb-6">
                Organize seus links com inteligencia.
              </p>
            </div>
            <div>
              <div className="relative mb-4" >
                <Input 
                  type="email"
                  placeholder="linkbox26@gmail.com"
                  icon={Envelope1Bulk}
                />
              </div>
              <div className="relative mb-4" >
                <Input 
                  type="password"
                  placeholder="xxxxxxxxxx"
                  icon={Locked1Bulk}
                />
              </div>
              <div className="flex justify-end" >
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-white/55 mt-2 block text-right hover:text-primary transition-colors cursor-pointer"
                >
                  Esqueci minha senha
                </Link>
              </div>
          
              <Button className="w-full mt-6 h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50">
                Comecar
              </Button>
              
              <div className="text-center mt-6">
                <p className="text-sm text-white/55">
                  Não tem conta?{" "}
                  <Link 
                    href="/signup" 
                    className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
                  >
                    Criar conta
                  </Link>
                </p>
              </div>
            </div>
        </Card>
    </div>
  );
}
