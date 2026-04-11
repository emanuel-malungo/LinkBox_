'use client';

import Link from "next/link";
import Image from "next/image";
import icon from "@/src/assets/images/icon.png";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import Input from "@/src/components/common/Input";
import { Envelope1Bulk, Locked1Bulk } from '@lineiconshq/free-icons';
import { RandomSquaresBackground } from "@/src/components/ui/random-squares-background";
import { GoogleIcon } from "@/src/components/icons/GoogleIcon";
import { FacebookIcon } from "@/src/components/icons/FacebookIcon";
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '@/src/schemas/auth.schemas';
import type { SignupFormData } from '@/src/schemas/auth.schemas';

export default function Signup() {
    const { control, handleSubmit, formState: { errors } } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onSubmit = (data: SignupFormData) => {
        console.log('Signup Data:', data);
        // TODO: Integrar com API de signup
    };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input 
                                {...field}
                                type="email"
                                placeholder="linkbox26@gmail.com"
                                icon={Envelope1Bulk}
                                errorMessage={errors.email?.message}
                            />
                        )}
                    />
                    
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input 
                                {...field}
                                type="password"
                                placeholder="xxxxxxxxxx"
                                icon={Locked1Bulk}
                                errorMessage={errors.password?.message}
                            />
                        )}
                    />
                    
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <Input 
                                {...field}
                                type="password"
                                placeholder="Confirmar senha"
                                icon={Locked1Bulk}
                                errorMessage={errors.confirmPassword?.message}
                            />
                        )}
                    />
                    
                    <Button 
                        type="submit"
                        className="w-full mt-6 h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-primary/50"
                    >
                        Criar conta
                    </Button>
                    
                    <div className="relative flex items-center my-6">
                        <div className="flex-1 border-t border-white/10"></div>
                        <span className="px-3 text-xs text-white/55">Ou continue com</span>
                        <div className="flex-1 border-t border-white/10"></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="flex items-center justify-center h-11 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <GoogleIcon />
                            Google
                        </button>
                        <button className="flex items-center justify-center h-11 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20">
                            <FacebookIcon />
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
                </form>
            </Card>
        </div>
    )
}