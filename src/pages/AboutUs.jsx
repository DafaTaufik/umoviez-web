import Us from "../components/Us";
import Sidebar from "../components/Sidebar";
const AboutUs = () => {
  return (
    <div className="h-screen w-full overflow-hidden">
      <div className="h-screen flex mx-0 my-0 px-0 py-0 ">
        <Sidebar />
        <div className="Movie-container tengah h-screen min-w-0 flex-1 overflow-x-hidden overflow-y-auto px-6">
          <Us />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
