import { Link, useLocation } from 'react-router-dom'
import { PenTool } from 'lucide-react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

import { Avatar } from "./BlogCard"
import {jwtDecode,JwtPayload} from "jwt-decode";
import { useEffect,useState } from "react";
interface CustomJwtPayload extends JwtPayload {
    id?: number;
    name?: string;
  }

const Header = ()=> {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth data
    localStorage.removeItem("token"); // or sessionStorage
    // Redirect to login
    navigate('/signin');
  };

  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path: string) => location.pathname === path

   const [user, setUser] = useState<CustomJwtPayload | null>(null);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (token) {
        try {
          const decoded: CustomJwtPayload = jwtDecode<CustomJwtPayload>(token);
          // setUser(decoded);
          setUser(decoded);

        } catch (error) {
          console.error("Invalid token", error);
        }
      }
    }, []); 


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to={user?"/blogs":"/"} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <PenTool className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">BlogCraft</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className='mt-2'>
                <Link to={`/publish`}>
                    <button type="button" className="mr-4 text-white bg-gray-700  hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                        Write
                    </button>
                </Link>

            <div className="relative inline-block text-left">
                <Menu>
                    <MenuButton className="focus:outline-none">
                      <Avatar size={"big"} name={user?.name || "user" }/>
                    </MenuButton>
                    <MenuItems className="absolute right-0 mt-2 w-32 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-50">
                      <MenuItem>
                          {({ focus }) => (
                          <button
                              onClick={handleLogout}
                              className={`${
                              focus ? 'bg-gray-100' : ''
                              } w-full px-4 py-2 text-left text-sm text-gray-700`}
                          >
                              Logout
                          </button>
                          )}
                      </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
                
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header