import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiteSettings } from "@/lib/mockData";

interface LocationSectionProps {
  settings: SiteSettings;
}

export default function LocationSection({ settings }: LocationSectionProps) {
  return (
    <section className="py-[50px] bg-bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Address and Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-sans text-xs font-bold tracking-widest text-accent uppercase block mb-3">
              Boarding Jetty
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-dark font-bold leading-tight mb-6">
              Our Location in Alleppey
            </h2>
            <p className="font-sans text-sm md:text-base text-charcoal/70 mb-8 leading-relaxed">
              We boarding from near Finishing Point jetty, right on Punnamada Lake in Alappuzha (Alleppey), Kerala. Conveniently reachable by car, bus, or taxi.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-primary/5 text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-dark mb-1">Office & Boarding Jetty</h4>
                  <p className="font-sans text-sm text-charcoal/75 leading-relaxed">{settings.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-primary/5 text-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-dark mb-1">Operational Hours</h4>
                  <p className="font-sans text-sm text-charcoal/75 leading-relaxed">Daily: 8:00 AM - 10:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-white shadow-sm border border-primary/5 text-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary-dark mb-1">Direct Booking Hotlines</h4>
                  <p className="font-sans text-sm text-charcoal/75">
                    <a href="tel:+917356462150" className="hover:text-primary transition font-semibold">
                      +91 73564 62150
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="lg:col-span-7 h-[400px] lg:h-auto min-h-[350px] rounded-3xl overflow-hidden shadow-sm border border-primary/5 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!11m18!1m12!1m3!1d3936.126442657375!2d76.34707187478546!3d9.501170790581458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08848c4cfb4885%3A0xe5a3c8e9cf97b102!2sPunnamada%20Finishing%20Point%2C%20Alappuzha!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Alleppey Finishing Point Map"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
