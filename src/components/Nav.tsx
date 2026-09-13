const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white ">
      <div className="flex justify-between container mx-auto my-10 px">
        <img src="/logo-text.png" alt="" />
        <div>
          <ul className="flex gap-5">
            <li className="text-pink-600">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-3">
          <button className="cursor-pointer">Sign In</button>
          <button className="cursor-pointer btn btn-secondary rounded-full">
            Sign Up
          </button>
        </div>
      </div> 
    </nav>
  );
};

export default Nav;
