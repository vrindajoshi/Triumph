export default function Background({ children }) {
  return <>
    <div className="bg-[url('../../assets/bkgd.svg')] bg-cover min-h-screen flex items-center justify-center">
      {children}
    </div>
  </>; 
}
