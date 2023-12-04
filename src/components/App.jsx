import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './moreAbout.jsx'
import ProjectPage from './projectPage.jsx'
import Content from './content.jsx'

const App = () => {

  return (
    <>
      <div className="relative min-h-full bg-gradient-to-br from-sky-950 to-slate-900 p-0 text-cyan-200 first-letter:m-0 ">
        <Router>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
export default App
