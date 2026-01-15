import { motion } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(31, 122, 255, 0.3)",
                "0 0 40px rgba(31, 122, 255, 0.6)",
                "0 0 20px rgba(31, 122, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full blur-xl"
          />
          
          {/* Logo Text */}
          <motion.div className="relative flex items-center gap-2">
            <motion.span
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-primary"
            >
              Hyper
            </motion.span>
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-secondary"
            >
              Link
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-muted-foreground text-sm md:text-base"
        >
          Conectando tu empresa al futuro
        </motion.p>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="w-48 h-1 bg-muted rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
          />
        </motion.div>

        {/* Pulse Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.2,
              }}
              className="w-2 h-2 rounded-full bg-secondary"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
