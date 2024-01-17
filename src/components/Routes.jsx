import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './MoreAbout.jsx'
import App from './App.jsx'
import ProjectPage from './ProjectPage.jsx'

const App = () => {
  return (
    <>
      <div className="relative m-0 min-h-full bg-gradient-to-br from-sky-950 to-slate-900 p-0 text-cyan-200">
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
