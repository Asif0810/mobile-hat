
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="App max-w-[1140px] mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>

  );
}

export default App;
