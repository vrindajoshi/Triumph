export default function Card({ children }) {
  return <>
    <div className="justify-center flex bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-lg p-8 max-w-2xl mx-auto my-20">
      {children}
    </div>
  </>;
}
   