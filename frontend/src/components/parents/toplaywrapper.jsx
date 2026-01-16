import { useSearchParams } from 'react-router-dom';
import ToPlay from '../../pages/toplay.jsx';

function ToPlayWrapper() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name') || 'Guest';
  
  console.log('Name from URL:', name);
  
  return <ToPlay inputValue={name} />;
}

export default ToPlayWrapper;