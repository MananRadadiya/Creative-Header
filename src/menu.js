const menuData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Courses",
    mega: true,
    children: [
      {
        heading: "Development Courses",
        links: [
          { label: "Flutter Development", url: "#" },
          { label: "Android Development", url: "#" },
          { label: "Full Stack Development", url: "#" },
        ],
      },
      {
        heading: "Design Courses",
        links: [
          { label: "UI / UX Design", url: "#" },
          { label: "Graphic Design", url: "#" },
          { label: "Animation", url: "#" },
        ],
      },
      {
        heading: "Programming IT",
        links: [
          { label: "C Programming", url: "#" },
          { label: "Java", url: "#" },
          { label: "Python", url: "#" },
        ],
      },
    ],
  },
  {
    title: "Activities",
    children: [
      { label: "Gallery", url: "#" },
      { label: "Events", url: "#" },
    ],
  },
  {
    title: "Blog",
    link: "#",
  },
  {
    title: "Know Us",
    children: [
      { label: "About Us", url: "#" },
      { label: "Success Stories", url: "#" },
    ],
  },
  {
    title: "Get in Touch",
    link: "#",
  },
];

export default menuData;
