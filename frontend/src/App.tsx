import './App.css'
import snoopy from './assets/SnoopGitHub.png'
import {useState} from 'react'


type ReportKind = 'bug' | 'feature'
type Report = {
id: string
text: string
kind: ReportKind
};

function App() {  
  const initialReports: Report[] = [
    { id: '1', text: 'Navigation link is broken', kind: 'bug' },
    { id: '2', text: 'Add dark mode', kind: 'feature' },
  ];

  const [reports, setReports] = useState(initialReports)
  const [newReportText, setNewReportText] = useState('')


  function addReport() {
  const text = newReportText.trim()
  if (text.length === 0) return
  const newReport: Report = {
    id: crypto.randomUUID(),
    text: text,
    kind: 'bug',
  };
  setReports([...reports, newReport]);
  setNewReportText(''); 
}

  

  const sampleReport: Report = {
    id: '1',
    text: 'Navigation link is broken',
    kind: 'bug',
  };

  return (
    <main>
      <div>
        <h2>JacqMarr's Portfolio</h2>
        <img src={snoopy} className="base" alt="Snoopy GitHub"/>
        <h1>Welcome to my portfolio. </h1>
        <h2>I am a senior at Grove City College. After college I will be working as a full stack software engineer.</h2>
        <h4>Outside of programming, I enjoy playing tennis and volunteering as a tutor.</h4>
        <p>This is a test paragraph.</p>
        <section className="report-board">
        <h2>Bugs & Feature Requests</h2>
        
        <input type="text" value={newReportText} onChange={(event) => setNewReportText(event.target.value)} placeholder="Describe a bug..." aria-label="New bug report"/>
          <button type="button" onClick={addReport}>
          Add Bug
          </button>
        <ul>
          {reports.map((report) => (
          <li key={report.id}>
          {report.text} ({report.kind})
          </li>
          ))}
        </ul>
        </section>
      </div>
    </main>
  )
}

export default App
