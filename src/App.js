import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { MaterialUiProvider } from './providers/ThemeProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { PacientsProvider } from './hooks/usePacients';

function App() {
  return (
    <PacientsProvider>
      <MaterialUiProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Header />
        <Dashboard />
      </MaterialUiProvider>
    </PacientsProvider>
  );
}

export default App;
