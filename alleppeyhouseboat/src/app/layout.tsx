import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alleppy Houseboat | Premium Kerala Backwater Bookings",
  description: "Experience Kerala's Venice with premium houseboat cruises, shikara rides, kayaking, and speedboats in Alappuzha. Verified boats, transparent pricing, no hidden charges.",
  keywords: ["Alleppey Houseboat", "Alappuzha Houseboat Booking", "Kerala Backwaters Tour", "Shikara Ride Alleppey", "Kayaking Alappuzha", "Kerala Tourism"],
  openGraph: {
    title: "Alleppy Houseboat | Premium Kerala Backwater Bookings",
    description: "Experience Kerala's Venice with premium houseboat cruises, shikara rides, kayaking, and speedboats in Alappuzha.",
    url: "https://alleppyhouseboat.com",
    siteName: "Alleppy Houseboat",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Alleppey Houseboat Experience",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alleppy Houseboat | Premium Kerala Backwater Bookings",
    description: "Premium backwater experiences, verified boats, and no hidden charges in Alleppey, Kerala.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
