import Image from "next/image";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import icon from "@/src/assets/images/icon.png";
import { Button } from "@/src/components/ui/button";
import { Envelope1Bulk } from '@lineiconshq/free-icons';
import { Lineicons } from '@lineiconshq/react-lineicons';
import Link from "next/link";

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-foreground via-foreground to-[#7C3AED]">
            <Card className="w-full max-w-md p-6 bg-[#1D1B2B] rounded-lg shadow-lg border-none">
                <div>
                    <Image src={icon} alt="Icon" className="w-24 h-24 mb-4 mx-auto" priority />
                    <h2 className="text-2xl font-semibold text-white mb-2 text-center">Esqueci minha senha</h2>
                    <p className="text-center text-white/55 mb-6">
                        Digite seu email para receber as instruções de recuperação de senha.
                    </p>
                </div>
                <div>
                    <div className="relative mb-4">
                        <Lineicons 
                            icon={Envelope1Bulk} 
                            className="w-5 h-5 text-white/55 mb-2 mx-auto absolute top-4 left-3" 
                        />
                        <Input 
                            type="email"
                            placeholder="linkbox26@gmail.com"
                            className="w-full pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" 
                        />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50">
                        Enviar instruções
                    </Button>
                    
                    <div className="text-center mt-6">
                        <p className="text-sm text-white/55">
                            Lembrou a senha?{" "}
                            <Link 
                                href="/" 
                                className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
                            >
                                Voltar ao login
                            </Link>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    )
}
