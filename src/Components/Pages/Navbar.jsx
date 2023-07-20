export default function Navbar() {
  const Nav = [
    {
      link: "Home",
      href: "#home",
    },
    {
      link: "About",
      href: "#about",
    },
    {
      link: "RW 08 Sambiroto",
      href: "/",
      class: "text-3xl font-bold fjalla",
    },
    {
      link: "Produck",
      href: "#produck",
    },
    {
      link: "Contact",
      href: "#contact",
    },
  ];
  return (
    <div className="py-3 fixed w-full z-50">
      <div className="flex justify-center items-center gap-16">
        {Nav.map((i, index) => {
          return (
            <div key={index}>
              <ul>
                <li className="text-white">
                  <a href={i.href} className={i.class}>
                    {i.link}
                  </a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
