import React from "react";
// import image from '../'
import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const About = () => {
  return (
    <div>
      <div className="about-page">
        <h1>About Us</h1>
        <div className="container">
          <div className="left">
            <h2>Welcome to BunniBuy</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              corrupti nulla dolorem dolorum optio quia voluptatibus amet
              dignissimos modi repudiandae. Ad alias id molestias nemo culpa.
              Nobis exercitationem sit maiores possimus asperiores quidem earum,
              corrupti debitis consequatur, fugiat sunt, veritatis cumque
              mollitia neque illo ratione. Facere odit soluta quas iusto?
            </p>
            <div className="social-media">
                <button><FacebookIcon/></button>
                <button><YouTubeIcon/></button>
                <button><InstagramIcon/></button>
                <button><XIcon/></button>
                <button><WhatsAppIcon/></button>
            </div>
          </div>
          <div className="right">
            <img src="../images/about.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
