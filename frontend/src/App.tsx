import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Signup} from './pages/Signup';
import {Signin} from './pages/Signin';
import Home from './pages/Home';
import { Blogs } from "./pages/Blogs";
import { Blog } from "./pages/Blog";
import { Publish } from "./pages/Publish";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
//USER-    email-> govindarathore431@gmail.com    password-> asdfghjkl

function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App;
