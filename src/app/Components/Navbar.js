const Navbar = () => {
  return (
    // Made Navbar sticky so that it stays fixed when the page is scrolled.
    <nav className="w-screen bg-[#6669FE] py-4 px-8 sm:px-12 flex items-center justify-between sticky top-0 left-0 z-50 right-0">

      <div className="text-lg font-semibold">
        <img src="./student_portal_logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      <h1 className="text-xl lg:text-3xl font-bold">Student Portal</h1>

      <div className="hidden sm:flex sm:flex-col text-right">
        <span className="text-2xl font-bold">Hello, Richa!</span>
        <span className="text-sm text-white">Class 7, Math + Science</span>
      </div>
    </nav>
  );
}

export default Navbar;
