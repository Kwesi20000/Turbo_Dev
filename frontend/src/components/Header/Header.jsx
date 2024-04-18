import './Header.css' // Importing the CSS file for styling

// Functional component for the header
const Header = () => {
  return (
    <div className='header'> {/* Main header container */}
        <div className="header-content"> {/* Content within the header */}
            <h2>Order your favourite food here</h2> {/* Main heading */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci eum molestias, unde quasi ipsa magnam necessitatibus veritatis architecto. Consequuntur, sunt totam. Perspiciatis necessitatibus iste sit nulla excepturi, ratione nobis eos!</p> {/* Paragraph */}
            <button>View Menu</button> {/* Button to view menu */}
        </div>
    </div>
  )
}

export default Header // Exporting the component for use in other files
