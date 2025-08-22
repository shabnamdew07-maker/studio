
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Ticket } from 'lucide-react';
import Image from 'next/image';

const shows = [
    {
      id: 1,
      title: 'Live Music Concert',
      description: 'An electrifying performance by top artists.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'music concert',
    },
    {
      id: 2,
      title: 'Magic Show',
      description: 'Experience mind-bending illusions and magic tricks.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'magic show',
    },
    {
      id: 3,
      title: 'Stand-up Comedy',
      description: 'Laugh out loud with the best comedians in town.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'comedy standup',
    },
      {
      id: 4,
      title: 'Theater Play',
      description: 'A captivating drama that will keep you on the edge of your seat.',
      image: 'https://placehold.co/600x400.png',
      dataAiHint: 'theater play',
    },
  ];

export default function ShowsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="mx-auto w-full max-w-6xl">
        <h1 className="mb-6 text-3xl font-bold tracking-tight">
          Book Tickets for Shows
        </h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {shows.map((show) => (
            <Card key={show.id}>
              <CardHeader>
                <Image
                    src={show.image}
                    alt={show.title}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                    data-ai-hint={show.dataAiHint}
                />
                <CardTitle className="pt-4">{show.title}</CardTitle>
                <CardDescription>{show.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Additional content can go here */}
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  <Ticket className="mr-2 h-4 w-4" />
                  Book Ticket
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
