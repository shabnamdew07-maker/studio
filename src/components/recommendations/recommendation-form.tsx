
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getRecommendationsAction } from '@/lib/actions';
import type { PersonalizedRecommendationsInput, PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';
import { Loader2, Sparkles } from 'lucide-react';

const formSchema = z.object({
  mood: z.string().min(1, 'Please select your current mood.'),
  participationLevel: z.string().min(1, 'Please select your participation level.'),
  interests: z.string().min(1, 'Please list at least one interest.'),
});

export function RecommendationForm() {
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mood: '',
      participationLevel: '',
      interests: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendations(null);
    const result = await getRecommendationsAction(values as PersonalizedRecommendationsInput);
    setRecommendations(result);
    setIsLoading(false);
  }

  return (
    <div className="w-full max-w-2xl">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Tell Us About Yourself</CardTitle>
              <CardDescription>
                This will help us tailor recommendations for you.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How are you feeling right now?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your mood" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="happy">Happy</SelectItem>
                        <SelectItem value="stressed">Stressed</SelectItem>
                        <SelectItem value="neutral">Neutral</SelectItem>
                        <SelectItem value="anxious">Anxious</SelectItem>
                        <SelectItem value="energetic">Energetic</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="participationLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your participation level so far?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select participation level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="high">High</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="low">Low</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your interests?</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., music, technology, networking" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Get Recommendations
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {isLoading && (
         <Card className="mt-6">
            <CardHeader className="items-center text-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary"/>
                <CardTitle>Generating Your Recommendations...</CardTitle>
                <CardDescription>Our AI is crafting some suggestions for you.</CardDescription>
            </CardHeader>
         </Card>
      )}

      {recommendations && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Here Are Your Recommendations</CardTitle>
            <CardDescription>
              We think you might enjoy these activities and resources.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendations.recommendations?.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
             {recommendations.error && (
                <p className="text-destructive">{recommendations.error}</p>
             )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
