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
