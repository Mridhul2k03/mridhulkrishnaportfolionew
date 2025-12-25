import Dock from "../Components/Dock"
import { Home, User, Code, Phone, FileText } from "lucide-react";

function Layout() {
  return (
    <>  
      <Dock items={[
        {
          icon: <Home size={18} />,
          label: "Home",
          onClick: () => console.log("Home"),
          className: "bg-blue-100 dark:bg-blue-900"
        },
        {
          icon: <User size={18} />,
          label: "About",
          onClick: () => console.log("About"),
          className: "bg-green-100 dark:bg-green-900"
        },
        {
          icon: <Code size={18} />,
          label: "Projects",
          onClick: () => console.log("Projects"),
          className: "bg-yellow-100 dark:bg-yellow-900"
        },
        {
          icon: <Phone size={18} />,
          label: "Contact",
          onClick: () => console.log("Contact"),
          className: "bg-red-100 dark:bg-red-900"
        },
        {
          icon: <FileText size={18} />,
          label: "Resume",
          onClick: () => console.log("Resume"),
          className: "bg-red-100 dark:bg-red-900"
        }
      ]} />
    
    </>
  )
}

export default Layout