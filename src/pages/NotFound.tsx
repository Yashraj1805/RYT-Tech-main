import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  // Track 404 errors silently (no console output for production)
  useEffect(() => {
    // Analytics tracking can be added here if needed
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <h2 className="mb-4 text-xl text-muted-foreground">Oops! Page not found</h2>
        <Link to="/" className="text-primary underline hover:text-primary/90" aria-label="Return to homepage">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
