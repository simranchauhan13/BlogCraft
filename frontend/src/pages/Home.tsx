import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowRight } from 'lucide-react'
import {jwtDecode,JwtPayload} from "jwt-decode";
import { useEffect,useState } from "react";

interface CustomJwtPayload extends JwtPayload {
  id?: number;
  name?: string;
}

const Home = () => {
  const [user, setUser] = useState<CustomJwtPayload | null>(null);;
    
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded: CustomJwtPayload = jwtDecode<CustomJwtPayload>(token);
        setUser(decoded);
        // setUser(decoded);

      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []); 

  return (
    <div>
      <Header></Header>
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
          <section className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="container mx-auto text-center max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Stories that <span className="text-primary">inspire</span> and <span className="text-primary">inform</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
                Discover insightful articles about technology, design, and the craft of building digital experiences. 
                Join our community of writers and readers passionate about sharing knowledge.
              </p>
            </div>
          </section>

          
          <h1 className="text-3xl font-semibold mb-6 text-black text-center">Join Our Community for Free</h1>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-md">
            <Link to="/signup" className="w-full lg:w-1/2 mb-4 lg:mb-0">
              <button type="button" className="w-full bg-white text-sm text-gray-800 p-3 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                Sign Up
              </button>
            </Link>
            <Link to="/signin" className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:ml-2">
              <button type="button" className="w-full bg-white text-sm text-gray-800 p-3 rounded-md shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                Sign In
              </button>
            </Link>
          </div>
          <p className="mt-8 text-gray-600 text-center">Please sign up to access our blogs.</p>
          <Link to={user?"/blogs":"/signin"} className="mt-4">
            <button type="button" className="bg-gray-900 w-60 flex justify-center items-center text-white text-lg px-10 py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 transition-colors duration-300">
              Start Reading
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </Link>
        </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
