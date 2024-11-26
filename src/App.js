import './App.scss';
import Header from './components/Header';
import Container from 'react-bootstrap/Container';
import ModalAddNew from './components/modalAddNew';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/userContext';
import AppRouters from './routes/appRouters';

function App() {

  const {user, loginContext} = useContext(UserContext);
  useEffect(() => {
    if(localStorage.getItem("token")){
        loginContext(localStorage.getItem("email"), localStorage.getItem("token"));
    }
  })
  return (
    <>
      <div className='app-container'>
        <Container>
            <Header/>
            <AppRouters/>
        </Container> 

        
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  );
}

export default App;
