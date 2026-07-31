import { client, projectId } from "@/sanity/client";
import {
  mockSiteSettings,
  mockPackages,
  mockTestimonials,
  mockGallery,
  mockFAQs,
  SiteSettings,
  Package,
  Testimonial,
  GalleryImage,
  FAQ
} from "./mockData";

// Helper to check if Sanity is configured
const isSanityConfigured = (): boolean => {
  return !!projectId && !!client;
};

// Site settings query
export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSanityConfigured()) {
    return mockSiteSettings;
  }
  try {
    const query = `*[_type == "siteSettings"][0]{
      whatsappNumber,
      phoneNumber,
      email,
      address,
      googleRating,
      reviewCount,
      yearsRunning,
      heroHeadline,
      heroSubheadline,
      heroVideoUrl,
      "heroVideoFileUrl": heroVideoFile.asset->url
    }`;
    const data = await client!.fetch(query);
    return data || mockSiteSettings;
  } catch (error) {
    console.warn("Failed to fetch site settings from Sanity, using fallback mock data.", error);
    return mockSiteSettings;
  }
}

// Get all packages
export async function getPackages(): Promise<Package[]> {
  if (!isSanityConfigured()) {
    return mockPackages;
  }
  try {
    const query = `*[_type == "package"] | order(price asc){
      title,
      "slug": slug.current,
      category,
      price,
      rating,
      shortDescription,
      "description": pt::text(description),
      "images": images[].asset->url,
      inclusions
    }`;
    const data = await client!.fetch(query);
    if (!data || data.length === 0) return [];
    
    // Map data to match the Package interface
    return data.map((pkg: any) => ({
      ...pkg,
      images: pkg.images && pkg.images.length > 0 ? pkg.images : [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200"
      ],
      inclusions: pkg.inclusions || []
    }));
  } catch (error) {
    console.warn("Failed to fetch packages from Sanity, using fallback mock data.", error);
    return mockPackages;
  }
}

// Get a single package by slug
export async function getPackage(slug: string): Promise<Package | null> {
  if (!isSanityConfigured()) {
    const pkg = mockPackages.find((p) => p.slug === slug);
    return pkg || null;
  }
  try {
    const query = `*[_type == "package" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      category,
      price,
      rating,
      shortDescription,
      "description": pt::text(description),
      "images": images[].asset->url,
      inclusions
    }`;
    const data = await client!.fetch(query, { slug });
    if (!data) {
      const fallbackPkg = mockPackages.find((p) => p.slug === slug);
      return fallbackPkg || null;
    }
    return {
      ...data,
      images: data.images && data.images.length > 0 ? data.images : [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200"
      ],
      inclusions: data.inclusions || []
    };
  } catch (error) {
    console.warn(`Failed to fetch package ${slug} from Sanity, using fallback.`, error);
    const fallbackPkg = mockPackages.find((p) => p.slug === slug);
    return fallbackPkg || null;
  }
}

// Get testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSanityConfigured()) {
    return mockTestimonials;
  }
  try {
    const query = `*[_type == "testimonial"] | order(_createdAt desc){
      name,
      quote,
      rating,
      date,
      avatarSeed
    }`;
    const data = await client!.fetch(query);
    return data || [];
  } catch (error) {
    console.warn("Failed to fetch testimonials, using fallback.", error);
    return [];
  }
}

// Get gallery images
export async function getGalleryImages(): Promise<GalleryImage[]> {
  if (!isSanityConfigured()) {
    return mockGallery;
  }
  try {
    const query = `*[_type == "galleryImage"]{
      "imageUrl": image.asset->url,
      caption,
      category
    }`;
    const data = await client!.fetch(query);
    if (!data || data.length === 0) return [];
    return data.map((item: any) => ({
      imageUrl: item.imageUrl || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600",
      caption: item.caption || "",
      category: item.category || "houseboat"
    }));
  } catch (error) {
    console.warn("Failed to fetch gallery, using fallback.", error);
    return [];
  }
}

// Get FAQs
export async function getFAQs(): Promise<FAQ[]> {
  if (!isSanityConfigured()) {
    return mockFAQs;
  }
  try {
    const query = `*[_type == "faq"] | order(order asc){
      question,
      answer,
      order
    }`;
    const data = await client!.fetch(query);
    return data || [];
  } catch (error) {
    console.warn("Failed to fetch FAQs, using fallback.", error);
    return [];
  }
}
