
'use server';

import { getPersonalizedRecommendations, type PersonalizedRecommendationsInput } from '@/ai/flows/personalized-recommendations';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

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

export async function addUserToFirestore(userData: {
  username: string;
  email: string;
  mobile: string;
  age: number;
}) {
  try {
    const docRef = await addDoc(collection(db, 'users'), userData);
    console.log('Document written with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (e) {
    console.error('Error adding document: ', e);
    return { success: false, error: 'Failed to save user data.' };
  }
}
