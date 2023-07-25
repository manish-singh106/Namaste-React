//creating an element h1 with property id heading and child hello world
const heading1 = React.createElement('h1', {id:'heading'}, "Hello world");


//creating a child element
const page = React.createElement('div', {id: 'parent'}, React.createElement('h2', {id: 'heading2'}, "heading2"));


//creating a sibling elements
const parent = React.createElement('div', {id: 'parent'}, [React.createElement('h1', {id: 'child1'}, "child1"), React.createElement('h2',{id: 'child2'}, 'child2')]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
