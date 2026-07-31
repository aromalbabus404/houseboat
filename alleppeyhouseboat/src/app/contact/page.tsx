"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { getSiteSettings } from "@/lib/cms";
import { SiteSettings } from "@/lib/mockData";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [settingsData, setSettingsData] = useState<SiteSettings | null>(null);

  React.useEffect(() => {
    getSiteSettings().then(setSettingsData);
  }, []);

  const videoSrc = settingsData?.heroVideoFileUrl || settingsData?.heroVideoUrl || "https://cdn.pixabay.com/video/2023/06/15/167389-837151044_large.mp4";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          guests: "2",
          date: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  // Pre-filled site settings fallback for styling
  const settings = {
    phone: "+917356462150",
    email: "booking@alleppyhouseboat.com",
    address: "Punnamada Jetty, Alappuzha, Kerala - 688006",
    officeAddress: "Punnamada Jetty, Alappuzha, Kerala - 688006",
    officePhone: "+917356462150",
    officeEmail: "booking@alleppyhouseboat.com",
    whatsappNumber: "917356462150",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8524419992987!2d76.34758787590886!3d9.521504990561571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0883cf3a19b33d%3A0xe797eb1df0a996df!2sPunnamada%20Lake!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  };

  return (
    <>
      <Header />
      <main className="flex-grow bg-bg-cream pb-20">
        
        {/* 1. HERO BANNER (same as homepage hero style) */}
        <div className="px-4 md:px-8 py-4 bg-bg-cream">
          <div className="relative w-full min-h-[320px] rounded-[2.5rem] overflow-hidden bg-primary-dark shadow-md border border-primary/5 flex flex-col justify-center py-16 text-center">
            {/* Background video */}
            <div className="absolute inset-0 w-full h-full z-0">
              <video
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-20">
              <h1 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4 drop-shadow-sm">
                Let's Plan Your Cruise
              </h1>
              <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl mx-auto drop-shadow-sm leading-relaxed">
                Get in touch for custom houseboat quotes, shikara schedules, or kayaking group bookings.
              </p>
            </div>
          </div>
        </div>

        {/* 2. CONTACT OPTIONS */}
        <div className="max-w-6xl mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
                  Direct Inquiries
                </span >
                <h2 className="font-serif text-3xl text-primary-dark font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="font-sans text-sm md:text-base text-charcoal/70 mb-10 leading-relaxed">
                  Have questions about boarding times, cruise packages, or food customizations? Reach out through any channel or fill in our booking form.
                </p>

                <div className="space-y-6">
                  <a
                    href={`tel:${settings.phone}`}
                    className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow transition group"
                  >
                    <div className="p-3 bg-primary/5 rounded-2xl text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest block mb-0.5">Helpline Support</span>
                      <span className="font-sans text-base font-bold text-primary-dark group-hover:text-primary transition">Call Us</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${settings.whatsappNumber}?text=${encodeURIComponent("Hi! I'm planning an Alleppey cruise.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow transition group"
                  >
                    <div className="p-3 bg-[#25D366]/10 rounded-2xl text-[#25D366] transition group-hover:bg-[#25D366] group-hover:text-white">
                      <svg 
                        className="w-5 h-5 fill-current" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.924C16.379 2.036 13.924 1.02 11.3 1.02c-5.41 0-9.81 4.396-9.813 9.801-.001 1.516.402 2.999 1.168 4.321L1.692 20.3l5.086-1.332L6.647 19.16zM17.186 14.156c-.288-.144-1.7-.84-1.962-.936-.263-.096-.454-.144-.646.144-.19.288-.737.936-.903 1.127-.166.19-.333.216-.62.072-.288-.144-1.215-.448-2.316-1.43-.856-.764-1.434-1.708-1.602-1.995-.168-.288-.018-.444.126-.587.13-.13.288-.336.43-.504.143-.168.19-.288.286-.48.096-.19.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.136-.232-.558-.468-.48-.646-.489-.167-.008-.36-.01-.55-.01-.19 0-.5.072-.762.36-.263.288-1.003.98-1.003 2.392 0 1.412 1.028 2.776 1.171 2.969.144.19 2.023 3.09 4.9 4.332.684.296 1.218.473 1.635.606.688.219 1.314.188 1.81.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
                      </svg>
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest block mb-0.5">Instant Chat</span>
                      <span className="font-sans text-base font-bold text-primary-dark group-hover:text-primary transition">Book via WhatsApp</span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${settings.email}`}
                    className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-primary/5 shadow-sm hover:shadow transition group"
                  >
                    <div className="p-3 bg-primary/5 rounded-2xl text-primary transition group-hover:bg-primary group-hover:text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest block mb-0.5">Email Queries</span>
                      <span className="font-sans text-base font-bold text-primary-dark group-hover:text-primary transition">{settings.email}</span>
                    </div>
                  </a>

                  <div
                    className="flex items-start gap-4 p-4 rounded-3xl bg-white border border-primary/5 shadow-sm"
                  >
                    <div className="p-3 bg-primary/5 rounded-2xl text-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] text-charcoal/50 uppercase tracking-widest block mb-0.5">Boarding Point</span>
                      <span className="font-sans text-sm font-bold text-primary-dark leading-relaxed">{settings.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Panel */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-primary/5 shadow-sm">
                <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
                  Online Inquiry
                </span>
                <h3 className="font-serif text-2xl text-primary-dark font-bold mb-6">
                  Get a Custom Quote
                </h3>

                {status === "success" ? (
                  <div className="text-center py-12 px-6">
                    <div className="inline-flex p-4 bg-primary/5 text-primary rounded-full mb-4">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-primary-dark mb-3">Thank You!</h4>
                    <p className="font-sans text-sm text-charcoal/70 leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received. Our booking officer will reach out to you within the next 2 hours with available boats and pricing.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">No. of Guests</label>
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, "9-15", "15+"].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">Travel Date</label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40 text-charcoal/80"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-primary-dark uppercase tracking-wider">Special Requests / Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-primary/10 focus:outline-none focus:border-primary text-sm bg-bg-cream/40"
                        placeholder="Please specify if you prefer Day Cruise or Night Stay, Deluxe or Luxury package, vegetarian/non-vegetarian meals etc."
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-xs font-bold text-red-600">
                        Something went wrong. Please try again or message us on WhatsApp.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-primary hover:bg-primary-light text-white font-bold text-xs uppercase tracking-wider shadow transition disabled:opacity-50 min-h-[44px] cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Inquiry Details</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer settings={(settingsData || settings) as any} />
      <FloatingWhatsApp />
    </>
  );
}
