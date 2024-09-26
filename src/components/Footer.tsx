import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="footer p-4 text-neutral-content" style={{backgroundColor: '#F26EAC'}}>
      <div className="items-center w-full place-content-between grid-flow-col">
        <a href="https://csulbwic.com/" target='_blank' rel="noopener noreferrer">
          <Image
            src={"/images/wic_logo_white.png"}
            alt='wiclogo'
            width={50}
            height={50}
          />
        </a>
        <p className="text-white ">Copyright © MarinaHacks. All Rights Reserved</p>
      </div>
    </footer>
  );
};
