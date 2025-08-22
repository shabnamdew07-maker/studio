
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from '@/components/ui/accordion';
  import { Button } from '@/components/ui/button';
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Phone, FileText } from 'lucide-react';
  
  const faqItems = [
    {
      question: 'Where are the medical tents located?',
      answer:
        'Medical tents are located near the main stage (Zone A) and next to the main food court (Zone C). Please see the event map for precise locations.',
    },
    {
      question: 'What are the event hours?',
      answer:
        'The event is open from 9:00 AM to 11:00 PM daily. Specific workshop and performance times may vary. Please check the official schedule.',
    },
    {
      question: 'Is there a lost and found?',
      answer:
        'Yes, the lost and found is located at the main information booth near the event entrance. You can also report a lost item through this app.',
    },
    {
        question: 'Are there quiet spaces available?',
        answer:
          'Absolutely. We have designated quiet zones and relaxation areas. You can find them highlighted on the event map in the app.',
      },
  ];
  
  export default function ResourcesPage() {
    return (
      <main className="flex flex-1 flex-col gap-8 p-4 md:p-8">
        <div className="mx-auto w-full max-w-4xl">
          <h1 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Resource Hub
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Support Contacts</CardTitle>
                        <CardDescription>
                        Get help when you need it.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-start gap-3" asChild>
                            <a href="tel:555-123-4567">
                                <Phone className="h-4 w-4"/>
                                <div className="text-left">
                                    <div>Event Hotline</div>
                                    <div className="text-xs font-normal text-primary-foreground/80">For general inquiries</div>
                                </div>
                            </a>
                        </Button>
                        <Button className="w-full justify-start gap-3" variant="secondary" asChild>
                            <a href="tel:555-111-2222">
                                <Phone className="h-4 w-4"/>
                                <div className="text-left">
                                    <div>Medical Emergency</div>
                                    <div className="text-xs font-normal text-secondary-foreground/80">24/7 on-site support</div>
                                </div>
                            </a>
                        </Button>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Safety Guidelines</CardTitle>
                        <CardDescription>
                        Review our event safety protocols.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Button className="w-full" asChild variant="outline">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <FileText className="mr-2 h-4 w-4" />
                                View Safety PDF
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>{item.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    );
  }
  