import './App.css';
import { Header } from './Header'
import { Main } from  './Main'
import { Footer} from "./Footer";

const skills = ['Python', 'PHP', 'Javascript', 'CSS', 'HTML', 'Bash'];

function App() {
  return (
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <Header />
      <Main skills={skills} login={'JuliRash'}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
