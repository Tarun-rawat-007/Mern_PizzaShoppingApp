import DashBoard from "./modules/dashboard/components/DashBoard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from "./shared/widgets/Footer";
import Contact from "./shared/widgets/Contact";


const App= () =>{
  return (
    <>
    
   
    <DashBoard></DashBoard>
    <Contact></Contact>
    <Footer></Footer>
    <ToastContainer 
  position="top-right" 
  autoClose={3000} 
  theme="dark" 
/>

    </>
  )
}
export default App;