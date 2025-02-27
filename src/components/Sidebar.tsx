import { useState } from "react"
import { Home, Users, Settings, Menu, X, LayoutDashboard, FileText, Bell } from "lucide-react"
import { Link } from "react-router"

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Strona główna",
    icon: Home,
    href: "/",
  },
  {
    title: "Użytkownicy",
    icon: Users,
    href: "/",
  },
  {
    title: "Dokumenty",
    icon: FileText,
    href: "/",
  },
  {
    title: "Powiadomienia",
    icon: Bell,
    href: "/",
  },
  {
    title: "Ustawienia",
    icon: Settings,
    href: "/",
  },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Przycisk mobilny */}
      <button className="fixed top-4 left-4 z-50 block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Overlay na mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen w-64
          bg-gray-900 text-gray-100
          transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-around border-b border-gray-800">
         <img src="src\images\logo_diet_app.jpg" className="w-12 h-12 rounded-full" alt="" />
          <h2 className="text-xl font-bold">Diet Tracker</h2>
        </div>

        {/* Menu nawigacyjne */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  to={item.href}
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-gray-200 hover:bg-gray-800 hover:text-white transition-colors"
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center gap-4 px-4">
            <div className="h-10 w-10 rounded-full overflow-hidden" >
               <img src="src\images\profile_image.jpg" className="w-full h-full object-cover"/>
            </div>
            <div>
              <p className="text-sm font-medium">Maciej Szymański</p>
              <p className="text-xs text-gray-400">patrykw595@o2.pl</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
