"use client";

import { useState, useTransition } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getRecommendation } from '@/app/actions';
import type { PersonalizedRecommendationOutput } from '@/ai/flows/personalized-recommendation';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Terminal, Bot, Lightbulb } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const recommendationContexts = [
  "A job application for a Backend Developer role.",
  "Networking at a tech conference.",
  "A freelance inquiry for a Python automation script.",
  "A university project presentation.",
  "A job application for a Technical Support Engineer role."
];

export default function AiRecommender() {
  const [context, setContext] = useState('');
  const [result, setResult] = useState<PersonalizedRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!context) {
      setError('Please select a context to get a recommendation.');
      return;
    }

    startTransition(async () => {
      const response = await getRecommendation(context);
      if ('error' in response) {
        setError(response.error);
      } else {
        setResult(response);
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 font-headline">
            <Bot /> AI-Powered Suggestion
          </CardTitle>
          <CardDescription>
            Choose a scenario, and I'll suggest which of my projects and experiences to highlight.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <Select onValueChange={setContext} value={context}>
              <SelectTrigger className="flex-grow">
                <SelectValue placeholder="Select a context..." />
              </SelectTrigger>
              <SelectContent>
                {recommendationContexts.map((ctx) => (
                  <SelectItem key={ctx} value={ctx}>{ctx}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" disabled={isPending || !context} className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {isPending ? 'Generating...' : 'Get Recommendation'}
            </Button>
          </form>

          {error && (
            <Alert variant="destructive" className="mt-6">
              <Terminal className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {isPending && (
            <div className="mt-6 space-y-4">
              <Skeleton className="h-8 w-1/3" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-8 w-1/4 mt-4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          )}

          {result && (
            <div className="mt-6 space-y-6">
              <div>
                <h3 className="font-headline text-lg font-semibold mb-2">Recommended Projects</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {result.recommendedProjects.map((proj, i) => <li key={i}>{proj}</li>)}
                </ul>
              </div>
              <div>
                <h3 className="font-headline text-lg font-semibold mb-2">Recommended Experiences</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {result.recommendedExperiences.map((exp, i) => <li key={i}>{exp}</li>)}
                </ul>
              </div>
              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertTitle>AI Reasoning</AlertTitle>
                <AlertDescription>{result.reasoning}</AlertDescription>
              </Alert>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
