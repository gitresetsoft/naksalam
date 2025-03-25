
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <AlertTriangle className="h-24 w-24 text-primary animate-pulse-subtle" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          We couldn't find the page you're looking for
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Home className="mr-2 h-5 w-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
