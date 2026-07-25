import { useState } from 'react'
import Sidebar from './componestes/layout/Sidebar';
import './App.css'


function App() {
  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 bg-slate-100 h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>
      </main>
    </div>
  );
}

export default App;
