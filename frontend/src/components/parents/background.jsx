import bkgdImage from '../../assets/bg.svg';

export default function Background({ children }) {
  return (
    <div 
      className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center bg-white"
      style={{ backgroundImage: `url(${bkgdImage})` }}
      role="presentation"
    >
      {children}
    </div>
  );
}