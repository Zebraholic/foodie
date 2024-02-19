import NavHeader from '../components/NavHeader.jsx'
import useContentful from '../hooks/use-contenful.js'
import Bookmarks from '../components/Bookmarks.jsx'


const query = `
query {
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
}
`


function AboutUs() {
    let {data, errors} = useContentful(query)

  // handle errors
  if (errors) {
    return <span style={{color: "red"}}>{errors.map(error => error.message).join(", ")}</span>
  }
  if (!data) {
    return "Loading...";
  }

const {bookmarkCollection} = data;

    return (
        <>      
            <NavHeader />
            <div>
                <h1>About Us</h1>
                <p>Welcome to our website! We are a team of passionate food enthusiasts who love to explore different cuisines and share our experiences with others.</p>
                <p>On this platform, you will find a variety of recipes, restaurant reviews, and cooking tips to help you on your culinary journey.</p>
                <p>Feel free to browse through our content and get inspired to try new dishes or visit exciting food destinations.</p>
            </div>
            <Bookmarks bookmarks={bookmarkCollection.items} headline="My Bookmarks"/> 
        </>
    );
}

export default AboutUs;