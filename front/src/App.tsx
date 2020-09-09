import React from "react";
// import { BrowserRouter } from 'react-router-dom';
// import Routes from './routes';
import GlobalStyle from './styles/Global';
import SiginIn from './pages/SiginIn';


const App: React.FC = () => (
    <>
        <SiginIn />
        <GlobalStyle />
  </>
);

export default App;
