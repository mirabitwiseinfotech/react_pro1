import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>My App! welcome</h1>
        </div>
    )
}

// const ReactElement= {
//     type:'a',
//     props:{
//         href:'https://www.google.com',
//         target:'_blank',
//         },
//         children:['Click me to go to Google']
// }

const AnotherElement=(
    <a href='https://www.google.com' target='_blank'>Click me to go to Google</a>
)
const anotherusername="Mira Nena"
const reactElement=React.createElement(
    'a',
    {href:'https://www.google.com',target:'_blank'},
    'Click me to go to Google',anotherusername)
ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
 
)
