import whiteLogo from '/Users/bjimenez/Desktop/projects/tinder-clone/src/images/white.png';
import colorLogo from '/Users/bjimenez/Desktop/projects/tinder-clone/src/images/color.png';

const Nav = ({minimal, authToken, setShowModal, showModal}) => {

    const handleClick = () => {
        setShowModal(true);
    }
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal ? colorLogo : whiteLogo} />
            </div>

            {!authToken && !minimal && <button className="nav-button" onClick={handleClick} disabled={showModal}>Log in</button>}
        </nav>
    )
}

export default Nav;