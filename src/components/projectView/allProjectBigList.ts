export const allProjectDetails = [
  {
    id: "SmartSelect", // always kebab-case (URL friendly)
    title: "Smart Select",

    tagline: "High-performance hybrid select with async + static data support",

    description:
      "A powerful select component supporting both static and server-side data, featuring async search, debouncing, caching, virtualization, and multi-select capabilities for handling large-scale datasets efficiently.",

    implementation: {
      type: "code",
      // preview1: "src/assets/singleSelect1.png",
      // preview2: "src/assets/singleSelect1.png",
      demo: "src/assets/singleSelectVideo.mp4",
      source: "",
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
// All props list
// options, fetchOptions, isServerPagination, onValueChange, defaultValue, placeholder, variant, className, disabled,

<Single_select
  defaultValue={stableValue}
  options={options}
  placeholder={placeholder}
  variant="outline"
  key={'select-wrapper-' + id}
  className="w-full"
  onValueChange={(s) => onChange(s)}
/>
/* Want this in your project? Get the complete source code and customization support 
 — contact now. */
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
  {
    id: "sidebar", // always kebab-case (URL friendly)
    title: "Sidebar",

    tagline: "High-performance hybrid select with async + static data support",

    description:
      "A powerful select component supporting both static and server-side data, featuring async search, debouncing, caching, virtualization, and multi-select capabilities for handling large-scale datasets efficiently.",

    implementation: {
      type: "code", // "code" | "image" | "sandbox"
      previewImage: "/images/smart-select.png",
      demo: "src/assets/sidebarvideo.mp4",
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
<Sidebar
  config={sidebarConfig}
  activePath={activePath}
  onNavigate={(path: string) => {
  setActivePath(path);
    }}
  variant={"dark"}
  /* Want this in your project? Get the complete source code and customization support 
 — contact now. */
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
    id: "dateFormatter", // always kebab-case (URL friendly)
    title: "Date Formatter",

    tagline:
      "High-performance hybrid Date Formatter with async + static data support",

    description:
      "A powerful date formatter component supporting both static and server-side data, featuring async formatting, caching, and localization capabilities for handling large-scale datasets efficiently.",

    implementation: {
      type: "code",
      preview1: "src/assets/dateFormatter.png",
      // preview2: "src/assets/singleSelect1.png",
      // demo: "src/assets/singleSelectVideo.mp4",
      source: "",
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
******* Relative / Smart *******
relative            → "1 day ago"
relativeFull        → "yesterday"
smart               → "Yesterday"
todayFriendly       → "Yesterday"
yesterdayWithTime   → "Yesterday at 02:30 PM"
dayOnly             → "Tuesday"
dateWithDayShort    → "Tue, 29 Oct"
friendly            → "29 Oct, 02:30 PM"

******* Standard *******
dd/MM/yyyy          → "29/10/2024"
MM/dd/yyyy          → "10/29/2024"
yyyy/MM/dd          → "2024/10/29"
dd-MM-yyyy          → "29-10-2024"
yyyy-MM-dd          → "2024-10-29"
dd MMM yyyy         → "29 Oct 2024"
MMM dd, yyyy        → "Oct 29, 2024"
dd MMM time12h      → "29 Oct, 02:30 PM"
dd MMM              → "29 Oct"

******* Time *******
time12h             → "02:30 PM"
time24h             → "14:30"
timeWithSeconds     → "14:30:00"
timeWithZone        → "02:30 PM IST"

******* ISO / Technical *******
isoFull             → "2024-10-29T09:00:00.000Z"
timestamp           → "1730197800000"
unix                → "1730197800"
utcString           → "Tue, 29 Oct 2024 09:00:00 GMT"

******* Business *******
monthYear           → "Oct 2024"
quarter             → "Q4 2024"
weekNumber          → "Week 44"
financialYear       → "FY 2024-25"

******* Compact / UI *******
tiny                → "29 Oct"
superTiny           → "29/10"
badge               → "Oct 29"
chatFormat          → "Yesterday"

******* Range ******
dateRange           → "29 Oct – 31 Oct"
dateTimeRange       → "29 Oct, 02:30 PM – 05:30 PM"
relativeRange       → "Last 7 days"

*******  Locale *******
localeAuto          → "10/29/2024, 2:30:00 PM" (depends on system)
indiaFormat         → "29 Oct 2024"
usFormat            → "10/29/2024"


/* Want this in your project? Get the complete source code and customization support 
 — contact now. */
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
    id: "pdfGenerator",
    title: "Custom PDF Generator (JSON to PDF)",

    tagline: "Dynamically generate structured PDFs from JSON data",

    description:
      "A reusable and scalable module that converts structured JSON data into well-formatted PDF documents. Supports dynamic layouts, styling, and efficient rendering for large datasets.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Transforms JSON input into downloadable PDF files with configurable layout and styling.",

      props: [
        { name: "data", type: "Record<string, any>", required: true },
        { name: "fileName", type: "string", required: false },
      ],

      usage: `
<PDFGenerator data={data} fileName="report.pdf" />
      `,
    },

    features: [
      "Dynamic JSON to PDF conversion",
      "Custom layout and styling",
      "Reusable architecture",
      "Handles large data efficiently",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],

    complexity: "High",
    category: "Utility",
    tags: ["pdf", "generator", "json", "export"],

    useCases: [
      "Invoices and reports generation",
      "Exporting dashboard data",
      "Admin panel document downloads",
    ],

    challenges: [
      "Handling large JSON data",
      "Maintaining layout consistency",
      "Performance optimization",
    ],

    improvements: [
      "Template-based PDF generation",
      "Add chart/image support",
      "Server-side rendering",
    ],

    status: "Completed",
    createdAt: "2026-04-29",
  },

  {
    title: "Progress Bar",
    id: "progressBar",

    tagline: "Interactive progress indicator with smooth animation",

    description:
      "A reusable progress bar component to visually represent task completion with customizable styles and smooth transitions.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Displays progress dynamically based on numeric values with animation support.",

      props: [
        { name: "value", type: "number", required: true },
        { name: "max", type: "number", required: false },
      ],

      usage: `<ProgressBar value={70} />`,
    },

    features: [
      "Smooth animation",
      "Customizable styling",
      "Responsive design",
      "Dynamic updates",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS"],

    complexity: "Medium",
    category: "UI",
    tags: ["progress", "ui", "animation"],

    useCases: [
      "File upload progress",
      "Form completion tracking",
      "Task progress visualization",
    ],

    challenges: ["Smooth animation performance", "Edge case handling (0–100%)"],

    improvements: ["Add labels/percentage display", "Support striped variants"],

    status: "Completed",
    createdAt: "2026-04-29",
  },

  {
    title: "Chart",
    id: "chart",

    tagline: "Reusable data visualization component",

    description:
      "A flexible chart component for visualizing data using dynamic datasets. Supports multiple chart types and responsive rendering.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Renders charts dynamically based on provided dataset and configuration.",

      props: [
        { name: "data", type: "object[]", required: true },
        { name: "type", type: "string", required: true },
      ],

      usage: `<Chart data={data} type="bar" />`,
    },

    features: [
      "Supports multiple chart types",
      "Dynamic data binding",
      "Responsive layout",
      "Reusable component design",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS"],

    complexity: "High",
    category: "Data Visualization",
    tags: ["chart", "data", "visualization"],

    useCases: [
      "Analytics dashboards",
      "Reports and insights",
      "Data monitoring tools",
    ],

    challenges: ["Handling dynamic datasets", "Performance with large data"],

    improvements: ["Add animations", "Add export/download charts"],

    status: "Completed",
    createdAt: "2026-04-29",
  },

  {
    title: "Input",
    id: "input",

    tagline: "Reusable and customizable input component",

    description:
      "A flexible input component supporting validation, error handling, and multiple input types for scalable form development.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Handles user input with validation and customizable configurations.",

      props: [
        { name: "value", type: "string", required: true },
        { name: "onChange", type: "function", required: true },
        { name: "type", type: "string", required: false },
      ],

      usage: `<Input value={value} onChange={setValue} />`,
    },

    features: [
      "Validation support",
      "Error handling",
      "Customizable UI",
      "Reusable across forms",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS"],

    complexity: "Medium",
    category: "Form",
    tags: ["input", "form", "validation"],

    useCases: ["User forms", "Authentication fields", "Dynamic form inputs"],

    challenges: [
      "Handling validation efficiently",
      "Managing controlled inputs",
    ],

    improvements: ["Add debounce support", "Add accessibility improvements"],

    status: "Completed",
    createdAt: "2026-04-29",
  },

  {
    title: "Multi Select Dropdown",
    id: "multiSelectDropdown",

    tagline: "Searchable multi-select dropdown with async support",

    description:
      "A powerful multi-select dropdown component supporting search, async data loading, and efficient rendering for large datasets.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Allows selecting multiple options with search and async data support.",

      props: [
        { name: "options", type: "Option[]", required: true },
        { name: "value", type: "Option[]", required: false },
      ],

      usage: `<MultiSelect options={options} />`,
    },

    features: [
      "Multi-select support",
      "Search functionality",
      "Async data handling",
      "High performance",
    ],

    implementedTechnologies: [
      "React",
      "TypeScript",
      "React Query",
      "Tailwind CSS",
    ],

    complexity: "High",
    category: "Form",
    tags: ["dropdown", "multi-select", "search"],

    useCases: ["Tag selection", "Filters", "Dynamic forms"],

    challenges: ["Handling large datasets", "Debounced search optimization"],

    improvements: ["Add virtualization", "Keyboard navigation support"],

    status: "Completed",
    createdAt: "2026-04-29",
  },

  {
    title: "Badge",
    id: "badge",

    tagline: "Lightweight status indicator component",

    description:
      "A small and reusable badge component used for displaying status, labels, or categories with customizable styles.",

    implementation: {
      type: "code",
      message:"Under development. Contact for early access and collaboration opportunities.",
      demo: "",
      source: "",
    },

    documentation: {
      overview:
        "Displays small labels or status indicators with flexible styling.",

      props: [
        { name: "label", type: "string", required: true },
        { name: "variant", type: "string", required: false },
      ],

      usage: `<Badge label="Active" />`,
    },

    features: [
      "Lightweight component",
      "Customizable styles",
      "Reusable design",
    ],

    implementedTechnologies: ["React", "TypeScript", "Tailwind CSS"],

    complexity: "Low",
    category: "UI",
    tags: ["badge", "status", "ui"],

    useCases: ["Status indicators", "Tags and labels", "Notifications"],

    challenges: ["Maintaining consistent styles"],

    improvements: ["Add icons support", "Add color variants"],

    status: "Completed",
    createdAt: "2026-04-29",
  },
];
