import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import Products from "./components/Products";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-5 ml-65 w-full">
          <Products />
        </div>
      </div>
    </>
  );
};

export default App;
