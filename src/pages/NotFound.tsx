
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200 mb-4">Page Not Found</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700" asChild>
          <a href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
