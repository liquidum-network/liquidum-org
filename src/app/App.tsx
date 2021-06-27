import React from 'react';
import firebase from 'firebase/app';
import TopBar from 'src/components/TopBar';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import NoMatch from 'src/components/NoMatch';
import FAQ from 'src/components/FAQ';
import AboutUs from 'src/components/AboutUs';
import {
  Route,
  Switch,
  // Redirect,
  // useLocation,
} from 'react-router-dom';
// import NoMatch from 'src/components/auth/NoMatch';

import './App.css';
/** type imports */
// import type { RootState } from 'src/app/rootReducer';
// import type { AppDispatch } from 'src/app/store';
// import type { FirebaseAuthUser } from 'types';


const firebaseConfig = {
  apiKey: "AIzaSyCQQOV7zoNKS_d1ZWUeDRk0zLrcQpG5MRk",
  authDomain: "proof-of-sprout.firebaseapp.com",
  projectId: "proof-of-sprout",
  storageBucket: "proof-of-sprout.appspot.com",
  messagingSenderId: "154455646650",
  appId: "1:154455646650:web:14440dd6b27750d3e13d83",
  measurementId: "G-BXW36DHTZ5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const App: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <TopBar />
        <main>
          <Switch>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
