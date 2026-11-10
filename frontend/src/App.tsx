import './App.css'
import snoopy from './assets/SnoopGitHub.png'

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
        <p>{sampleReport.text} ({sampleReport.kind})</p>
        <ul>
            {initialReports.map((report) => (
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
