
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function GenesisFlowDeck() {
  return (
    <div className="grid gap-6 p-6">
      {/* Slide 1 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="rounded-2xl shadow-xl p-8 text-center">
          <CardContent>
            <h1 className="text-4xl font-bold mb-4">⚡ Genesis Flow AI Challenge</h1>
            <p className="text-lg mb-2">
              45 days of team-driven AI transformation at <strong>Kanam Realty Group</strong>.
            </p>
            <p className="text-base text-muted-foreground">
              Guided by <strong>Ketan Parikh</strong>. Led by <strong>Shafen Khan</strong> and <strong>Ceejay Teodoro</strong>.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Slide 2 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🚀 What is this challenge?</h2>
            <p className="text-base">
              This isn’t a course. It’s a live experiment. Every day (or week), we’ll test an AI workflow to
              solve real problems in property management—from lease listings to repair coordination to
              owner communication.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Slide 3 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🎯 Goals</h2>
            <ul className="list-disc ml-6 space-y-1 text-base">
              <li>Test 15–25 AI tools and ideas in real workflows</li>
              <li>Keep 5–10 that make us faster, clearer, more consistent</li>
              <li>Document lessons and build shared systems</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Slide 4 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
        <Card className="rounded-2xl shadow-xl p-6">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">🧠 Who’s Behind It?</h2>
            <ul className="list-disc ml-6 text-base">
              <li><strong>Ketan Parikh</strong> – Visionary, mentor, and source of prompts</li>
              <li><strong>Shafen Khan</strong> – Challenge architect, deck builder, flow starter</li>
              <li><strong>Ceejay Teodoro</strong> – Tracker-in-chief and challenge anchor</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Slide 5 */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
        <Card className="rounded-2xl shadow-xl p-6 text-center">
          <CardContent>
            <h2 className="text-2xl font-semibold mb-2">✨ Let’s Flow</h2>
            <p className="text-base mb-4">
              Want in? First prompt drops soon. Reach out to Shafen or Ceejay to get added.
            </p>
            <Button size="lg">
              I’m In <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
