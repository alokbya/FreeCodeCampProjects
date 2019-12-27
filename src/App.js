import React from 'react';
import logo from './logo.svg';
import './App.css';

var marked = require('marked'); // require marked library


// const renderer = new marked.Renderer();
// renderer.link = function (href, title, text) {
//   return `<a target="_blank" href="${href}">${text}` + '</a>';
// }

// REDUX

// Actions

// Action Creators

// Action Reducers

// REACT

// Presenter Component
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      editorMaximized: false,
      viewerMaximized: false,
      fresh: true
    };
  this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
       input: event.target.value,
       fresh: false
    });
  }
  render() {
  if(this.state.fresh){
    this.state.input = placeHolder;
  }
    return (
      <div className="App">
        <TextEditor value={this.state.input} onChange={this.handleChange}/>
        <MarkupView view={this.state.input}/>
        <Footer />
      </div>
    );
  }
}

// STATELESS Input Editor Component
class TextEditor extends React.Component {
  constructor(props){
    super(props);
  }  
  render () {
    return (
    <textarea value={this.props.value} onChange={this.props.onChange}id="editor"></textarea>
      );
  }
}
// View
class MarkupView extends React.Component {
  constructor(props){
    super(props);
  }  

  render () {
    return (
        <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.props.view)}} />
    );
  }
}
// Footer
// View
class Footer extends React.Component {
  constructor(props){
    super(props);
  }  
  render () {
    return (
      <div id="footer">
        <div>Markdown Viewer</div>
        
      </div>
    );
  }
}
// REACT &  REDUX

// Maps

// Store Initialization 

// Connect, Provider

// render
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


const placeHolder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

export default App;