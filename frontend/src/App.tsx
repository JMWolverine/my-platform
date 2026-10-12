import './App.css'
import snoopy from './assets/SnoopGitHub.png'

function App() {

  return (
    <>
      <div>
        <h2>JacqMarr's portfolio </h2>
        <img src={snoopy} className="base" alt="Snoopy GitHub"/>
        <h1>Welcome to my portfolio. </h1>
        <h2>I am a senior at Grove City College. After college I will be working as a full stack software engineer.</h2>
        <h4>Outside of programming, I enjoy playing tennis and volunteering as a tutor.</h4>
      </div>
    </>
  )
}

export default App
