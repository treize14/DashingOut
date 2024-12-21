import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';
import { AuthProvider } from './contexts/AuthContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CurrencyProvider>
          <Layout>
            <AppRoutes />
          </Layout>
        </CurrencyProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;