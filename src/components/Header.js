import Button from './Button'

const Header = ({ title, darkMode, changeMode }) => {
    return(
        <header className='header'>
            <Button 
                color={darkMode ? 'white' : '#262626'}
                textColor={darkMode ? "black" : 'white'}
                text='Menu' />
            <h1 style={ {color: darkMode? 'white' : 'black'}}>{title}</h1>
            <Button 
                text={darkMode? 'Light Mode' : 'Dark Mode'} 
                color={darkMode ? 'white' : '#262626'}
                textColor={darkMode ? "black" : 'white'}
                onClick={changeMode}
                />
        </header>
    )
}

export default Header