import NavBar from "./components/NavBar/NavBar"
import Sidebar from "./components/SideBar/SideBar"
import HomePage from "./pages/Home"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <HomePage />
        {/* <ChatWindow /> */}
      </div>
    </div>
  )
}

export default App
