
function App() {
  const time = new Date().getSeconds();
  const isEven = time % 2 === 0;

  const styles = {
    color: isEven ? '#fff' : '#000',
    backgroundColor: isEven ? '#000' : '#fff',
  }

  return (
    <div className="seconds" style={styles}>
      {`Now is ${time}`}
    </div>
  )
}

export default App
