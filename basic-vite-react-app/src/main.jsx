import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// let's create a func MyApp and try to call it in render

function MyApp() {
  
  return (
    <div>
      <h1>Custom App | Its working </h1>
    </div>
  )
}
// babble convert the HTML returned from MyApp() to reactElement something like below 
// as React don't understand HTML it only understand js which are pasrsed by "babble"(a parser to convert HTML to something like object of js)

// above code converts like this but not exactly same but some of so when we pass this object to render() method it should 
// work but it will not work because the render() method is predefined by React lib and it accepts different args
// by diff type so this will not work accordingly 
// as we created customrender() on that class
const ReactElement = {
  type: 'a',
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: 'Click here to visit Google'
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Click Here</a>
);

const name = "Sachin Shah"

const originalReactElemnt = React.createElement(
  'a',
  {href: "https://google.com", target: "_blank"},
  "Click Here To Visit some site",
  name
);



ReactDOM.createRoot(document.getElementById('root')).
render(

    <App /> // it's working when we direct call the function using this method and also the way we call actual js functions
    // MyApp() // like this
    // ReactElement // not work because render() accepts different parameters 
    // anotherElement // it works as it return the HTML 
    // originalReactElemnt // it also works
  
)
