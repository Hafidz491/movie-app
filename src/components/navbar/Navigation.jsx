export default Navigation = () => {
  const navigasi = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Favorite",
    },
    {
      id: 3,
      title: "Contact",
    },
  ];

  return (
    <div className="flex items-center px-4">
      <nav className="hidden absolute py-5 bg-white shadow-lg dark:shadow-slate-500 rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none dark:bg-dark lg:dark:bg-transparent">
        <ul className="flex">
          {navigasi.map((item) => (
            <li key={item.id} className="group">
              <a
                href="#"
                className="text-lg text-white hover:text-red-500 py-2 px-8"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
