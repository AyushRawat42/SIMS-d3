import React from 'react';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ScrollToTop } from '@/components/ScrollToTop';
import NotFound from '@/pages/not-found';
import { Home } from '@/pages/home';
import { ProgramPage } from '@/pages/program';
import { FacilitiesPage } from '@/pages/facilities';
import { ContactPage } from '@/pages/contact';
import { LifeAtSimsPage } from '@/pages/life-at-sims';
import { AboutPage } from '@/pages/about';
import { VisionMissionPage } from '@/pages/vision-mission';
import { LeadershipPage } from '@/pages/leadership';
import { AwardsHighlightsPage } from '@/pages/awards-highlights';
import { AdmissionsPage } from '@/pages/admissions';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/vision-mission" component={VisionMissionPage} />
      <Route path="/leadership" component={LeadershipPage} />
      <Route path="/awards-highlights" component={AwardsHighlightsPage} />
      <Route path="/admissions" component={AdmissionsPage} />
      <Route path="/programs/:slug" component={ProgramPage} />
      <Route path="/facilities" component={FacilitiesPage} />
      <Route path="/contact-us" component={ContactPage} />
      <Route path="/life-at-sims" component={LifeAtSimsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;