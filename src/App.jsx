import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../amplify_outputs.json";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import AccountPage from './pages/AccountPage';
import PlansPage from './pages/PlansPage';
import PaymentPage from './pages/PaymentPage';
import DownloadPage from './pages/DownloadPage';


// Configure Amplify
Amplify.configure(outputs);

// Generate client for data operations
const client = generateClient({
  authMode: "userPool",
});

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

// Protected route component
function RequireAuth({ children }) {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  
  if (authStatus !== 'authenticated') {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function AppContent() {
  const { authStatus, user, signOut } = useAuthenticator(context => [
    context.authStatus,
    context.user
  ]);
  
  const [userProfiles, setUserProfiles] = React.useState([]);
  
  React.useEffect(() => {
    if (authStatus === 'authenticated') {
      fetchUserProfile();
    }
  }, [authStatus]);
  
  async function fetchUserProfile() {
    try {
      const { data: profiles } = await client.models.UserProfile.list();
      setUserProfiles(profiles);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }
  
  return (
    <Router>
      <AppContainer>
        <Navbar 
          isAuthenticated={authStatus === 'authenticated'} 
          userEmail={user?.attributes?.email}
          onSignOut={signOut}
        />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/plans" element={<PlansPage />} />
            <Route 
              path="/payment" 
              element={
                <RequireAuth>
                  <PaymentPage />
                </RequireAuth>
              } 
            />
            <Route 
              path="/download" 
              element={
                <RequireAuth>
                  <DownloadPage />
                </RequireAuth>
              } 
            />
            <Route 
              path="/settings" 
              element={
                <RequireAuth>
                  <SettingsPage />
                </RequireAuth>
              } 
            />
            <Route 
              path="/account" 
              element={
                <RequireAuth>
                  <AccountPage 
                    userProfiles={userProfiles}
                    userEmail={user?.attributes?.email}
                  />
                </RequireAuth>
              } 
            />
            <Route path="/payment-redirect" element={<Navigate to="/account" replace />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <AppContent />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
