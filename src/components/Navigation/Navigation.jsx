import { Link, Nav } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <Link to="goit-react-hw-05-movies/">Home</Link>
      <Link to="goit-react-hw-05-movies/movies">Movies</Link>
    </Nav>
  );
}
