'use client';

import { useState } from 'react';
import { Lineicons } from '@lineiconshq/react-lineicons';
import { Button } from '../../ui/button';
import { ChevronDownBulk, SparkOutlined, Trash3Bulk, Flag1Bulk, Cloud2Bulk } from '@lineiconshq/free-icons';
import { cn } from '@/src/lib/utils';

const CATEGORIES = [
  { id: 1, label: 'Trabalho', color: '#FF6B6B', count: 12 },
  { id: 2, label: 'Pessoal', color: '#4ECDC4', count: 8 },
  { id: 3, label: 'Design', color: '#FFE66D', count: 15 },
  { id: 4, label: 'Desenvolvimento', color: '#95E1D3', count: 23 },
];

const SMART_COLLECTIONS = [
  { id: 'favorites', label: 'Favoritos', icon: Flag1Bulk },
  { id: 'recent', label: 'Recentes', icon: Cloud2Bulk },
  { id: 'trash', label: 'Lixeira', icon: Trash3Bulk },
];

export default function Sidebar() {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const [smartCollectionsOpen, setSmartCollectionsOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('');

  return (
    <aside className="sticky top-24 w-64 h-96 bg-[#1D1B2B] rounded-2xl border border-white/10 flex flex-col overflow-hidden shrink-0">
      <div className="p-4 border-b border-white/10 shrink-0">
        <h2 className="text-lg font-bold text-white">Menu</h2>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar pr-2">
        {/* Categories Section */}
        <div className="px-3 mt-4">
          <Button
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            variant="ghost"
            className="w-full justify-between px-0 text-xs font-semibold text-white/60 uppercase tracking-wider hover:text-white hover:bg-transparent"
          >
            <span>Categorias</span>
            <Lineicons
              icon={ChevronDownBulk}
              className={cn(
                "w-4 h-4 transition-transform duration-200 text-white/60",
                !categoriesOpen && "-rotate-90"
              )}
            />
          </Button>
          {categoriesOpen && (
            <div className="space-y-1 mt-1">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setCurrentPage(`category-${cat.id}`)}
                  variant={currentPage === `category-${cat.id}` ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sm font-normal",
                    currentPage === `category-${cat.id}`
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: cat.color }}
                  />
                  <span className="flex-1 text-left">{cat.label}</span>
                  <span className="text-xs text-white/50">{cat.count}</span>
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Smart Collections */}
        <div className="px-3 mt-4 pb-4">
          <Button
            onClick={() => setSmartCollectionsOpen(!smartCollectionsOpen)}
            variant="ghost"
            className="w-full justify-between px-0 text-xs font-semibold text-white/60 uppercase tracking-wider hover:text-white hover:bg-transparent"
          >
            <span className="flex items-center gap-2">
              <Lineicons icon={SparkOutlined} className="w-3 h-3 text-white/60" />
              Coleções Inteligentes
            </span>
            <Lineicons
              icon={ChevronDownBulk}
              className={cn(
                "w-4 h-4 transition-transform duration-200 text-white/60",
                !smartCollectionsOpen && "-rotate-90"
              )}
            />
          </Button>
          {smartCollectionsOpen && (
            <div className="space-y-1 mt-1">
              {SMART_COLLECTIONS.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-start text-sm font-normal",
                    currentPage === item.id
                      ? "bg-white/10 text-white hover:bg-white/20"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  <Lineicons icon={item.icon} className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}