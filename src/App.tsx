
import './App.css'
import Joke from './components/Joke'
import type {Joke as JokeType} from './type'
import { useEffect, useState } from 'react'

function App() {
  const [jokes, setJokes] = useState<JokeType[]>([]);

  useEffect(() => {
    const fetchJoke = async (): Promise<void> => {
      const response = await fetch('http://localhost:8080/jokes')
      const data = (await response.json()) as JokeType;
      setJokes(data);
    };
    fetchJoke()
  }, []);

  return (
    <div>
      <h1>Joke App</h1>
        {jokes.map((joke) => {
          return <Joke key={joke.id} joke={joke} />
        })}
    </div>
  );
}

export default App;

