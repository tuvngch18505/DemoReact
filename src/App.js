import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import AddCourse from './pages/AddCourse';
import EditCourse from './pages/EditCourse';
import { useState } from 'react';



function App() {
  const adminUser = {
    email: "tuvngch18505@fpt.edu.vn",
    password: "123456"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Signup = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Login successfully!");
      setUser({ email: details.email, password: details.password });
    } else {
      console.log("Login failed");
      setError("Invalid email or password! Please try again!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });

  }

  return (
    <>
      {
        (user.email !== "") ? (
          <div className='container-fluid'>
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <div class="collapse navbar-collapse">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to='/about' >About</Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to='/contact' >Contact</Link>
                    </li>
                  </ul>
                  <span class="navbar-text">
                    <button className='btn btn-light' onClick={Logout}>
                      Logout
                    </button>
                  </span>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addcourse" element={<AddCourse />} />
              <Route path="/editcourse" element={<EditCourse />} />
            </Routes>
          </div>
        ) : (
          <Login Login={Signup} error={error} />
        )
      }

    </>



  );
}

export default App;
