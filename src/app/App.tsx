import React from 'react';
import firebase from 'firebase/app';
import 'firebase/analytics';
import TopBar from 'src/components/TopBar';
import Footer from 'src/components/Footer';
import Home from 'src/components/Home';
import NoMatch from 'src/components/NoMatch';
import FAQ from 'src/components/FAQ';
import AboutUs from 'src/components/AboutUs';
import WhitePaper from 'src/components/WhitePaper';
import PlotNftManagerPreview from 'src/components/PlotNftManagerPreview';
import {
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
/** type imports */


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
firebase.analytics();




const App: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col h-screen justify-between">
        <TopBar />
        <main
          className="flex-grow"
        >
          <Switch>
            <Route path="/faq">
              <FAQ />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/whitepaper">
              <WhitePaper />
            </Route>
            <Route path="/plotnft-manager-preview">
              <PlotNftManagerPreview />
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
