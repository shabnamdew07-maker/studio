
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

export default function SignOutPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-4 md:gap-8 md:p-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Out</CardTitle>
          <CardDescription>Are you sure you want to sign out?</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Button >
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
          <Button variant="outline" asChild>
            <Link href="/dashboard">Cancel</Link>
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}
