
'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import {
  Thermometer,
  Wind,
  Droplets,
  BarChart,
  Smile,
  Users,
  ShieldAlert,
  Ear,
  Loader2,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { NoiseChart } from '@/components/login/noise-chart';
import Link from 'next/link';
import { addUserToFirestore } from '@/lib/actions';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const loginSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters.'),
  mobile: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit mobile number.'),
  age: z.coerce.number().min(1, 'Please enter a valid age.'),
});

export default function LoginPage() {
  const { toast } = useToast();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      mobile: '',
      age: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);
    const result = await addUserToFirestore(values);
    setIsLoading(false);
    if (result.success) {
      toast({
        title: 'Login Successful',
        description: 'Your details have been saved.',
      });
      form.reset();
      router.push('/dashboard');
    } else {
      toast({
        title: 'Login Failed',
        description: result.error,
        variant: 'destructive',
      });
    }
  }

  return (
    <main className="flex flex-1 flex-col items-center gap-4 p-4 md:gap-8 md:p-8">
      <div className="w-full max-w-4xl">
        <h1 className="mb-4 text-center text-3xl font-bold tracking-tight">
          Event Login & Status
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>
                    Enter your details to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Your username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your mobile number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="Your age" {...field} value={field.value === 0 ? '' : field.value} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <Button type="submit" className="w-full" disabled={isLoading}>
                     {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                     Login
                   </Button>
                </CardContent>
              </form>
            </Form>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Weather & Air Quality</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-around text-center">
                  <div>
                    <Thermometer className="mx-auto h-8 w-8 text-primary" />
                    <p className="font-bold">24°C</p>
                    <p className="text-xs text-muted-foreground">Temperature</p>
                  </div>
                  <div>
                    <Wind className="mx-auto h-8 w-8 text-primary" />
                    <p className="font-bold">12 km/h</p>
                    <p className="text-xs text-muted-foreground">Wind</p>
                  </div>
                  <div>
                    <Droplets className="mx-auto h-8 w-8 text-primary" />
                    <p className="font-bold">AQI: 110</p>
                    <p className="text-xs text-muted-foreground">Air Quality</p>
                  </div>
                </div>
                <Alert variant="destructive">
                  <ShieldAlert className="h-4 w-4" />
                  <AlertTitle>High Air Quality Alert</AlertTitle>
                  <AlertDescription>
                    The current Air Quality Index (AQI) is high. Sensitive individuals may experience health effects.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Event Status</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                        <Smile className="h-6 w-6 text-primary"/>
                        <div>
                            <p className="font-semibold">Overall Mood</p>
                            <p className="text-sm text-muted-foreground">Positive</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-primary"/>
                        <div>
                            <p className="font-semibold">Participation</p>
                            <p className="text-sm text-muted-foreground">High</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Noise Level</CardTitle>
              </CardHeader>
              <CardContent>
                <NoiseChart />
                 <Alert variant="destructive" className="mt-4">
                  <Ear className="h-4 w-4" />
                  <AlertTitle>High Noise Level</AlertTitle>
                  <AlertDescription>
                    Noise levels are currently high. Consider using ear protection.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

             <Card>
              <CardHeader>
                <CardTitle>Medical Emergency</CardTitle>
                <CardDescription>
                  In case of a medical emergency, please use the button below to notify staff.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="destructive" className="w-full" asChild>
                  <Link href="/report">
                    <ShieldAlert className="mr-2 h-4 w-4" /> Report Emergency
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
