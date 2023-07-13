import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 py-1 px-5 md:px-5 bg-black">
      {/*left*/}
      <div className="relative flex items-center my-auto">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEM9p0isF0rLA_yr6y8GQ3GERGGbqtHz4jNw&usqp=CAU"
          className="object-contain object-left cursor-pointer hidden md:inline-flex"
          width="30px"
        />
      </div>

      {/*Middel */}

      <div className="flex items-center justify-center">
        <h1 className="font-serif text-3xl cursor-pointer rounded-full text-white">
          Forbes Advisor
        </h1>
      </div>

      {/*Right*/}
      <div className=" flex space-x-2 pl-20 justify-end">
        <p className="text-right object-contain text-white cursor-pointer text-sm pt-2 hidden md:inline-flex">
          US
        </p>

        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEUAAAD////W1taVlZXq6upNTU0uLi61tbX6+vqYmJhiYmJKSkp/f3/Ozs719fUvLy9ra2uJiYnAwMDk5ORSUlIICAgPDw+hoaEmJiZfX189PT3b29vU1NQVFRUbGxuurq6CxvlhAAADO0lEQVR4nO3ba3PaMBCF4SjhnpALEAikbf7/vyxtZ9IBbEkra3ePPOf9rmWfsXPxjLm7Y4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMsVH18Xicee/Q22x3+hg2YbpZhD99PtXZqGpPP/7utphPi0f8XIfvnlcVd6vR6vn/cuvCGadw0UPVBYe2vFyu6AdpGgIucX69XMGdegNEIt4AC4gdQBxiB1BM7ASiEDuBIbxIZvQAMYg9wLAQEHuBCMQ+4JmY/Rs1AvQn9gPziVGgN/EhulseMQH0JcaBIetPfxLoSUwCM67iYxroR0wD08TZIkfoRMwBnom/okM+s4b4EPOA50e92JBV5hAPYi4whNiD3jp93IuYD4w+LuZPsSYKgCH0j8m/Sa2JImDkNn0VzTEkyoDhtXfQm2yQGVEIDG+9k4TX0IooBUau4Sl92IEoBoZd/7C8/2hsiXLgIjIt9vDlRJQDwzwy7kU+TplYAIw/QS3T502JJcCv+Mh7KGIJ8D41FImoAkQiKgFxiGpAFKIiEIOoCkQgKgP9iepAb2IJcCv9EE9iCXAi/xg/ohHQj2gG9CIaAn2IpkAPojHQnmgOtCY6AG2JLkBLohPQjugGtCI6Am2IrkALojNQn+gO1CYCAHWJEEBNIghQjwgD1CICAXWIUEANIhiwPhEOWJsICKxLhATWJIIC6xFhgbWIwMAy4vJqRslbH2bAMuLmYsIGG1hGnBy/jx8n6MAyYtgud+/7991yW3LYGFhIHJA50JroALQlugAtiU5AO6Ib0IroCLQhugItiM5AfaI7UJsIANQlQgA1iSBAPSIMUIsIBNQhQgE1iGDA+kQ4YG0iILAuERJYkwgKrEeEBdYiAgPrEKGBNYjgwOFEeOBQYgPAYcQmgEOIjQDLic0AS4kNAcuI4q/X+SYnCr8g6Z+U2BxQSmwQKCM2CZQQGwXmE5sF5hIbBuYRmwbmEBsHponNA1PEEQDjxFEAY8SRAPuJowH2EUcE7CaOCthFHBnwljg64DVxhMDLt/MP3svotD/8e8F7e9h7r6LXfraajZjHGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjw/sNpRYtdwuaUZ0AAAAASUVORK5CYII="
          className="object-contain object-left cursor-pointer hidden md:inline-flex pt-1 rounded-full"
          width="20px"
        />
      </div>
    </header>
  );
}

export default Header;
