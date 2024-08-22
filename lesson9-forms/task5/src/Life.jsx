import React, { Component } from 'react';

export default class Life extends Component {
  constructor(props) {
    super(props);

    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  // Выводит в консоль текст перед каждым рендером, кроме первого.
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return true; // Обязательно возвращаем true, чтобы рендер не был предотвращен
  }

  // Выводит в консоль текст после каждого рендера, кроме первого.
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  // Выводит в консоль текст перед удалением компонента.
  componentWillUnmount() {
    console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM'); // Виводимо текст у консоль на кожному рендері
    return (
      <div>
        <span>Life</span>
      </div>
    );
  }
}

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/*!

У функціональних компонентах аналогічна поведінка досягається за допомогою хуків, таких як `useState`, `useEffect`, і `useRef`. Ось як можна реалізувати ту саму логіку у функціональному компоненті:

import React, { useState, useEffect } from 'react';

const Life = () => {
  const [state, setState] = useState('good place to create state');

  console.log('render: return React element to build DOM'); // Виводимо текст у консоль на кожному рендері

  useEffect(() => {
    console.log('componentDidMount: API calls, subscriptions');

    // Це імітує componentWillUnmount
    return () => {
      console.log('componentWillUnmount: cleanup before DOM related to component will be removed');
    };
  }, []); // Порожній масив залежностей означає, що цей ефект виконується лише один раз після першого рендеру

  useEffect(() => {
    console.log('componentDidUpdate: some updates based on new props');
  }); // Якщо немає масиву залежностей, цей ефект виконується після кожного рендеру

  return (
    <div>
      <span>Life</span>
    </div>
  );
};

export default Life;

### Що відбувається:

1. **Рендер**:
   - Кожен рендер викликає `console.log('render: return React element to build DOM')`, подібно до того, як це робить метод `render()` в класовому компоненті.

2. **Аналог `componentDidMount`**:
   - Використання `useEffect` з порожнім масивом залежностей (`[]`) імітує поведінку `componentDidMount`. Це означає, що `console.log('componentDidMount: API calls, subscriptions')` виконується лише після першого рендеру.

3. **Аналог `componentWillUnmount`**:
   - Функція, що повертається з `useEffect`, виконується перед видаленням компонента з DOM, аналогічно до `componentWillUnmount`.

4. **Аналог `componentDidUpdate`**:
   - Виклик `useEffect` без масиву залежностей виконує код після кожного рендеру, подібно до `componentDidUpdate`. Однак тут він буде виконуватися після кожного рендеру, а не тільки після оновлень.

5. **Аналог `shouldComponentUpdate`**:
   - У функціональних компонентах немає прямого аналога до `shouldComponentUpdate`. Замість цього оптимізацію рендерів можна досягти за допомогою хуків, таких як `React.memo` або `useMemo` для запобігання непотрібним рендерам.

6. **Залежності в `useEffect`**:
   - Якщо передати масив залежностей у `useEffect`, ефект буде виконуватися тільки після зміни залежностей у цьому масиві. Наприклад:
   
   useEffect(() => {
     console.log('Effect runs when `someValue` changes');
   }, [someValue]);

   - Тут `useEffect` буде виконуватися після кожного рендеру, якщо `someValue` змінюється. Якщо передати порожній масив (`[]`), ефект виконуватиметься лише один раз після першого рендеру.

   Таким чином, використання масиву залежностей в `useEffect` дозволяє контролювати частоту виконання побічних ефектів, оптимізуючи рендери та покращуючи продуктивність.
*/
