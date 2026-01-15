import Background from '../components/parents/background.jsx';
import SongTable from '../components/songtable.jsx';
import Card from '../components/parents/card.jsx';

export default function ToPlay({ inputValue }) {
  return (
    <Background>
        <Card>
        <SongTable personId={inputValue} />
      </Card>
    </Background>
  );
}
