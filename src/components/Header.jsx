import { logo } from '../assets';


const Header = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                <img
                    src={logo} alt="summarizeit"
                    className='w-28 object-contain'
                />
                <button
                    type='button'
                    className='black_btn'
                >      
                Join
                </button>
            </nav>
        </header>
    )
}

export default Header
