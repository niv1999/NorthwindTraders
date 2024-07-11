import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Layout } from './Components/LayoutArea/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/state';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme/Theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>

        {/* Send the store object to any useSelector hook: */}
        <Provider store={store}>

            <ThemeProvider theme={theme}>
                <Layout />
            </ThemeProvider>
            
        </Provider>
        
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
