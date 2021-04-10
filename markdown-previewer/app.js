marked.setOptions({breaks: true});
const renderer = new marked.Renderer('');
const APP = () => {
// const [text, setText] = React.useState("");
const [text, setText ]= React.useState("# This is an <h1> tag\n## You can also make subheadings\n\nOne of the **trickiest** parts of getting this project to work was learning how to use `dangerouslySetInnerHTML` to make the previewer display the output of [marked.js](https://github.com/markedjs/marked/blob/master/README.md) as HTML instead of a string.\n\nAccording to the React Documentation,\n>dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM. In general, setting HTML from code is risky because it’s easy to inadvertently expose your users to a cross-site scripting (XSS) attack.\n\nExample Code:\n```\nfunction createMarkup() {\n  return {__html: 'First &middot; Second'};\n}\n\nfunction MyComponent() {\n  return <div dangerouslySetInnerHTML={createMarkup()} />;\n}\n```\n\nJust remember to:\n- Search, Read, Ask\n");

  return (
    <div className="text-center px-5"> 
        <h1> Markdown Previewer App </h1> 
        <textarea id="editor" className="textarea" value={text} onChange={x => setText(x.target.value)} name="text" cols="30" rows="10" >  </textarea> 
        <h2 className="mt-3">Code Output</h2>
        <MarkPreview  markdown={text}/>
     </div>
  );
}
const MarkPreview = ({markdown}) => {
   return <div dangerouslySetInnerHTML = {{ __html: marked(markdown, {renderer: renderer}) }}  id="preview"> 
   </div>}

ReactDOM.render(<APP />, document.getElementById('app'));