import Link from 'next/link';
export const NavBar = () =>{
  return(
  <div className="z-50 w-full max-h-10 fixed top-3 left-[12.5%]">
    <div className="navbar w-[75%] align-center bg-[#d8d3ff] text-[#7275B6] rounded-3xl">
  <div className="navbar-start content-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-[#d8d3ff] rounded-box w-52">
        <li><Link href="/#info">About</Link></li>
        <li><Link href="/#application">Application</Link></li>
        <li><Link href="/#team">Teams</Link></li>
        <li><Link href="/#faq">FAQs</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
        <li>
          <a>Info</a>
          <ul className="p-2 bg-[#d8d3ff]">
            <li><Link href="/#pillars">Pillars</Link></li>
            <li><Link href="/#prizes">Prizes</Link></li>
            <li><Link href="/#sponsors">Sponsors</Link></li>
          </ul>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
      <img src="/images/MarinaHacks_3.5_Landing_Logo.png" className='w-56 h-10'/>
      </a>
  </div>
  <div className="navbar-end hidden md:flex w-[80%] md:w-[60%]">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/#info">About</Link></li>
        <li><Link href="/#application">Application</Link></li>
        <li><Link href="/#team">Teams</Link></li>
        <li><Link href="/#faq">FAQs</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      <li>
        <div tabIndex={0} className="dropdown dropdown-bottom btn btn-ghost rounded-btn">
          Info
        <ul tabIndex={0} className="menu dropdown-content shadow bg-[#d8d3ff] rounded-box ">
          <li><Link href="/#pillars">Pillars</Link></li>
          <li><Link href="/#prizes">Prizes</Link></li>
          <li><Link href="/#sponsors">Sponsors</Link></li>
        </ul>
      </div>
      </li>
    </ul>
  </div>
</div>
</div>
  )
};