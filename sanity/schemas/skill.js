export default {
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Title of Skill",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "progress",
      title: "Progress",
      description: "Enter proficiency",
      type: "number",
      validation: (Rule) => Rule.min(0).max(100),
    },
  ],
};
