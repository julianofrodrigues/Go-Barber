import React from "react";
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';
import GlobalStyle from './styles/Global';
// import SiginIn from './pages/SiginIn';
import SiginUp from './pages/SiginUp';



const App: React.FC = () => (
    <>
        {/* <SiginIn /> */}
        <SiginUp />
        <GlobalStyle />
  </>
);

export default App;
