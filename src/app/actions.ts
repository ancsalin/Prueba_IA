"use server";

import { personalizedRecommendation, type PersonalizedRecommendationOutput } from '@/ai/flows/personalized-recommendation';
import { profile, projects, experiences } from '@/lib/data';

export async function getRecommendation(context: string): Promise<PersonalizedRecommendationOutput | { error: string }> {
  if (!context) {
    return { error: 'Please select a context.' };
  }

  const input = {
    context,
    profile,
    projects: projects.map(p => `${p.title}: ${p.description}`),
    experiences,
  };

  try {
    const result = await personalizedRecommendation(input);
    return result;
  } catch (e) {
    console.error(e);
    return { error: 'An error occurred while generating the recommendation. Please try again.' };
  }
}
