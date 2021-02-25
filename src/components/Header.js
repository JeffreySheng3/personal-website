import Button from './Button'

const Header = ({ title, darkMode, changeMode }) => {
    return(
        <header className='header'>
            <Button 
                
                text='Menu' />
            <h1>{title}</h1>
            <Button 
                text={darkMode? 'Light Mode' : 'Dark Mode'} 
                color={darkMode ? 'white' : 'dark'}
                onClick={changeMode}
                />
        </header>
    )
}

export default Header