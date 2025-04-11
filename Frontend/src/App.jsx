import DashBoard from "./modules/dashboard/components/DashBoard";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App= () =>{
  return (
    <>
    
    
    <DashBoard></DashBoard>
    <ToastContainer 
  position="top-right" 
  autoClose={3000} 
  theme="dark" 
/>

    </>
  )
}
export default App;