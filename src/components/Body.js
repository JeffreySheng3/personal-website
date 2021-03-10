import { FaGithub, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Body = () => {
   return (
      <h1 className="body">
         <div>
            <h3 className="opening">
               Hey! Thanks for taking the time to get to know me better..
            </h3>
         </div>
         <div className="icon-container">
            <a href="https://github.com/">
               <button className="icon">
                  <FaGithub></FaGithub>
               </button>
            </a>

            <a href="https://www.linkedin.com">
               <button className="icon">
                  <FaLinkedin></FaLinkedin>
               </button>
            </a>

            <a href="https://www.facebook.com/">
               <button className="icon">
                  <FaFacebookSquare></FaFacebookSquare>
               </button>
            </a>

            <a href="https://www.github.com">
               <button className="icon">
                  <img src={GrMail} alt="" />
                  <GrMail></GrMail>
               </button>
            </a>
         </div>
         {/* <div className="icon-container2">
            <GrMail className="icon"></GrMail>
         </div> */}
         <h3 className="closing">We should do this again some time!</h3>
      </h1>
   );
};

export default Body;
