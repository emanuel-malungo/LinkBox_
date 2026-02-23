'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {Input} from "@/src/components/ui/input";
import icon2 from "@/src/assets/images/icon2.png";
import { Button } from "@/src/components/ui/button";
import { Lineicons } from '@lineiconshq/react-lineicons';
import NewLinkModal from "@/src/components/modals/NewLinkModal";
import NewCategoryModal from "@/src/components/modals/NewCategoryModal";
import { Search1Bulk, Home2Bulk, Link2AngularRightBulk, Folder1Bulk } from '@lineiconshq/free-icons';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNewLinkModalOpen, setIsNewLinkModalOpen] = useState(false);
    const [isNewCategoryModalOpen, setIsNewCategoryModalOpen] = useState(false);

    const avatarUrl = `https://avatars.githubusercontent.com/u/147757794?s=400&u=2b5f19c75d05e46e21b822bcf87059a961fbf2c7&v=4`;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full py-4 bg-[#1D1B2B] border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between px-4">
                <div className="flex items-center gap-8" >
                    <div className="flex items-center space-x-2">
                        <Image src={icon2} alt="LinkBox" className="w-8 h-8" />
                        <span className="text-xl font-bold text-white">LinkBox</span>
                    </div>
                    <div className="relative flex items-center">
                        <Lineicons icon={Search1Bulk} className="w-5 h-5 text-white/60 absolute left-3 pointer-events-none" />
                        <Input
                            type="text"
                            placeholder="Pesquisar..."
                            className="pl-10 w-full max-w-xs bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/40 h-8 focus:outline-none focus:border-white/20 transition-colors"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8" >
                    <ul className="flex items-center gap-8" >
                        <li>
                            <Link href="/user/dashboard" className="flex items-center gap-2 text-white hover:text-primary transition-colors">
                                <Lineicons icon={Home2Bulk} className="w-5 h-5" />
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <button 
                                onClick={() => setIsNewLinkModalOpen(true)}
                                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                            >
                                <Lineicons icon={Link2AngularRightBulk} className="w-5 h-5" />
                                Links
                            </button>
                        </li>
                        <li>
                            <button 
                                onClick={() => setIsNewCategoryModalOpen(true)}
                                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                            >
                                <Lineicons icon={Folder1Bulk} className="w-5 h-5" />
                                Categorias
                            </button>
                        </li>
                    </ul>
                    <div className="relative">
                        <Button 
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="bg-primary border-2 border-white w-10 h-10 p-0 overflow-hidden rounded-full"
                        >
                            <Image src={avatarUrl} alt="User Avatar" width={40} height={40} className="w-full h-full object-cover" />
                        </Button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-[#2A2839] border border-white/10 rounded-lg shadow-lg z-50">
                                <Link href="/user/collections" className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-white/10 transition-colors rounded-t-lg">
                                    <Lineicons icon={Folder1Bulk} className="w-5 h-5" />
                                    Coleções
                                </Link>
                                <Link href="/user/analytics" className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-white/10 transition-colors border-t border-white/10">
                                    <Lineicons icon={Folder1Bulk} className="w-5 h-5" />
                                    Analytics
                                </Link>
                                <Link href="/user/settings" className="flex items-center gap-2 w-full px-4 py-3 text-white hover:bg-white/10 transition-colors border-t border-white/10 rounded-b-lg">
                                    <Lineicons icon={Folder1Bulk} className="w-5 h-5" />
                                    Configurações
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Modais */}
            <NewLinkModal 
                isOpen={isNewLinkModalOpen}
                onClose={() => setIsNewLinkModalOpen(false)}
            />
            <NewCategoryModal 
                isOpen={isNewCategoryModalOpen}
                onClose={() => setIsNewCategoryModalOpen(false)}
            />
        </header>
    )
}
