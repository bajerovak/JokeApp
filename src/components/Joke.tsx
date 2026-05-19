import type { Joke } from "../type";

interface JokeProps {
  joke: Joke;
}


export default function Joke({ joke }: JokeProps) {
  return (
    <div>
      <h2>{joke.setup}</h2>
      <p>{joke.punchline}</p>
      <p>Category: {joke.category}</p>
      <p>Rating: {joke.rating}</p>
    </div>
  );
}
