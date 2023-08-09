import Link from 'next/link';


const Nav = () => {
    return (
        <div className='flex justify-center items-center mt-2'>
            <nav className='flex gap-3'>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contacts">Contacts</Link>
            </nav>
        </div>
    );
};

export default Nav;