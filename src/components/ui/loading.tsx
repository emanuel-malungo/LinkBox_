export function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-foreground via-foreground to-[#7C3AED]/20">
      <div className="relative w-24 h-24">
        {/* Spinner exterior */}
        <div className="absolute inset-0 rounded-full border-4 border-[#7C3AED]/20"></div>
        
        {/* Spinner animado */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7C3AED] border-r-[#7C3AED] animate-spin"></div>
        
        {/* Logo no centro */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
            <span className="text-[#7C3AED] font-bold text-sm">LB</span>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-white/55 text-sm animate-pulse">Carregando...</p>
    </div>
  );
}
