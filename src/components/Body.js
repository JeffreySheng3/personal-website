import {FaGithub, FaLinkedin, FaFacebookSquare} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

const Body = () => {
    return(
        <h1 className='body'>
            <h3 className='opening'>Hey! Thanks for taking the time to get to know me better..</h3>
            <div className='icon-container'>
                <FaGithub className='icon'></FaGithub>
                <FaLinkedin className='icon'></FaLinkedin>
                <FaFacebookSquare className='icon'></FaFacebookSquare>
            </div>
            <div className='icon-container2'>
                <GrMail className='icon'></GrMail>
            </div>
            <h3 className='closing'>We should do this again some time!</h3>
        </h1>
    )
}

export default Body