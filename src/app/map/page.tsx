
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { HeartPulse, Sofa, ShieldHalf } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const supportStations = [
  {
    id: 1,
    name: 'Wellness Zone A',
    type: 'Wellness',
    Icon: HeartPulse,
    position: { top: '20%', left: '30%' },
  },
  {
    id: 2,
    name: 'Quiet Space 1',
    type: 'Relaxation',
    Icon: Sofa,
    position: { top: '45%', left: '50%' },
  },
  {
    id: 3,
    name: 'Medical Tent',
    type: 'Medical',
    Icon: ShieldHalf,
    position: { top: '70%', left: '25%' },
  },
  {
    id: 4,
    name: 'Wellness Zone B',
    type: 'Wellness',
    Icon: HeartPulse,
    position: { top: '50%', left: '80%' },
  },
];

export default function MapPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <Card>
        <CardHeader>
          <CardTitle>Interactive Event Map</CardTitle>
        </CardHeader>
        <CardContent>
          <TooltipProvider>
            <div className="relative w-full overflow-hidden rounded-lg border">
              <Image
                src="https://placehold.co/1200x800.png"
                alt="Event Map"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
                data-ai-hint="event map"
              />
              {supportStations.map((station) => (
                <Tooltip key={station.id}>
                  <TooltipTrigger
                    asChild
                    style={station.position}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                  >
                    <button className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
                      <station.Icon className="h-5 w-5" />
                      <span className="sr-only">{station.name}</span>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold">{station.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {station.type} Area
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </CardContent>
      </Card>
    </main>
  );
}
