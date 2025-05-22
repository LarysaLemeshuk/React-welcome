class HeaderComponent extends React.Component {
  anotherMethod() {} // інші якісь методи всередені компоненти не заборонені
  render() {
    // єдиний метод, який зобовʼязані визначити в класі
    const p = React.createElement('p', {}, 'Super paragraf');
    const h2 = React.createElement('h2', { title: 'Hi!' }, 'Header');
    const article = React.createElement('article', {}, h2, p);
    return article;
  }
}
const component = React.createElement(HeaderComponent);

const root = document.querySelector('#root');

ReactDOM.render(component, root);
