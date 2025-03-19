import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

export default function CreditsDisplay() {
  const isMobile = useIsMobile();
  
  return (
    <div className={cn(
      "flex items-center bg-white/5 rounded-md border border-white/10",
      isMobile ? "px-2 py-1" : "px-3 py-1.5"
    )}>
      <CreditCard size={isMobile ? 14 : 16} className="text-neon-green mr-1.5" />
      <span className={cn(
        "font-semibold",
        isMobile ? "text-xs mr-1.5" : "text-sm mr-3"
      )}>Credits: 125</span>
      <Button variant="ghost" size="sm" className={cn(
        "hover:bg-white/10",
        isMobile ? "p-0.5 h-auto" : "p-1 h-auto"
      )}>
        <Plus size={isMobile ? 12 : 14} />
      </Button>
    </div>
  );
}
