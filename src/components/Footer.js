const Footer = ({darkMode}) => {
    return(
        <footer className='footer'>
            <p style={{color: darkMode ? 'white' : 'black'}}>Copyright &copy; 2021</p>
        </footer>
    )
}
export default Footer