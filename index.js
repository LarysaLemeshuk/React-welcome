class HeaderComponent extends React.Component {
  anotherMethod() {} // інші якісь методи всередені компоненти не заборонені
  render() {
    // єдиний метод, який зобовʼязані визначити в класі
    console.log(this.props);
    const p = React.createElement('p', {}, 'Super paragraf');
    const h2 = React.createElement(
      'h2',
      { title: 'Hi!' },
      `Hello ${this.props.name}`
    );
    const article = React.createElement('article', {}, h2, p);
    return article;
  }
}
const component = React.createElement(HeaderComponent, { name: 'Jone' });
const component2 = React.createElement(HeaderComponent, { name: 'Oleg' });

const parentElement = React.createElement('section', {}, component, component2);

const root = document.querySelector('#root');

ReactDOM.render(parentElement, root);
