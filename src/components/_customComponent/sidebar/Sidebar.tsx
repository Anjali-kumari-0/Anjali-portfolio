// Sidebar.jsx
import { useState } from "react";
import SidebarItem from "./SidebarItem";

export default function Sidebar({ config = [], activePath = "", onNavigate, variant="light" }: {
  config: any,
  activePath: any,
  onNavigate: any,
  variant:any,
}) {
  const [collapsed, setCollapsed] = useState(false);

  if (!Array.isArray(config) || config.length === 0) {
    return <div>No menu items</div>; // edge case
  }

  return (
    <aside
      style={{
        width: collapsed ? "60px" : "240px",
        transition: "0.3s",
        borderRight: "1px solid #ddd",
        height: "100vh",
        overflowY: "auto"
      }}
      className={`${variant==="dark"?"bg-gray-900 text-white":""}`}
    >
      <button className="text-gray-400" onClick={() => setCollapsed((prev) => !prev)}>
        {collapsed ? "➡️" : "⬅️ All Menu"}
      </button>

      <nav role="navigation" aria-label="Sidebar">
        {config.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={collapsed}
            activePath={activePath}
            onNavigate={onNavigate}
            variant={variant}
          />
        ))}
      </nav>
    </aside>
  );
}