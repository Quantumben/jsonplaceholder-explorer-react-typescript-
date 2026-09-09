import { NavLink } from "react-router";

function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          JSON Explorer
        </NavLink>

        <div className="flex gap-6">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/posts" className={linkStyle}>
            Posts
          </NavLink>

          <NavLink to="/users" className={linkStyle}>
            Users
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;