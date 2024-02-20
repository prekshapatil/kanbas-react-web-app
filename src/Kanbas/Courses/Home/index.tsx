import ModuleList from "../Modules/List";
import ModuleButtons from "../Modules/ModuleButtons";
import SideBar from "./SideBar";

function Home() {
  return (
    <div className="row">
      <div className="col">
        <div className="flex-fill">
          <ModuleButtons />
          <hr />
          <ModuleList />
        </div>
      </div>
      <div className="col-auto">
        <SideBar />
      </div>
    </div>
  );
}
export default Home;