
function App() {

  const time = new Date().getSeconds();
  const colorText = time % 2 === 0 ? '#fff': '#000';
  const colorBg = time % 2 === 0 ? '#000': '#fff';

  const textColor = {
    color: colorText,
  };

  const bgColor = {
    backgroundColor: colorBg,
  }


  return (
    <div className="seconds" style={bgColor}>
      <div style={textColor}>{`Now is ${time}`}</div>
    </div>
  )
}

export default App
