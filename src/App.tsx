import Recipies from "./components/Products";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="p-5 ml-65 w-full">
          {/* <Recipies /> */}
        </div>
      </div>
    </>
  );
};

export default App;
