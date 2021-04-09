marked.setOptions({breaks: true});
const renderer = new marked.Renderer();
const APP = () => {
  const [text, setText] = React.useState("");

  return (
    <div className="text-center px-5"> 
        <h4> Markdown Previewer App </h4> 
        <textarea className="textarea" value={text} onChange={x => setText(x.target.value)} name="text" id="text" cols="30" rows="10"></textarea> 
        <h4 className="mt-3">Code Output</h4>
        <MarkPreview  markdown={text}/>
     </div>
  );
}
const MarkPreview = ({markdown}) => {
   return <div dangerouslySetInnerHTML = {{ __html: marked(markdown, {renderer: renderer}) }}  id="preview"> 
   </div>}

ReactDOM.render(<APP />, document.getElementById('app'));