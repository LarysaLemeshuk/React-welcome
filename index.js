const root = document.querySelector('#root');

const h1 = React.createElement('h1', {}, 'hello React!!!!'); // React-element

console.log(ReactDOM);

const anotherH1 = document.createElement('h1');// HTML-element
console.dir(anotherH1);

ReactDOM.render(h1, root);
