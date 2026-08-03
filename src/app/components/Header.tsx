import { useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, ChevronDown } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { navItems } from './nav-items'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from './ui/sheet'
import logo from '../../assets/logo/ffbetania-logo.svg'

export function Header() {
  const { pathname } = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <Link to="/" className="flex items-center gap-2 whitespace-nowrap">
          <img src={logo} alt="FFBetania" className="h-8 w-auto" />
          <span className="text-lg font-bold text-[var(--deep-blue)]">FFBetania</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <DropdownMenu key={item.to}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive(item.to) ? 'text-[var(--warm-orange)]' : 'text-[var(--deep-blue)] hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <Link to={item.to}>{item.label} (panoramica)</Link>
                  </DropdownMenuItem>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.to} asChild>
                      <Link to={child.to}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  isActive(item.to) ? 'text-[var(--warm-orange)]' : 'text-[var(--deep-blue)] hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/sostienici/dona-ora"
            className="whitespace-nowrap px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Dona ora
          </Link>

          <LanguageSwitcher />

          <Sheet
            open={mobileOpen}
            onOpenChange={(open) => {
              setMobileOpen(open)
              if (!open) setOpenMobileSubmenu(null)
            }}
          >
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Apri il menu"
                className="lg:hidden p-2 rounded-lg text-[var(--deep-blue)] hover:bg-gray-50"
              >
                <Menu className="w-5 h-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 overflow-y-auto">
              <SheetHeader className="border-b border-gray-100">
                <SheetTitle className="text-[var(--deep-blue)]">FFBetania</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-4 gap-1">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.to} className="mb-1">
                      <button
                        type="button"
                        onClick={() => setOpenMobileSubmenu((prev) => (prev === item.to ? null : item.to))}
                        aria-expanded={openMobileSubmenu === item.to}
                        className={`w-full flex items-center justify-between px-2 py-2 text-sm font-semibold rounded-lg hover:bg-gray-50 ${
                          isActive(item.to) ? 'text-[var(--warm-orange)]' : 'text-[var(--deep-blue)]'
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${openMobileSubmenu === item.to ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {openMobileSubmenu === item.to && (
                        <div className="ml-3 border-l border-gray-100 pl-3 mt-1">
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-[var(--deep-blue)]"
                          >
                            {item.label} (panoramica)
                          </Link>
                          {item.children.map((child) => (
                            <Link
                              key={child.to}
                              to={child.to}
                              onClick={() => setMobileOpen(false)}
                              className="block px-2 py-1.5 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-[var(--deep-blue)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-2 py-2 text-sm font-semibold rounded-lg hover:bg-gray-50 mb-1 ${
                        isActive(item.to) ? 'text-[var(--warm-orange)]' : 'text-[var(--deep-blue)]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ),
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
