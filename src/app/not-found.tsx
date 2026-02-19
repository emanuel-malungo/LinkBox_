"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";

export default function NotFound() {
  return (
    <div className="not-found-container relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
         style={{
           background: "#0F0F14"
         }}>
      {/* Background Decoration - Radial Gradient */}
      <div className="not-found-bg-decoration"></div>

      {/* Rotating Square */}
      <div className="not-found-square"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        
        {/* 404 Number */}
        <div className="not-found-404 leading-none">
          404
        </div>

        {/* Title */}
        <h1 className="not-found-title text-3xl md:text-4xl font-semibold text-[#E4E4E7] mt-8 mb-4">
          Página não encontrada
        </h1>

        {/* Description */}
        <p className="not-found-text text-base md:text-lg text-[#A1A1AA] max-w-md mb-12">
          O link que você tentou acessar não existe ou foi removido.
        </p>

        {/* Buttons */}
        <div className="not-found-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:justify-center">
          {/* Primary Button */}
          <Link href="/" className="w-full sm:w-auto">
            <Button 
              className="w-full sm:w-auto px-8 h-12 bg-[#7C3AED] hover:bg-[#8B5CF6] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Voltar para Home
            </Button>
          </Link>

          {/* Secondary Button */}
          <button 
            onClick={() => window.location.href = "/"}
            className="w-full sm:w-auto px-8 h-12 border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)]"
          >
            Explorar Links
          </button>
        </div>

        {/* Error Code */}
        <p className="text-xs text-[#52525B] mt-16 tracking-widest">
          ERRO 404
        </p>
      </div>
    </div>
  );
}
