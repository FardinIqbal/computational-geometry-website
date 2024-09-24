import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Toolbar />
        <main className="flex-1 p-4">
          <Canvas />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
