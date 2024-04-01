const Footer = () => {
  return (
    <div className="pt-36">
      <div className="px-10 footer-background bg-transparent absolute w-full flex flex-wrap justify-between text-white md:flex sm:block">
        <div className="w-1/2 py-16">
          <div className="">
            <h3 className="text-2xl pb-4 text-red-500">MovieApp</h3>
            <p className="w-72">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              dolores laboriosam iusto, similique minima delectus, itaque quasi
              consequuntur, iste ex fugit reiciendis eum rem harum unde animi
              temporibus provident suscipit.
            </p>
          </div>
        </div>
        <div className="w-1/2 py-16">
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <h3 className="text-2xl pb-4">Tautan</h3>
              <ul>
                <li>Home</li>
                <li>Favorite</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl pb-4">Kategori</h3>
              <ul>
                <li>Home</li>
                <li>Favorite</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
