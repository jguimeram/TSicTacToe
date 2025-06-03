import Board from "./components/Board"
function App() {


  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Tic Tac Toe</h1>

      <Board />
      <div className="mt-8 text-center">
        <div id="winner" className="text-2xl font-bold text-green-600 mb-4 h-8"></div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
          Reset Game
        </button>
      </div>
    </div>
  )
}

export default App
