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
const component = React.createElement(HeaderComponent, { name: 'Jone' }, 'Text -- John');
const component2 = React.createElement(HeaderComponent, { name: 'Oleg' },'Text -- Oleg');

const parentElement = React.createElement('section', {}, component, component2);

const root = document.querySelector('#root');

ReactDOM.render(parentElement, root);


/*
1. Реакт - бібліотека для створення користувацьких інтерфейсів
2. Ви можете використовувати як звичайний JS, так і Реакт. Це може бути одночасно
3. Пропси - це дані, які можна передавати копмпоненти для того, щоб налаштовуватит зовнішній вигляд компоненти
4. Для того щоб Реакт нам щось відобразив, нам потрібно викликати ReactDom.render()
   Він приймає 2 параметри:
 - елемент, який потрібно відрендерити
 - елемент, в який потрібно рендерити
5. Реакт оперує Реакт-елементами.
Реакт-елемент - це обʼєкт.
Реакт-елемент набагато легший, ніж той самий елемент у нативному Dom'i
6. З цих Реакт-елементів як маленьких блоків складаються Реакт-компоненти
А з Реакт-компонент складаються сторінки, які будуть бачити наші користувачі
   
*/
