import { SiteSettings } from "@/lib/mockData";

interface FooterProps {
  settings?: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="w-full flex flex-col">
      {/* 1. Sunset Video Band */}
      <div className="relative w-full h-[250px] overflow-hidden border-t border-[#FDF6E9]/10">
        <video
          src="/document_6300798460106907823.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Soft overlay to ensure readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="absolute inset-0 flex items-center justify-center text-center p-4 z-20 text-[#FDF6E9]">
          <span 
            className="font-bold text-2xl md:text-3xl tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Alleppy Houseboat
          </span>
        </div>
      </div>

      {/* 2. Bottom Copyright Bar */}
      <div className="w-full bg-[#0F3B3A] py-4 border-t border-[#FDF6E9]/10 flex items-center justify-center text-xs font-sans text-[#FDF6E9]/85">
        <p>&copy; {new Date().getFullYear()} Alleppy Houseboat. All rights reserved.</p>
      </div>
    </footer>
  );
}
