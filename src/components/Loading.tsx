import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center"
            >
                <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                <h2 className="text-xl font-medium mb-2 tracking-wider">Loading...</h2>
                <p className="text-muted-foreground text-sm max-w-xs text-center">
                    Please wait while we prepare the content for you
                </p>
            </motion.div>
        </div>
    )
}

export default Loading;