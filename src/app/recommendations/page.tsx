
import { RecommendationForm } from '@/components/recommendations/recommendation-form';

export default function RecommendationsPage() {
  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          Personalized Recommendations
        </h1>
        <p className="mt-2 text-muted-foreground">
          Let our AI assistant help you find the best activities and resources to
          enhance your event experience based on how you're feeling.
        </p>
      </div>
      <RecommendationForm />
    </main>
  );
}
