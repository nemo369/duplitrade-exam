import React from "react"
import { getSvg } from "../helpers"

const Join = ({ text }) => {
  const steps = [
    {
      id: 1,
      svg: "register",
      text: "Register with Dupli",
    },
    {
      id: 2,
      svg: "open",
      text: "Open a brokerage account and link it to DupliTrade",
    },
    {
      id: 3,
      svg: "select",
      text: "Select strategy providers to follow and adjust exposure",
    },
    {
      id: 4,
      svg: "track",
      text: "Track and analyze your trading account in real time",
    },
  ]
  return (
    <section className="join">
      <h2>{text}</h2>
      <div className="flex join__grid">
        {steps.map(step => (
          <Step key={step.id} step={step} />
        ))}
      </div>
    </section>
  )
}

export default Join

const Step = ({ step }) => {
  return (
    <div className={`join__step ${step.id !== 1? 'blue_before': ''}`}>
      <div className="join__number">{step.id}</div>
      <div className="join__svg"  dangerouslySetInnerHTML={{ __html: getSvg(step.svg) }}></div>
      <p className="join__p">{step.text}</p>
      {step.id !== 1 ? <span className="arrow"></span> : <span className="arrow mobile"></span>} 
    </div>
  )
}
