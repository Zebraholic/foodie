import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_AUTH_TOKEN}`,
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.pageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>{page.title}</p>
      </header>
    </div>
  );
  
}

export default App
