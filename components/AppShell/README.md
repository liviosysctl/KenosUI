# AppShell

Page layout for apps: fixed sidebar (brand, Nav, footer), 56px header, scrolling main area. Below 768px the sidebar becomes a slide-in drawer with a menu button.

**Consumer provides** `brand`, `sidebar` (Nav), `sidebarFooter` (host status, settings), `header` (Breadcrumb, search, user Menu), children. Width via `--shell-sidebar` (15rem).
