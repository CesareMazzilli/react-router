import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AppLayout from "./components/AppLayout";
import PostList from "./components/PostList";
import ContactUs from "./components/ContactUs";

function App() {
return (
  <div>
    <Router>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
        <Route path="/PostList" element={<PostList/>}/>
        </Route>
      </Routes>
    </Router>
  </div>
)
};

export default App;