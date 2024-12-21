import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user } = useAuth();

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <CheckCircle2 className="h-8 w-8 text-blue-300" />
            <span className="text-xl font-bold">DashingOut</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/tasks" className="text-blue-100 hover:text-white transition-colors">Find Tasks</Link>
            <Link to="/become-tasker" className="text-blue-100 hover:text-white transition-colors">Become a Tasker</Link>
            {user ? (
              <>
                <Link to="/dashboard" className="text-blue-100 hover:text-white transition-colors">Dashboard</Link>
                <Link to="/profile" className="text-blue-100 hover:text-white transition-colors">Profile</Link>
              </>
            ) : (
              <>
                <Link to="/login" className="text-blue-100 hover:text-white transition-colors">Login</Link>
                <Link
                  to="/register"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/tasks" className="text-blue-100 hover:text-white transition-colors">Find Tasks</Link>
              <Link to="/become-tasker" className="text-blue-100 hover:text-white transition-colors">Become a Tasker</Link>
              {user ? (
                <>
                  <Link to="/dashboard" className="text-blue-100 hover:text-white transition-colors">Dashboard</Link>
                  <Link to="/profile" className="text-blue-100 hover:text-white transition-colors">Profile</Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-blue-100 hover:text-white transition-colors">Login</Link>
                  <Link
                    to="/register"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-center transition-colors"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}