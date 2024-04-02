import ReactDOM from 'react-dom/client'
// Brining in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowswerRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';


// Define the accessible routes, and which components respond to which URL
const router = createBrowswerRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);