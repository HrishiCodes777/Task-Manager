import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewTasks from './pages/ViewTasks';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/tasks' element={<ViewTasks/>}/>
          <Route path='/add' element={<AddTask/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
