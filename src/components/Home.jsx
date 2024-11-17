import React from 'react'

function Home() {
  return (
    <div className='home project-card'>
      <section className='hero'>
        <h1>hi,I am Manoj Kumar R</h1>
        <p>I am a Full-Stack Devloper</p>
        <button onClick={() => window.location.href = "/projects"}>View My Projects</button>
        <a href="/Manoj-fullstack-resume.pdf" download>
          <button>Download CV</button>
        </a>
      </section>
      <section>
        <h2>Highlights</h2>
        <p>iam a computer science enginnering graduate and i have worked as frontend developer previously and i have did a java full stack course and boosted my frontend skills and learnt backend coding as well and now iam actively looking for frontend,backend and full stack oppourtunities</p>
      </section>
    </div>
  )
}

export default Home



// import React from "react";

// function Home() {
//   return (
//     <div className="home project-card">
//       <section className="hero">
//         <h1>Hi, I am Manoj Kumar R</h1>
//         <p>I am a Full-Stack Developer</p>
//         <button onClick={() => window.location.href = "/projects"}>View My Projects</button>
//         <button onClick={() => window.location.href = "/about"}>About Me</button>
//       </section>
//     </div>
//   );
// }

// export default Home;
