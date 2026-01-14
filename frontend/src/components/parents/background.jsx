import bkgdImage from '../../assets/bkgd.svg';

export default function Background({ children }) {
  return (
    <div 
      className="bg-cover min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${bkgdImage})` }}
    >
      {children}
    </div>
  );
}