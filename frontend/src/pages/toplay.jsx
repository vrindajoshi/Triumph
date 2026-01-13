import SongTable from '../components/songtable.jsx';

export default function ToPlay({ inputValue }) {
  return (
    <div>
      <h1>Welcome, {inputValue}!</h1>
      <SongTable/>
    </div>
  );
}

