// SidebarItem.jsx
import { useState } from "react";

export default function SidebarItem({
  item,
  collapsed,
  activePath,
  onNavigate,
  variant
}:{
  item:any,
  collapsed:any,
  activePath:any,
  onNavigate:any,
  variant:any

}) {
  const [open, setOpen] = useState(false);

  if (!item || !item.label) return null; // edge case

  const isActive = item.path === activePath;

  const handleClick = () => {
    if (item.disabled) return;

    if (item.children) {
      setOpen((prev) => !prev);
    } else if (item.path) {
      onNavigate?.(item.path);
    }
  };

  return (
    <div>
      <div
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
        style={{
          padding: "10px",
          cursor: item.disabled ? "not-allowed" : "pointer",
          background: isActive ?(variant==='light'?"#eee":"gray") : "transparent",
          opacity: item.disabled ? 0.5 : 1
        }}
      >
        <span>{item.icon}</span>
        {!collapsed && <span style={{ marginLeft: 8 }}>{item.label}</span>}
      </div>

      {/* children */}
      {item.children && open && !collapsed && (
        <div style={{ paddingLeft: 20 }}>
          {item.children.map((child:any) => (
            <SidebarItem
              key={child.id}
              item={child}
              collapsed={collapsed}
              activePath={activePath}
              onNavigate={onNavigate}
              variant={variant}
            />
          ))}
        </div>
      )}
    </div>
  );
}