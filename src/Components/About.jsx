import React,{useState,useEffect} from 'react'
import './Style/about.css'
import AboutFirstCardItem from './AboutFirstCardItem'
import AboutSecondCardContainer from './AboutSecondCardContainer'
import ActivityCardItem from './ActivityCardItem'

function About() {
 

  const aboutDataArray = [
    {
      "Primary_Focus":[
        {
          "id":"focus"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Web Design & Development",
          "para":"Creating attractive, easy-to-use websites that work well for businesses and individuals online."
        },
        {
          "id":"focus"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Mobile Apps & Games",
          "para":"Creating and developing engaging mobile apps and games for iOS and Android devices."
        },
        {
          "id":"focus"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Development Solutions",
          "para":"Utilizing JavaScript frameworks like React, Node, Next, Vue and more to build interactive web applications."
        },
        {
          "id":"focus"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Marketing & SEO",
          "para":"Creating attractive, easy-to-use websites that work well for businesses and individuals online."
        }
      ],
        "Exploring_Creativity":[{
          "id":"creativity"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Visual Storytelling",
          "para":"Taking and editing photos or videos that tell engaging stories, bringing concepts and ideas to life visually."
        },
        {
          "id":"creativity"+Date.now()+ Math.floor(Math.random()*100),
          "logo":"",
          "heading":"Digital Content Creation",
          "para":"Creatiing dynamic digital content, such as 3D models, graphics or animations."
        }],
      "Programming_Language":[
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*100),
          "language":"JavaScript",
          "percentage":"80%",
        },
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*100),
          "language":"TypeScript",
          "percentage":"50%",
        },
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*100),
          "language":"PHP",
          "percentage":"40%",
        },
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*1020),
          "language":"Python",
          "percentage":"25%",
        },
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*1020),
          "language":"CSS",
          "percentage":"95%",
        },
        {
          "id":"pl"+Date.now()+ Math.floor(Math.random()*1020),
          "language":"HTML",
          "percentage":"100%",
        }
      ],
      "Human_Language":[
        {
          "id":"hl"+Date.now()+ Math.floor(Math.random()*1200),
          "language":"English",
          "percentage":"Fluent",
        }
        ,
        {
          "id":"hl"+Date.now()+ Math.floor(Math.random()*1200),
          "language":"German",
          "percentage":"Fluent",
        },
        {
          "id":"hl"+Date.now()+ Math.floor(Math.random()*1020),
          "language":"Bulgarian",
          "percentage":"Native",
        },
        {
          "id":"hl"+Date.now()+ Math.floor(Math.random()*1020),
          "language":"Turkish",
          "percentage":"Bilingual",
        }
      ],
      "Favorite_Activities":[
        {
          "id":"activities"+Date.now() + Math.floor(Math.random()*1020),
          "logo":"",
          "heading":"Investments",
          "para":"Exploring Stocks, Crypto and Long-Term Growth Opportunities for Financial Investment"
        },{
          "id":"activities"+Date.now()+ Math.floor(Math.random()*1020),
          "logo":"",
          "heading":"Music",
          "para":"Creating Instrumentals, Mixing and Mastering Tracks and Collaborating with Musicians"
        },{
          "id":"activities"+Date.now()+ Math.floor(Math.random()*1020),
          "logo":"",
          "heading":"Traveling",
          "para":"Exploring new places, learn about different cultures and create lifelong memories."
        },{
          "id":"activities"+Date.now()+ Math.floor(Math.random()*1020),
          "logo":"",
          "heading":"Photography",
          "para":"Capturing precious moments and memories through the lens of a camera."
        },
      ]
    }
  ]

 
    return (
    <>
      
      
      <div className="about-para-container card">

      
      Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design isn't just a hobby, it's a key ingredient in every project I work on.
      <details>
  <summary>Click here</summary>
  <p>Growing up bilingual, I developed a love for languages and I currently speak four of them fluently. I believe that this skill has given me a unique perspective and allows me to communicate effectively with clients from all over the world. One of my strengths is adding a personal touch to my projects by adding the client's identity and message into the design, creating meaningful and beautiful end products that are both eye-catching and user-friendly.
<br /><br />
In my free time, I enjoy exploring my other passions, such as photography and music production, which provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto, NFTs and blockchain technology as I believe they have the potential to revolutionize business and online interactions.
<br /><br />
If you have an innovative idea for a project that needs to be developed, I would love to hear from you. Your vision can be turned into a real product. Don't hesitate to reach out and let's start a conversation about your concept. I'm excited to collaborate and help bring your ideas to life.</p>
</details>

      </div>

      <div className="about-first-card-container">
        <h2>Primary Focus</h2>
       {
        aboutDataArray.map((ele)=>(ele.Primary_Focus.map((item) =>(<AboutFirstCardItem key={item.id} cardData={item} />))))
      }
        <h2>Exploring Creativity</h2>
        {aboutDataArray.map((ele)=>ele.Exploring_Creativity.map(item =>( <AboutFirstCardItem key={item.id} cardData={item} />)))}
      </div>
      
      <div className="about-second-card-container">
        <h2>Programming Languages</h2>
        {aboutDataArray.map((ele)=>ele.Programming_Language.map(item =>( <AboutSecondCardContainer key={item.id} cardData={item} />)))}
        <h2>Human Languages</h2>
        {aboutDataArray.map((ele)=>ele.Human_Language.map(item =>( <AboutSecondCardContainer key={item.id} cardData={item} />)))}
      </div>
      <div className="development-skills-container">
     
      </div>
      <div className="favrouite-activities-container">

        {aboutDataArray.map((ele)=>ele.Favorite_Activities.map(item =>( <ActivityCardItem key={item.id} cardData={item} />)))}
      </div>
      </>
  )
}

export default About
