import { useLocation, Link } from "react-router";
import { motion } from "framer-motion";
import { AlertOctagon, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    const location = useLocation();

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
            >
                <div className="flex justify-center mb-6">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 2
                        }}
                    >
                        <AlertOctagon className="h-24 w-24 text-primary/80" />
                    </motion.div>
                </div>

                <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>

                <p className="text-muted-foreground mb-8">
                    Sorry, we couldn't find the page you're looking for.
                    The URL <span className="font-mono bg-muted px-1 py-0.5 rounded text-sm">{location.pathname}</span> might be
                    misspelled or the page may have been moved or deleted.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="default">
                        <Link to="/">
                            <Home className="mr-2" size={18} />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
