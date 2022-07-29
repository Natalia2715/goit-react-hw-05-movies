import { LoaderItem } from './Loader.styled';
import { MutatingDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <LoaderItem>
      <MutatingDots ariaLabel="loading-indicator" />
    </LoaderItem>
  );
}
