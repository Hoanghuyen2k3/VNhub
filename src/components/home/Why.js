import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import Wrapper from "../../hoc/Wrapper";

import { textVariant } from "../../utils/motion";
import "./Why.scss"

import React from 'react'

const whys =[
    {
        why:  "Local Insights",
        reason:  "Our curated experiences are designed by locals, ensuring an authentic and immersive encounter with Vietnam's cultural gems."
    }, 
    {
        why: "Tailored Itineraries", 
        reason:  "Craft your journey according to your preferences, be it a culinary escapade, festival immersion, or leisurely exploration",

    }, 
    {
        why:  "Expert Guides", 
        reason:"Our knowledgeable guides are passionate storytellers, adding depth to every place you visit.",

    }, 
    {
        why:  "Unforgettable Memories",
        reason: "From sunrise at Angkor Wat to savoring street food under the stars, VNhub creates moments that become cherished memories."

    }]

const Card = ({ why, reason }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
          width: "80%",
          maxWidth: "500px"
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        className="why-timeline"
        // iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="vietname-flag">
          <img
            src="https://cdn-icons-png.flaticon.com/512/323/323319.png"
            alt="vietnam-flag"
          />
        </div>
      }
        
      >
        <div className="why-reason">
          <h3>{why}</h3>
          <p className="reason">
            {reason}
          </p>
        </div>
  
        
      </VerticalTimelineElement>
    );
  };

function Why() {

  return (
    <>
      <motion.div variants={textVariant()}>
        
      </motion.div>

      <div className="why-reason-container">
        <VerticalTimeline>
          {whys.map((why, index) => (
           
            <Card
              key={`why-${index}`}

              why={why.why}
              reason={why.reason}
            />)
          )}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default Why