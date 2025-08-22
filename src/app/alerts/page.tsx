
'use client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';

export default function AlertsPage() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">
          Customizable Alerts
        </h1>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mood Alerts</CardTitle>
              <CardDescription>
                Get notified about significant shifts in the collective event mood.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                <Label htmlFor="mood-alerts" className="flex flex-col space-y-1">
                  <span>Enable Mood Alerts</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Receive push notifications for mood changes.
                  </span>
                </Label>
                <Switch id="mood-alerts" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location Density Alerts</CardTitle>
              <CardDescription>
                Stay informed about crowd levels in different areas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                <Label htmlFor="density-alerts" className="flex flex-col space-y-1">
                  <span>Enable Density Alerts</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Get alerts when areas become too crowded.
                  </span>
                </Label>
                <Switch id="density-alerts" defaultChecked />
              </div>
              <div className="space-y-2 rounded-md border p-4">
                <Label htmlFor="density-threshold">Crowd Threshold</Label>
                <Slider id="density-threshold" defaultValue={[75]} max={100} step={5} />
                <p className="text-sm text-muted-foreground">
                    Notify when density is above 75%.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Participation Alerts</CardTitle>
              <CardDescription>
                Notifications about activity participation levels.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between space-x-2 rounded-md border p-4">
                <Label htmlFor="participation-alerts" className="flex flex-col space-y-1">
                  <span>Enable Participation Alerts</span>
                  <span className="font-normal leading-snug text-muted-foreground">
                    Get alerts for low participation in key activities.
                  </span>
                </Label>
                <Switch id="participation-alerts" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
