class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment() {
    // todo: state.count++;
    this.setState({
      count: this.state.count + 1,
    });
    console.log('click');
  }

decrement(){
    // todo: this.state.count --;
    this.setState({
        count: this.state.count - 1,
      });
}


  render() {
    const h2 = React.createElement('h2', {}, this.state.count);
    const buttonIncrement = React.createElement(
      'button',
      {
        onClick: () => {
          this.increment();
        },
      },
      '+'
    );
    const buttonDecrement = React.createElement(
        'button',
        {
          onClick: () => {
            this.decrement();
          },
        },
        '-'
      );
    return React.createElement(React.Fragment, {}, h2, buttonIncrement, buttonDecrement);
  }
}

const component = React.createElement(Counter);

const root = document.querySelector('#root');

ReactDOM.render(component, root);



/*

1. Зробіть такий же counter, який крім інкременту буде вміти ще й декрементувати лічильник.
1*. Лічильник не має опускатись нижче нуля.

2. Реалізувати крок лічильника

*/

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
 7.Стан компоненти - такідані, які можуть змінюватися за час життя нашої компоненти  
*/
