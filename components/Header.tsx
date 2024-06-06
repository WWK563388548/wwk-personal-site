import Link from 'next/link';
import Nav from './Nav';
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            WWK<span className='text-accent'>.</span>
          </h1>
        </Link>
        {/* PC nav & contact me button */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className='xl:hidden'>
          Mobile nav
        </div>
      </div>
    </header>
  )
};

export default Header;