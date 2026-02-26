import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Work from "@/pages/work";
import FilmDetail from "@/pages/film-detail";
import CommercialDetail from "@/pages/commercial-detail";
import MusicVideoDetail from "@/pages/music-video-detail";
import Contact from "@/pages/contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/work/films/:slug" component={FilmDetail} />
      <Route path="/work/commercials/:slug" component={CommercialDetail} />
      <Route path="/work/music-videos/:slug" component={MusicVideoDetail} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
