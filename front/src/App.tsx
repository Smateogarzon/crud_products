import SearchBar from '@/components/Searchbar/searchBar';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://crud-products-4ria.onrender.com/products');
      console.log('🚀 ~ data:', data);
    })();
  }, []);

  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <div>hola</div>
      </main>
    </>
  );
}

export default App;
