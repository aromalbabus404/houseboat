import { defineField, defineType } from "sanity";

export const packageSchema = defineType({
  name: "package",
  title: "Boats & Activities",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Houseboat - Private", value: "houseboat-private" },
          { title: "Houseboat - Luxury", value: "houseboat-luxury" },
          { title: "Houseboat - Premium", value: "houseboat-premium" },
          { title: "Houseboat - Deluxe", value: "houseboat-deluxe" },
          { title: "Houseboat - Sharing", value: "houseboat-sharing" },
          { title: "Shikara Ride", value: "shikara" },
          { title: "Kayaking", value: "kayaking" },
          { title: "Speedboat", value: "speedboat" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Starting Price (in INR)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      description: "Appears on listing cards",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "description",
      title: "Full Description (Rich Text)",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Images Gallery",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "inclusions",
      title: "Inclusions",
      type: "array",
      of: [{ type: "string" }],
      description: "List of inclusions (e.g. Welcome Drink, Lunch, Cruise Time)",
    }),
    defineField({
      name: "dayCruisePrice",
      title: "Custom Day Cruise Price (Optional)",
      type: "number",
      description: "Custom price when Day Cruise option is selected. Defaults to base price or percentage calculation.",
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "overnightPrice",
      title: "Custom Overnight Stay Price (Optional)",
      type: "number",
      description: "Custom price when Overnight stay option is selected. Defaults to base price or flat extra fee.",
      validation: (Rule) => Rule.min(0),
    }),
  ],
});
