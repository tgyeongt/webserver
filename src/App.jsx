import { useEffect, useState } from 'react'
import './App.css'
import emoji from './emoji.webp'

function App() {
  const fullText = "INTRODUCTION"
  const [typedText, setTypedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[index])
        setIndex((prev) => prev + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [index, fullText])

  return (
    <div className="profile-container">
      <h1 className='title'>{typedText}</h1>
      <div className="top-section">
        <img src={emoji} alt="profile" className="profile-img" />

        <div className="info">
          <blockquote className="intro-block">
            안녕하세요. 서경대학교 컴퓨터공학과 22학번 박태경입니다.
          </blockquote>

          <p><strong>✉️ Email</strong><br />tgyeongt@gmail.com</p>
          <p><strong>🐱 Github</strong><br />
            <a href="https://github.com/tgyeongt" target="_blank" rel="noreferrer">github.com/tgyeongt</a>
          </p>
        </div>
      </div>

      <section>
        <h2>⛏️ Skills</h2>
        <hr />
        <ul className="skills-list">
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
          <img src='https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white'/>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
          <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
          <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
          <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
          <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
          <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
          <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"/>
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
          <img src='https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white'/>
          <img src="https://img.shields.io/badge/ESLint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/>
          <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"/>
        </ul>
      </section>

      <section>
        <h2>🎒 Activities</h2>
        <hr />
        <ul className="activities-list">
          <li>
            <div className="activity-title">멋쟁이사자처럼 12기 프론트엔드</div>
            <div className="activity-date">2024.03 ~ 2024.12</div>
          </li>
          <li>
            <div className="activity-title">멋쟁이사자처럼 중앙해커톤</div>
            <div className="activity-date">2024.08</div>
          </li>
          <li>
            <div className="activity-title">4호선톤</div>
            <div className="activity-date">2024.10</div>
          </li>
          <li>
            <div className="activity-title">UGG톤</div>
            <div className="activity-date">2024.12</div>
          </li>
          <li>
            <div className="activity-title">멋쟁이사자처럼 13기 운영진</div>
            <div className="activity-date">2025.03 ~</div>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
