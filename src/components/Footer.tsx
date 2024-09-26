import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="footer p-4 text-neutral-content" style={{backgroundColor: '#bcc5f9'}}>
      <div className="items-center w-full place-content-between grid-flow-col">
        <a href="https://csulbwic.com/" target='_blank' rel="noopener noreferrer">
          <Image
            src={"/images/wic_logo_white.png"}
            alt='wiclogo'
            width={100}
            height={100}
          />
        </a>
        <p className="text-white text-lg">Copyright © MarinaHacks. All Rights Reserved</p>
      </div>
    </footer>
  );
};
