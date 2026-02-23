'use client';

import { useState } from "react";
import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";

interface NewLinkModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function NewLinkModal({ isOpen, onClose }: NewLinkModalProps) {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    if (!isOpen) return null;

    const handleSave = async () => {
        setIsLoading(true);
        // Simulação de salvamento
        await new Promise(resolve => setTimeout(resolve, 1000));
        setIsLoading(false);
        
        // Resetar campos
        setUrl("");
        setTitle("");
        setCategory("");
        setTags("");
        setIsFavorite(false);
        
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        } else if (e.key === "Enter" && !e.shiftKey) {
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
                className="bg-[#1F1F2E] border border-[#2A2A3A] rounded-xl shadow-2xl w-full max-w-lg mx-4 animate-in slide-in-from-bottom-4 duration-200"
                onKeyDown={handleKeyDown}
            >
                {/* Header */}
                <div className="p-6 border-b border-[#2A2A3A]">
                    <h2 className="text-2xl font-bold text-white">Adicionar Novo Link</h2>
                    <p className="text-sm text-white/60 mt-1">Organize um novo recurso na sua coleção.</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                    {/* URL */}
                    <div>
                        <label className="text-sm font-medium text-white/80 mb-2 block">
                            URL <span className="text-red-400">*</span>
                        </label>
                        <Input
                            type="url"
                            placeholder="https://exemplo.com"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="bg-[#26263A] border-[#2A2A3A] text-white focus:border-primary"
                        />
                    </div>

                    {/* Título */}
                    <div>
                        <label className="text-sm font-medium text-white/80 mb-2 block">
                            Título
                        </label>
                        <Input
                            type="text"
                            placeholder="Nome do link (opcional)"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-[#26263A] border-[#2A2A3A] text-white focus:border-primary"
                        />
                    </div>

                    {/* Categoria */}
                    <div>
                        <label className="text-sm font-medium text-white/80 mb-2 block">
                            Categoria
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full h-10 px-3 bg-[#26263A] border border-[#2A2A3A] rounded-md text-white focus:outline-none focus:border-primary transition-colors"
                        >
                            <option value="">Selecione uma categoria</option>
                            <option value="trabalho">Trabalho</option>
                            <option value="pessoal">Pessoal</option>
                            <option value="estudo">Estudo</option>
                        </select>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="text-sm font-medium text-white/80 mb-2 block">
                            Tags
                        </label>
                        <Input
                            type="text"
                            placeholder="Separadas por vírgula"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="bg-[#26263A] border-[#2A2A3A] text-white focus:border-primary"
                        />
                    </div>

                    {/* Favorito */}
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                                isFavorite ? 'bg-primary' : 'bg-[#2A2A3A]'
                            }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                    isFavorite ? 'translate-x-6' : 'translate-x-1'
                                }`}
                            />
                        </button>
                        <label className="text-sm font-medium text-white/80">
                            Marcar como favorito
                        </label>
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
                        disabled={!url || isLoading}
                        className="bg-primary hover:bg-[#8B5CF6] text-white transition-all hover:scale-105"
                    >
                        {isLoading ? "Salvando..." : "Salvar Link"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
