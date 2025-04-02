
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <motion.h1
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ⚡️ Genesis Flow AI Challenge
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-center max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        45 days of team-driven AI transformation at Kanam Realty Group.
        Guided by Ketan Parikh. Led by Shafen Khan and Ceejay Teodoro.
      </motion.p>
    </main>
  );
}
