import Logo from "../../assets/images/Logo.svg";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center text-[#212832] py-12 font-sans font-medium">
      <div className="flex w-[1160px]">
        <img src={Logo} alt="" />
        <ul className="flex gap-10 items-center w-full justify-end">
          <li>Desitnations</li>
          <li>Hotels</li>
          <li>Flights</li>
          <li>Bookings</li>
          <li>Login</li>
          <li>
            <button className="bg-transparent px-4 py-1 border border-[#212832] rounded">
              Sign up
            </button>
          </li>
          <li>
            <select name="language" id="language_selector" className="bg-transparent">
              <option value="EN">EN</option>
              <option value="ES">ES</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
};
