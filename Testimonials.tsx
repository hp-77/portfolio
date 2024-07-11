


// pages/components/Testimonials.tsx
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

type Testimonial = {
  text: string;
  name: string;
  title: string;
  linkedInUrl: string;
};

const testimonials: Testimonial[] = [
  {
    text: `I have had the distinct pleasure of having Harsh as a colleague at Integra works. He has a very strong work ethic and excellent problem-solving skills. Harsh is dedicated, self-motivated, and very capable. He is a colleague the team can always rely upon. It was a privilege to work with him.`,
    name: 'Sanjeet Pradhan',
    title: ' Data Scientist',
    linkedInUrl: 'https://in.linkedin.com/in/sanjeet-kumar-pradhan-90004b132', // Replace with actual URL
  },
  {
    text: `We worked together for a while in a very complex project. In that scenario, Harsh was very kind, hardworking, always trying to understand the system requirements. He did not hesitate to contact stakeholders and solve problems. He would be a great asset to any team.`,
    name: 'Aditya Tiwari',
    title: 'Senior Technical Lead',
    linkedInUrl: 'https://in.linkedin.com/in/aditya-tiwari-08632b95', // Replace with actual URL
  },
  {
    text: `Harsh is workaholic and proficient in technical skills very well. I would recommend Harsh to be part in any kind of front end role or in any full stack platform which is helpful for the organisation to full fill their needs !`,
    name: 'Chandra Shekhar Pathak',
    title: 'Senior Manager at Integra Works',
    linkedInUrl: 'https://www.linkedin.com/in/chandra-shekhar-pathak-46b79521/', // Replace with actual URL
  },
];

const TestimonialCard: React.FC<Testimonial> = ({ text, name, title, linkedInUrl }) => (
  <div style={cardStyle}>
    <ImQuotesLeft  />

    <p style={quoteStyle}>{text}</p>

    <ImQuotesRight  />
    <div style={authorContainerStyle}>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" style={iconStyle}>
        <FaLinkedin size={20} />
      </a>
      <div>
        <h3 style={nameStyle}>{name}</h3>
        <p style={titleStyle}>{title}</p>
      </div>
    </div>
  </div>
);
                                                               
const Testimonials: React.FC = () => (
  <div style={containerStyle}>
                 <style>{marqueeKeyframes}</style>   
    <h2 style={headingStyle}>Testimonials</h2>
    <div style={cardsContainerStyle}>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  </div>
);
/* VERY IMPORTANT IT IS RES PONSIVE IN BIG AS WELL AS SMALL SCREEN SCREEN AND IN MOST SCREEN JUST SOME CONTENT GOES OUT IN 
    WITHOUT TESTIMONIALS ALSO THAT IS BECAUSE OF CRITICAL POINTS AT THOSE DEVICES THIS IS COMPLETELY NORMAL
    AND FINE.
*/

const containerStyle: React.CSSProperties = {
  padding: '2rem',
  backgroundColor: 'rgb(11,25,47)',
  color: '#fff',
  textAlign: 'center',
};

const headingStyle: React.CSSProperties = {
  fontSize: '2.5rem',
  marginBottom: '2rem',
};



const cardsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-around',
  
  
  
  
   /*TWO challenges with marquee effect first is overflow bar and other is no content when all cards leave screen and thrird very rare is checking responsiveness also */

  flexWrap: 'wrap',
  animation: 'marquee 5s linear infinite', 
                        /*  THIS EXTRA LINE ADDED FOR MARQUEE EFFECT one line above also in line 59*/
};                                                  
const marqueeKeyframes = `
  @keyframes marquee {                                        /*  THIS EXTRA LINE ADDED FOR MARQUEE EFFECT*/
                                                      /*  THIS EXTRA LINE ADDED FOR MARQUEE EFFECT*/
            0% { transform: translateX(0%); }
   50% { transform: translateX(3%); }     /*So that it dont move further right and white overflow not seen */
    100% { transform: translateX(0%); }                  
                                                          /*Extra line added in globals.css  also*/
  }
 `;   
                                 /*DONT CHANGE MARQUEE ANIMATION ELSE WHITE SCREEN AGain */

const cardStyle: React.CSSProperties = {
  maxWidth: '300px',
  padding: '1.5rem',
  backgroundColor: '#14283b',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  color: 'rgb(196,200,207)',
  margin: '1rem',
};

const quoteStyle: React.CSSProperties = {
  fontStyle: 'italic',
  marginBottom: '1rem',
};

const authorContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const iconStyle: React.CSSProperties = {
  marginRight: '10px',
  color: '#0077b5', // LinkedIn blue color
  textDecoration: 'none',
};

const nameStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  margin: '0',
};

const titleStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  margin: '0',
};

export default Testimonials;




