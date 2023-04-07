import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

function App() {
  return (
    <div className="app bg-gray-200 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Contact />}>
              <Route path="add" element={<AddContact/>}/>
              <Route path="edit/:id" element={<EditContact />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
