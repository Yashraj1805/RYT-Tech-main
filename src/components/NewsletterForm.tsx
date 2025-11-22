import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { set } from 'date-fns';



const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://ryt-tech-backend.onrender.com/api/users/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Subscription failed");
      }

      setIsSuccess(true);
      toast({
        title: "Subscribed 🎉",
        description: "You've successfully subscribed to our newsletter.",
      });

    } catch (error) {
      toast({
        title: "Failed to Subscribe ❌",
        description: error.message || "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }

    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-secondary/50 border-border-neon/30 focus:border-neon transition-colors"
            disabled={isLoading || isSuccess}
            required
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading || isSuccess}
          className="gradient-premium hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          {isLoading ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
              />
              Subscribing...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Subscribed!
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
      {isSuccess && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neon text-sm mt-2 flex items-center"
        >
          <CheckCircle2 className="w-4 h-4 mr-1" />
          Welcome to our community!
        </motion.p>
      )}
    </form>
  );
};

export default NewsletterForm;
