function Header() {
  return (
    <header className="flex items-center justify-between mb-8 pb-2 border-b border-indigo-100">
      <div className="flex items-center gap-2">
        <i className="fa-solid fa-graduation-cap text-3xl text-indigo-600"></i>
        <span className="text-2xl font-bold text-indigo-700">
          StudyShare
        </span>
      </div>

      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <a href="#" className="text-indigo-800 border-b-2 border-indigo-500 pb-1">
          Browse
        </a>
        <a href="#" className="text-gray-600 hover:text-indigo-700">
          Dashboard
        </a>
        <a href="#" className="text-gray-600 hover:text-indigo-700">
          Upload
        </a>
      </nav>
    </header>
  );
}

export default Header;
