function App() {
  return (
    <div>
      <h1>history</h1>
      <ul>{Object.keys(chrome).map(item => <li>{item}</li>)}</ul>
    </div>
  )
}

export default App