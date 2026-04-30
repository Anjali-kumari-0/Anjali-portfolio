export const allProjectDetails = [
  {
    id: "SmartSelect", // always kebab-case (URL friendly)
    title: "Smart Select",

    tagline: "High-performance hybrid select with async + static data support",

    description:
      "A powerful select component supporting both static and server-side data, featuring async search, debouncing, caching, virtualization, and multi-select capabilities for handling large-scale datasets efficiently.",

    implementation: {
      type: "code", // "code" | "image" | "sandbox"
      previewImage: "/images/smart-select.png",
      demoLink: "https://your-demo-link.com",
      codeLink: "https://github.com/your-repo",
    },

    documentation: {
      overview:
        "SmartSelect is designed for enterprise applications where dropdowns need to handle large datasets efficiently.",
      props: [
        { name: "options", type: "Option[]", required: false },
        { name: "loadOptions", type: "(input) => Promise", required: false },
        { name: "isMulti", type: "boolean", required: false },
      ],
      usage: `
<SmartSelect
  loadOptions={fetchUsers}
  isMulti
/>
      `,
    },

    features: [
      "Supports static and async data",
      "Debounced API search",
      "Virtualized list for performance",
      "Keyboard navigation",
      "Multi-select support",
      "Custom rendering (labels, options)",
      "Loading & error states",
    ],

    implementedTechnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
    ],

    complexity: "High", // Low | Medium | High

    category: "Form Components",

    tags: ["select", "async", "performance", "reusable"],

    useCases: [
      "User selection from large datasets",
      "Searchable dropdowns in enterprise apps",
      "Dynamic API-driven forms",
    ],

    challenges: [
      "Handling large datasets without performance issues",
      "Managing async race conditions",
      "Ensuring accessibility and keyboard navigation",
    ],

    improvements: [
      "Add AI-based suggestions",
      "Add grouped options support",
      "Add server-side pagination",
    ],

    status: "Completed", // Completed | In Progress

    createdAt: "2026-04-29",
  },
  {
    id: "feature-highlight",

    // meta: {
    title: "Feature Highlight",
    tagline:
      "Reusable UI component to visually emphasize key features or statuses",
    category: "UI Components",
    complexity: "Low",
    status: "Completed",
    createdAt: "2026-04-30",
    // },

    // overview: {
    description:
      "FeatureHighlight is a lightweight and reusable UI component designed to draw attention to important features, statuses, or actions using icons, labels, and visual emphasis. It enhances user experience by clearly highlighting key elements across the interface.",
    // },

    implementation: {
      type: "code",
      preview1: "src/assets/featureHighlightPreview1.png",
      preview2: "src/assets/featureHighlightPreview2.png",
      demo: "src/assets/featureHighlight.mp4",
      source: "",
    },

    documentation: {
      overview:
        "This component is used to visually highlight important information such as featured items, statuses, achievements, or alerts. It supports icon customization, color variants, and flexible layouts.",

      props: [
        {
          name: "icon",
          type: "ReactNode",
          required: true,
          description: "Icon element to visually represent the feature",
        },
        {
          name: "label",
          type: "string",
          required: true,
          description: "Text label for the feature",
        },
        {
          name: "variant",
          type: "'primary' | 'secondary' | 'success' | 'warning'",
          required: false,
          description: "Controls color and visual style",
        },
        {
          name: "isActive",
          type: "boolean",
          required: false,
          description: "Highlights the component when active",
        },
      ],

      usage: `
<FeaturedHighlight
  size={selectedSize}
  color={selectedColor}
  shape={selectedShape}
  theme={selectedTheme}
  variant={selectedVariant}>
  {label}
</FeaturedHighlight>

/* Want this in your project? Get the complete source code and customization support 
 — contact now. */
    `,
    },

    features: [
      "Reusable and lightweight component",
      "Supports custom icons and labels",
      "Multiple visual variants (color themes)",
      "Active/inactive state handling",
      "Responsive and flexible layout",
      "Easily composable with cards, lists, and sections",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS"],

    tags: ["ui", "highlight", "icon", "badge", "reusable"],

    useCases: [
      "Highlight featured products or items in listings",
      "Mark important statuses (e.g., Active, New, Premium)",
      "Show achievements or badges in user profiles",
      "Highlight key features in landing pages",
      "Display tags in dashboards or analytics panels",
      "Indicate selected or prioritized items",
    ],

    // engineeringNotes: {
      challenges: [
        "Maintaining visual consistency across different UI sections",
        "Ensuring accessibility with proper contrast and labels",
      ],
      improvements: [
        "Add animation for better visual feedback",
        "Support tooltip integration",
        "Add size variants (small, medium, large)",
      ],
    },
  // },
];
