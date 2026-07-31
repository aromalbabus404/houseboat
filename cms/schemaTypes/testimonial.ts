import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: "date",
      title: "Date / Relative Time",
      type: "string",
      description: "e.g. '2 weeks ago', 'a month ago'",
    }),
    defineField({
      name: "avatarSeed",
      title: "Avatar Seed",
      type: "string",
      description: "Seed name for Dicebear avatar generators (or placeholder image identifier)",
    }),
  ],
});
