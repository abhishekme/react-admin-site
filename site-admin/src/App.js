import logo from './logo.svg';
import './App.css';

import Header from './Partial/Header';
import Footer from './Partial/Footer';
import AdminRoute from './AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
        <main>   
             
          <Header/>   
           <AdminRoute/>
          <Footer/> 
                  
        </main>
    </div>
  );
}

export default App;
