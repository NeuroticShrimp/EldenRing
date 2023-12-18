import './App.css';
import BossCard from './BossCard';
import Navbar from './Navbar';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

function App() {
  return (
      <Theme
      accentColor="mint">
        <Navbar />
        <BossCard />
      </Theme>
  );
}

export default App;
