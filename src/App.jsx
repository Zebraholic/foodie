import useContentful from './hooks/use-contenful.js'
import Person from './components/person.jsx'
import Bookmarks from './components/bookmarks.jsx'
import DogToys from './components/dogtoy.jsx';
import './styles.css'; 
import './App.css'

const query = `
query {
  person(id: "2mHXoedlQc5VGfSu1toZSr") {
    name
    socialGithub
    socialLinkedin
    topicTitle
    bio {
      json
    }
    avatar {
      url
    }
    image {
      url
    }
  }
  bookmarkCollection {
    items {
      sys {
        id
      }
      title
      url
      comment
      tagsCollection {
        items {
          title
        }
      }
    }
  }
  dogToyCollection {
    total
    items {
      sys {
        id
      }
      toyName
      estimatedPrice
      linkToBuy
      image {
        url
      }
    }
  }  
}
`

function App() {
  let {data, errors} = useContentful(query)

  // handle errors
  if (errors) {
    return <span style={{color: "red"}}>{errors.map(error => error.message).join(", ")}</span>
  }
  if (!data) {
    return "Loading...";
  }

const {bookmarkCollection, person, dogToyCollection} = data;

  // render the fetched Contentful data
  return (
    <div className="sm:text-center">
        <Person person={person} />
        <Bookmarks bookmarks={bookmarkCollection.items} headline="My Bookmarks"/> 
        <DogToys dogToys={dogToyCollection.items}/>   
    </div>
  );
  
}

export default App
