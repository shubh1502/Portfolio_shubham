import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 8%;
  background-color: #fff;
  position: relative;
`;

const TextBlock = styled.div`
width: 60%;
  h2 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #333;
  }
`;

const Highlight = styled.span`
  color: #007bff;
`;

const ImageBlock = styled.div`
  width: 300px;         // Fixed width
  height: 300px;        // Same as width to make it square
  border-radius: 50%;
  border: 5px solid #007bff;
//   overflow: hidden;     // Ensures circular cropping
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;


const SocialIcons = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 3rem;
  a {
    margin-left: 1rem;
    color: #333;
    &:hover {
      color: #007bff;
    }
  }
`;

const Profile = () => {
    return (
        <HeroSection>
            <SocialIcons>
                <a href="https://github.com/shubh1502" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
                <a href="https://www.linkedin.com/in/shubham-saini-680259146/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
            </SocialIcons>

            <TextBlock>
  <h2>
    Hi, I'm <span style={{ color: 'blue' }}>Shubham Saini</span>
  </h2>
  <p>
    <strong>🔧 Frontend Developer | 3+ Years in React.js</strong>
    <br /><br />
    I'm a passionate frontend developer with <strong>4.5 years of industry experience</strong>, including <strong>3+ years dedicated to React.js</strong>. I specialize in building dynamic, high-performance, and user-centric interfaces that deliver seamless digital experiences.
    <br /><br />
    My primary expertise lies in <strong>React.js</strong>, backed by practical knowledge of the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js), enabling me to contribute effectively across the full stack when required.
    <br /><br />
    I take pride in writing clean, maintainable, and scalable code. I thrive in fast-paced agile environments, collaborate actively using <strong>Git</strong>, and stay up-to-date with the latest trends, tools, and best practices in modern frontend development.
    <br /><br />
    <strong>💡 Current Objective:</strong> I'm eager to join a forward-thinking product or engineering team where I can contribute meaningfully, learn continuously, and grow as a <strong>React specialist</strong>.
    <br /><br />
    <strong>🚀 Tech Stack:</strong>
    <br />
    React.js | Redux | JavaScript (ES6+) | TypeScript | HTML5 | CSS3 | Next.js | REST APIs | Git | Node.js (basic) | MongoDB (basic)
  </p>
</TextBlock>


            <ImageBlock>
                <img src="/assets/Shubh_DP.jpg" alt="Hero" />
            </ImageBlock>
        </HeroSection>
    );
};

export default Profile;
