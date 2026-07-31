import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number",
      type: "string",
      description: "With country code, e.g. +91 73564 62150",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
    }),
    defineField({
      name: "googleRating",
      title: "Google Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "reviewCount",
      title: "Review Count",
      type: "number",
    }),
    defineField({
      name: "yearsRunning",
      title: "Years Running",
      type: "number",
    }),
    defineField({
      name: "heroHeadline",
      title: "Hero Headline",
      type: "string",
    }),
    defineField({
      name: "heroSubheadline",
      title: "Hero Subheadline",
      type: "text",
    }),
    defineField({
      name: "heroVideoUrl",
      title: "Hero Background Video URL (Fallback)",
      type: "string",
      description: "Direct URL to MP4 background video (used if no file is uploaded below)",
    }),
    defineField({
      name: "heroVideoFile",
      title: "Hero Background Video File (Upload)",
      type: "file",
      options: {
        accept: "video/mp4",
      },
      description: "Upload an MP4 video directly from your computer",
    }),
  ],
});
