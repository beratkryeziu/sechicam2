import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, MapPin, Phone } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This is Option B: Client-side log/mock submission as backend logic is restricted
    console.log("Form Submitted:", values);
    
    // Simulate network delay
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you shortly.",
      });
      form.reset();
    }, 1000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      
      <main className="page flex-1 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-6">Contact</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Available for narrative features, commercials, and music videos worldwide.
                Please get in touch to discuss your upcoming project.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/50">Direct Contact</h3>
                <div className="flex items-center gap-3 text-lg">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:jetmirzenelaj1@gmail.com" className="text-hover-accent hover:underline">
                    jetmirzenelaj1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+38344628276" className="text-hover-accent hover:underline">
                    +383 44 628 276
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/50">Location</h3>
                <div className="flex items-center gap-3 text-lg">
                  <MapPin className="w-5 h-5" />
                  <span>Prishtine, Kosovo</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest font-medium text-foreground/50">Social</h3>
                <div className="flex gap-6">
                  <a
                    href="https://www.instagram.com/sechicam/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hover-accent text-lg hover:underline decoration-1 underline-offset-4"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.imdb.com/name/nm8605902/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-hover-accent text-lg hover:underline decoration-1 underline-offset-4"
                  >
                    IMDb
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-8 md:p-12 border border-border/50">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Jane Doe" {...field} className="rounded-none bg-background border-border focus:border-foreground transition-colors h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="jane@example.com" {...field} className="rounded-none bg-background border-border focus:border-foreground transition-colors h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-xs tracking-wider">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          className="rounded-none bg-background border-border focus:border-foreground transition-colors min-h-[150px] resize-none p-4" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full rounded-none h-12 uppercase tracking-wide text-sm font-medium">Send Message</Button>
              </form>
            </Form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
