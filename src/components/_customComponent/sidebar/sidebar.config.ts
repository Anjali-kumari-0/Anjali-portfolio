// sidebar.config.js
export const sidebarConfig = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "🏠",
    path: "/dashboard"
  },
  {
    id: "users",
    label: "Users",
    icon: "👥",
    children: [
      {
        id: "all-users",
        label: "All Users",
        path: "/users"
      },
      {
        id: "roles",
        label: "Roles",
        path: "/roles",
        disabled: true
      }
    ]
  },
  {
    id: "settings",
    label: "Settings",
    icon: "⚙️",
    path: "/settings"
  }
];