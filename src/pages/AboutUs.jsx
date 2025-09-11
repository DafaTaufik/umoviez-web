import Us from "../components/Us";
import Sidebar from "../components/Sidebar";
const AboutUs =() => {
return (
<div className="h-screen w-full ">
       <div className="h-screen flex mx-0 my-0 px-0 py-0 ">
        <Sidebar/>        
        <div className="w-full Movie-container tengah mt-4 pt-2 pl-2 w-full overflow-x-hidden">
            <Us />
            </div>
    </div>
    </div>

)
}
export default AboutUs 