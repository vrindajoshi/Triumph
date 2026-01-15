import Background from '../components/parents/background.jsx';
import SongTable from '../components/songtable.jsx';
import Card from '../components/parents/card.jsx';

export default function ToPlay({ inputValue }) {
  return (
    <Background>
      <Card>
        <h1>Welcome, {inputValue}!</h1>
        <SongTable personId={inputValue} />
      </Card>
    </Background>
  );
}
