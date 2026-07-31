import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Alleppy Houseboat Studio",

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder-id",
  dataset: process.env.SANITY_STUDIO_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Website Content Manager")
          .items([
            // 1. Site Settings (single document)
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            
            // 2. Houseboats folder
            S.listItem()
              .title("Houseboats")
              .child(
                S.documentList()
                  .title("Houseboat Fleet")
                  .filter('_type == "package" && category match "houseboat-*"')
                  .schemaType("package")
              ),

            // 3. Activities folder
            S.listItem()
              .title("Activities")
              .child(
                S.documentList()
                  .title("Daytime Activities")
                  .filter('_type == "package" && !(category match "houseboat-*")')
                  .schemaType("package")
              ),
            
            S.divider(),
            
            // 4. Testimonials
            S.listItem()
              .title("Google Reviews / Testimonials")
              .child(S.documentTypeList("testimonial")),
            
            // 5. Gallery
            S.listItem()
              .title("Gallery Photos")
              .child(S.documentTypeList("galleryImage")),
            
            // 6. FAQs
            S.listItem()
              .title("FAQ Questions")
              .child(S.documentTypeList("faq")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
