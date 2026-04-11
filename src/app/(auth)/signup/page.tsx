import Link from "next/link";
import Image from "next/image";
import icon from "@/src/assets/images/icon.png";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Lineicons } from '@lineiconshq/react-lineicons';
import { Envelope1Bulk, Locked1Bulk } from '@lineiconshq/free-icons';
import { RandomSquaresBackground } from "@/src/components/ui/random-squares-background";

export default function Signup() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-foreground via-foreground to-[#7C3AED]">
            <RandomSquaresBackground />
            <Card className="w-full max-w-md p-6 bg-[#1D1B2B] rounded-lg shadow-lg border-none relative z-10">
                <div>
                    <Image src={icon} alt="Icon" className="w-24 h-24 mb-4 mx-auto" priority />
                    <p className="text-center text-md text-white/55 mb-6">
                        Crie sua conta e organize seus links com inteligencia.
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
                    <div className="relative mb-4">
                        <Lineicons 
                            icon={Locked1Bulk} 
                            className="w-5 h-5 text-white/55 mb-2 mx-auto absolute top-4 left-3" 
                        />
                        <Input 
                            type="password"
                            placeholder="xxxxxxxxxx" 
                            className="w-full pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" 
                        />
                    </div>
                    <div className="relative mb-4">
                        <Lineicons 
                            icon={Locked1Bulk} 
                            className="w-5 h-5 text-white/55 mb-2 mx-auto absolute top-4 left-3" 
                        />
                        <Input 
                            type="password"
                            placeholder="Confirmar senha" 
                            className="w-full pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12" 
                        />
                    </div>
                    <Button className="w-full mt-6 h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50">
                        Criar conta
                    </Button>
                    
                    <div className="relative flex items-center my-6">
                        <div className="flex-1 border-t border-white/10"></div>
                        <span className="px-3 text-xs text-white/55">Ou continue com</span>
                        <div className="flex-1 border-t border-white/10"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center h-11 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                            Google
                        </button>
                        <button className="flex items-center justify-center h-11 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                            </svg>
                            Facebook
                        </button>
                    </div>
                    
                    <div className="text-center mt-6">
                        <p className="text-sm text-white/55">
                            Já tem conta?{" "}
                            <Link 
                                href="/" 
                                className="text-primary hover:text-primary/80 font-semibold transition-colors cursor-pointer"
                            >
                                Entrar
                            </Link>
                        </p>
                    </div>
                </div>
            </Card>
        </div>
    )
}