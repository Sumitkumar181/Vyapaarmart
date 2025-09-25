import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/image/Logo/logo.png";
import {
  Search,
  Bell,
  Sun,
  Moon,
  ChevronDown,
  User,
  Menu as MenuIcon,
  Home,
  FileText,
  Users,
  Settings,
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Folder,
  Archive,
  LogOut,
} from "lucide-react";


const menu = [
  { id: "home", title: "Home", icon: Home, href: "#home" },
  { id: "reports", title: "Reports", icon: BarChart2, href: "#reports" },
  
  { id: "team", title: "Team", icon: Users, href: "#team" },
  { id: "files", title: "Files", icon: FileText, href: "#files" },
  { id: "archive", title: "Archive", icon: Archive, href: "#archive" },
];



function Sidebar({
  collapsed,
  
  mobileOpen,
  setMobileOpen,
}) {

  const [openGroups, setOpenGroups] = useState(() => {
    try {
      const saved = localStorage.getItem("dashboard:sidebarOpenGroups");
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("dashboard:sidebarOpenGroups", JSON.stringify(openGroups));
    } catch (e) { }
  }, [openGroups]);

  function toggleGroup(id) {
    setOpenGroups((s) => ({ ...s, [id]: !s[id] }));
  }


  const content = (
    <div className="h-full flex flex-col">
    
      <div className="relative flex items-center justify-center px-4 py-3 border-b">
        {!collapsed && <img src={logo} alt="logo" className="h-14" />}
      </div>

      <nav
        className="flex-1 overflow-y-auto px-4 py-4"
        aria-label="Primary Navigation"
      >
        <ul className="space-y-2">
          {menu.map((item) => (
            <li key={item.id}>
              {item.children ? (
                <div className="px-2">
                  <button
                    onClick={() => toggleGroup(item.id)}
                    className={`w-full flex items-center gap-3 text-sm rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${collapsed ? "justify-center" : "justify-start"
                      }`}
                    aria-expanded={!!openGroups[item.id]}
                    aria-controls={`group-${item.id}`}
                  >
                    <item.icon className="w-5 h-5" />
                    {!collapsed && (
                      <span className="flex-1 text-left ">{item.title}</span>
                    )}
                    {!collapsed && (
                      <svg
                        className={`w-3 h-3 transition-transform ${openGroups[item.id] ? "rotate-90" : ""
                          }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path d="M6 6 L14 10 L6 14 z" />
                      </svg>
                    )}
                  </button>

                  <AnimatePresence>
                    {openGroups[item.id] && (
                      <motion.ul
                        id={`group-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.14 }}
                        className={`mt-1 overflow-hidden ${collapsed ? "hidden" : ""
                          }`}
                      >
                        {item.children?.map((sub) => (
                          <li key={sub.id}>
                            <a
                              href={sub.href}
                              className="block text-sm px-6 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
                              onClick={() => setMobileOpen(false)} 
                            >
                              {sub.title}
                            </a>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`flex items-center gap-3 text-sm rounded-md px-2 py-2 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${collapsed ? "justify-center" : "justify-start"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {!collapsed && <span className="flex-1">{item.title}</span>}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-3 py-3 border-t border-slate-100 dark:border-slate-700">
        <div
          className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""
            }`}
        >
          <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            A
          </div>
          {!collapsed && (
            <div className="flex-1">
              <div className="text-sm font-medium">Aman Kumar</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                aman@example.com
              </div>
            </div>
          )}
          {!collapsed && (
            <button className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <LogOut className="w-4 h-4 text-rose-600" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>

      <aside
        className={`hidden md:flex md:flex-col md:static md:inset-y-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-10 transition-all duration-150 ${collapsed ? "w-16" : "w-64"
          }`}
        aria-label="Sidebar"
      >
        {content}
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-72 h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800"
            >
              <div className="h-full">{content}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


export function DashboardTopbar({
  onSearch = () => { },
  user = { name: "User", email: "user@example.com", avatar: null },
  onToggleSidebar = () => { },
  notificationsCount = 0,
  setMobileOpen = () => { },
}) {
  const [query, setQuery] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));
  const userMenuRef = useRef(null);


  useEffect(() => {
    function handle(e) {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  function handleSearchSubmit(e) {
    e.preventDefault();
    onSearch(query.trim());
  }

  function clearSearch() {
    setQuery("");
    onSearch("");
  }

  function toggleTheme() {
    setIsDark((d) => !d);
    if (!isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }

  return (
    <header className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onToggleSidebar}
              aria-label="Toggle sidebar"
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:hidden"
            >
              <MenuIcon className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </button>

            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-slate-900 dark:text-white truncate">Dashboard</span>
              <span className="hidden sm:inline-block text-sm text-slate-500 dark:text-slate-400">• Analytics</span>
            </div>
          </div>


          <form onSubmit={handleSearchSubmit} className="flex-1 max-w-lg" role="search" aria-label="Search">
            <div className="relative">
              <label htmlFor="topbar-search" className="sr-only">Search</label>
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <Search className="w-4 h-4 text-slate-400" />
              </div>

              <input
                id="topbar-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="block w-full pl-10 pr-10 py-2 border border-slate-200 dark:border-slate-700 rounded-md bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Search product"
                aria-label="Search dashboard"
              />


              {query && (
                <button type="button" onClick={clearSearch} aria-label="Clear search" className="absolute inset-y-0 right-8 pr-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              )}

              <button type="submit" className="absolute inset-y-0 right-0 pr-2 flex items-center" aria-label="Submit search">
                <span className="sr-only">Search</span>
              </button>
            </div>
          </form>


          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-label={`Notifications (${notificationsCount})`}>
              <Bell className="w-5 h-5 text-slate-700 dark:text-slate-200" />
              {notificationsCount > 0 && <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium leading-none text-white bg-rose-600 rounded-full">{notificationsCount}</span>}
            </button>

            <button onClick={() => { if (document.documentElement.classList.contains('dark')) { document.documentElement.classList.remove('dark'); } else { document.documentElement.classList.add('dark'); } }} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              {isDark ? <Sun className="w-5 h-5 text-slate-200" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            <div className="relative" ref={userMenuRef}>
              <button onClick={() => setIsUserMenuOpen((s) => !s)} className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-haspopup="true" aria-expanded={isUserMenuOpen}>
                <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-sm font-medium text-slate-700 dark:text-slate-200">
                  {user.avatar ? <img src={user.avatar} alt="avatar" className="h-8 w-8 rounded-full object-cover" /> : <User className="w-5 h-5" />}
                </div>
                <div className="hidden sm:flex sm:flex-col sm:items-start">
                  <span className="text-sm font-medium text-slate-900 dark:text-white truncate">{user.name}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 truncate">{user.email}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.12 }} className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md shadow-lg z-30 overflow-hidden">
                    <div className="py-1">
                      <a href="#profile" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Profile</a>
                      <a href="#settings" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Settings</a>
                      <div className="border-t border-slate-100 dark:border-slate-700 my-1" />
                      <button className="w-full text-left px-4 py-2 text-sm text-rose-600 hover:bg-slate-50 dark:hover:bg-slate-700">Sign out</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const s = localStorage.getItem("dashboard:sidebarCollapsed");
      return s ? JSON.parse(s) : false;
    } catch (e) {
      return false;
    }
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("dashboard:sidebarCollapsed", JSON.stringify(collapsed));
    } catch (e) { }
  }, [collapsed]);


  useEffect(() => {
    function onKey(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        setCollapsed((c) => !c);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:dark:bg-slate-800 focus:text-indigo-600 px-3 py-2 rounded-md z-50">Skip to content</a>

      <div className="flex">
        <Sidebar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((c) => !c)}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <DashboardTopbar
            onSearch={(q) => console.log("search:", q)}
            user={{ name: "Aman Kumar", email: "aman@example.com", avatar: null }}
            onToggleSidebar={() => setMobileOpen((s) => !s)}
            notificationsCount={3}
            setMobileOpen={setMobileOpen}
          />

          <main id="main-content" className="flex-1 overflow-auto p-6">

            <div className="max-w-[1400px] mx-auto">
              <h1 className="text-2xl font-semibold mb-4">Welcome back, Aman 👋</h1>

              {children || (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-4 shadow-sm">Widget 1</div>
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-4 shadow-sm">Widget 2</div>
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-4 shadow-sm">Widget 3</div>
                  <div className="rounded-lg bg-white dark:bg-slate-800 p-4 shadow-sm">Widget 4</div>
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}


