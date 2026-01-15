export default function Card({ children }) {
  return (
    <div className="flex justify-center bg-[#F5F5F5]/70 backdrop-blur-md rounded-2xl shadow-lg p-20 max-w-2xl mx-auto">
      {children}
    </div>
  );
}