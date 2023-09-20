
const Header = () => {
  return (
    <div>
      <nav className="shadow-md">
        <div className="flex justify-between mx-10 p-5">
          <h2 className="text-2xl font-bold">Amajhon</h2>
          <ul className="flex gap-5 items-center text-xl">
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
