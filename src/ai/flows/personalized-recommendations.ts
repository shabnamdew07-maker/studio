// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview A personalized recommendation AI agent that suggests event activities and resources based on user mood and participation.
 *
 * - getPersonalizedRecommendations - A function that retrieves personalized recommendations for an event attendee.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  mood: z
    .string()
    .describe("The event attendee's current mood, e.g., 'happy', 'stressed', 'neutral'."),
  participationLevel: z
    .string()
    .describe(
      'The event attendee\'s participation level in activities, e.g., \'high\', \'low\', \'medium\'.'
    ),
  interests: z
    .string()
    .describe("The event attendee's interests, e.g., 'music', 'sports', 'networking'."),
});
export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe(
      'A list of personalized recommendations for event activities and resources.'
    ),
});
export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function getPersonalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized recommendations for event attendees based on their mood, participation level, and interests.

  Mood: {{{mood}}}
  Participation Level: {{{participationLevel}}}
  Interests: {{{interests}}}

  Based on this information, suggest activities and resources that would enhance their event experience and well-being.
  Provide a variety of options to cater to different preferences.
  Here are some example resources:
  - Wellness Support Stations: Maps and directions to on-site support stations
  - Relaxation Activities: Guided meditation sessions and quiet areas
  - Networking Events: Opportunities to connect with other attendees

  Recommendations:
  `, // Ensure the prompt is well-formatted and clear
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
