
'use server';

import { getPersonalizedRecommendations, type PersonalizedRecommendationsInput } from '@/ai/flows/personalized-recommendations';

export async function getRecommendationsAction(
  input: PersonalizedRecommendationsInput
) {
  try {
    const result = await getPersonalizedRecommendations(input);
    return result;
  } catch (error) {
    console.error(error);
    return { recommendations: [], error: 'Failed to get recommendations.' };
  }
}
