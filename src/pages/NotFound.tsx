import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="gap-2">
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild className="gap-2">
            <a onClick={() => window.history.back()} className="cursor-pointer">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
