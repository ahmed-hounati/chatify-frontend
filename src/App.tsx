import NavBar from "./components/NavBar/NavBar"
import Sidebar from "./components/SideBar/SideBar"

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1">
        <Sidebar />
        {/* <ChatWindow /> */}
      </div>
    </div>
  )
}

export default App
