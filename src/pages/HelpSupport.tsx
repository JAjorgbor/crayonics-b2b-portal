import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MessageCircle, FileText, Info } from "lucide-react";

export default function HelpSupportPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-indigo-600">
        Help & Support
      </h1>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Contact Support</CardTitle>
            <CardDescription>
              Need help? Reach out to our dedicated support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 p-4 rounded-md border text-sm">
              <Mail className="h-5 w-5 text-indigo-600" />
              <span>support@crayonics.ai</span>
            </div>
            <div className="flex gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <MessageCircle className="mr-2 h-4 w-4" /> Submit a Request
              </Button>
              <Button variant="outline">
                <FileText className="mr-2 h-4 w-4" /> View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Info */}
        <Card className="bg-slate-50/50">
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Info className="h-4 w-4 text-indigo-600" /> System Info
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">App Version</span>
              <span className="font-medium">1.2.0-beta</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Environment</span>
              <span className="font-medium">Demo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Updated</span>
              <span className="font-medium">Dec 15, 2025</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How is the AI Resilience Score (ARS) calculated?
              </AccordionTrigger>
              <AccordionContent>
                The ARS is a composite metric derived from student performance
                across three key dimensions: Code Quality (40%), Vulnerability
                Identification (35%), and Prompt Engineering Efficiency (25%).
                It updates in real-time as students complete project milestones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I export all student data at once?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can export all student data, including grades, activity
                logs, and project submissions, as a CSV file from the{" "}
                <span className="font-semibold">
                  Settings &gt; Data & Privacy
                </span>{" "}
                section.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Who has access to view student data?
              </AccordionTrigger>
              <AccordionContent>
                Student data is accessible only to assigned Administrators and
                Instructors for your specific institution. Role-based access
                controls (RBAC) ensure that sensitive information is restricted.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How often are new projects added to the library?
              </AccordionTrigger>
              <AccordionContent>
                We release new projects and challenge modules on a monthly
                basis. You can enable notifications in Settings to be alerted
                when new content is available.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
