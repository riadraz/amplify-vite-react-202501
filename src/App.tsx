import { Authenticator,ThemeProvider, createTheme} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Header from './custom-components/header';
import Footer from './custom-components/footer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Products from './pages/Products';
import Income from './pages/Income';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Inventory from './pages/Inventory';
import Dashboard from './pages/Dashboard';
import { signOut } from 'aws-amplify/auth';

const theme = createTheme({
  name: 'custom-theme',
  tokens: {
    colors: {
      brand: {
        primary: {
          10: '{colors.blue.10}',
          80: '{colors.blue.80}',
          90: '{colors.blue.90}',
          100: '{colors.blue.100}',
        },
      },
    },
    components: {
      authenticator: {
        // Customize specific Authenticator components
        router: {
          
          backgroundColor: '{opacity:0}',
          },
          container: {},
      }
    }
  }
});


function App() {
  async function handleSignOut() {
    await signOut();
  }

  return (
    <ThemeProvider theme={theme}>
      <Authenticator
        initialState="signIn"
        socialProviders={['google', 'facebook']}
      >
      
     
        <BrowserRouter>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh'
            }}>
              <Header />
              <Navbar />
              
              <main style={{ flex: 1, padding: '2rem' }}>
                <Routes>
                  <Route path="/" element={<Navigate to="/home" replace />} />
                  <Route path="/home" element={<Dashboard />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/income" element={<Income />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/inventory" element={<Inventory />} />
                  
                </Routes>
              </main>

              <Footer signOut={handleSignOut}/>
            </div>
          </BrowserRouter>
      
    </Authenticator>
    </ThemeProvider>
  );
}

export default App;
