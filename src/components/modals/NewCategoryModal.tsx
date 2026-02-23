'use client';

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

interface NewCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewCategoryModal({ isOpen, onClose }: NewCategoryModalProps) {
    const [categoryName, setCategoryName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSave = async () => {
        if (!categoryName.trim()) return;
        
        setIsLoading(true);
        // Simulação de salvamento
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsLoading(false);
        
        // Resetar campo
        setCategoryName("");
        
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        } else if (e.key === "Enter") {
            e.preventDefault();
            handleSave();
        }
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={handleOverlayClick}
        >
            <div 
                className="bg-[#1F1F2E] border border-[#2A2A3A] rounded-xl shadow-2xl w-full max-w-md mx-4 animate-in slide-in-from-bottom-4 duration-200"
                onKeyDown={handleKeyDown}
            >
                {/* Header */}
                <div className="p-6 border-b border-[#2A2A3A]">
                    <h2 className="text-2xl font-bold text-white">Criar Nova Categoria</h2>
                    <p className="text-sm text-white/60 mt-1">Organize seus links em grupos.</p>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div>
                        <label className="text-sm font-medium text-white/80 mb-2 block">
                            Nome da Categoria <span className="text-red-400">*</span>
                        </label>
                        <Input
                            type="text"
                            placeholder="Ex: Trabalho, Estudos, Projetos..."
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="bg-[#26263A] border-[#2A2A3A] text-white focus:border-primary"
                            autoFocus
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-[#2A2A3A] flex justify-end gap-3">
                    <Button
                        onClick={onClose}
                        variant="ghost"
                        className="text-white/60 hover:text-white hover:bg-white/5"
                    >
                        Cancelar
                    </Button>
                    <Button
                        onClick={handleSave}
                        disabled={!categoryName.trim() || isLoading}
                        className="bg-primary hover:bg-[#8B5CF6] text-white transition-all hover:scale-105"
                    >
                        {isLoading ? "Criando..." : "Criar Categoria"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
