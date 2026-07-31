"use client";

export default function FloatingWhatsApp() {
  const prefilledText = encodeURIComponent("Hi! I want to book a houseboat in Alleppey.");
  
  return (
    <a
      href={`https://wa.me/917356462150?text=${prefilledText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-500/50"
      aria-label="Contact us on WhatsApp"
    >
      {/* Dynamic Pulsing Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 scale-125 animate-pulse-slow"></span>
      
      {/* Official WhatsApp Logo SVG */}
      <svg 
        className="w-7 h-7 fill-current relative z-10" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.924C16.379 2.036 13.924 1.02 11.3 1.02c-5.41 0-9.81 4.396-9.813 9.801-.001 1.516.402 2.999 1.168 4.321L1.692 20.3l5.086-1.332L6.647 19.16zM17.186 14.156c-.288-.144-1.7-.84-1.962-.936-.263-.096-.454-.144-.646.144-.19.288-.737.936-.903 1.127-.166.19-.333.216-.62.072-.288-.144-1.215-.448-2.316-1.43-.856-.764-1.434-1.708-1.602-1.995-.168-.288-.018-.444.126-.587.13-.13.288-.336.43-.504.143-.168.19-.288.286-.48.096-.19.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.136-.232-.558-.468-.48-.646-.489-.167-.008-.36-.01-.55-.01-.19 0-.5.072-.762.36-.263.288-1.003.98-1.003 2.392 0 1.412 1.028 2.776 1.171 2.969.144.19 2.023 3.09 4.9 4.332.684.296 1.218.473 1.635.606.688.219 1.314.188 1.81.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
      </svg>
    </a>
  );
}
