'use server';

/**
 * @fileOverview An AI tool that provides personalized recommendations for projects or experiences to showcase in different contexts.
 *
 * - personalizedRecommendation - A function that generates personalized recommendations based on context.
 * - PersonalizedRecommendationInput - The input type for the personalizedRecommendation function.
 * - PersonalizedRecommendationOutput - The return type for the personalizedRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationInputSchema = z.object({
  context: z
    .string()
    .describe(
      'The specific context for the recommendation, such as job application, networking, etc.'
    ),
  profile: z.string().describe(
    'A detailed description of the user profile, including skills, experience, and background.'
  ),
  projects: z
    .string()
    .array()
    .describe('A list of project descriptions to consider for recommendation.'),
  experiences: z
    .string()
    .array()
    .describe(
      'A list of experience descriptions to consider for recommendation.'
    ),
});
export type PersonalizedRecommendationInput = z.infer<
  typeof PersonalizedRecommendationInputSchema
>;

const PersonalizedRecommendationOutputSchema = z.object({
  recommendedProjects: z
    .string()
    .array()
    .describe(
      'A list of recommended projects that are most relevant for the given context.'
    ),
  recommendedExperiences: z
    .string()
    .array()
    .describe(
      'A list of recommended experiences that are most relevant for the given context.'
    ),
  reasoning: z
    .string()
    .describe(
      'The AI reasoning behind the project and experience recommendations.'
    ),
});
export type PersonalizedRecommendationOutput = z.infer<
  typeof PersonalizedRecommendationOutputSchema
>;

export async function personalizedRecommendation(
  input: PersonalizedRecommendationInput
): Promise<PersonalizedRecommendationOutput> {
  return personalizedRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationPrompt',
  input: {schema: PersonalizedRecommendationInputSchema},
  output: {schema: PersonalizedRecommendationOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized recommendations for projects and experiences based on a given context.

  Given the following user profile, project descriptions, experience descriptions, and context, determine which projects and experiences would be most persuasive and provide a brief reasoning for your choices.

  Context: {{{context}}}
  Profile: {{{profile}}}
  Projects: {{#each projects}}- {{{this}}}{{/each}}
  Experiences: {{#each experiences}}- {{{this}}}{{/each}}

  Format your response as a JSON object with 'recommendedProjects', 'recommendedExperiences', and 'reasoning' fields.
  `, // Ensure the prompt adheres to Handlebars templating and requests a JSON response.
});

const personalizedRecommendationFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationFlow',
    inputSchema: PersonalizedRecommendationInputSchema,
    outputSchema: PersonalizedRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
