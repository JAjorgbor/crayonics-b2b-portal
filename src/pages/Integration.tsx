import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Database,
  Globe,
  Key,
  Layers,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function IntegrationPage() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Seamless Integration Architecture
        </h1>
        <p className="text-lg text-muted-foreground">
          Connect Crayonics with your LMS and existing infrastructure securely
          and efficiently.
        </p>
      </div>

      {/* Diagram Placeholder */}
      <div className="relative bg-slate-50 border rounded-xl p-12 flex items-center justify-center overflow-hidden min-h-[400px]">
        <div
          className="absolute inset-0 grid grid-cols-[repear(20,1fr)] grid-rows-[repeat(20,1fr)] opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#6366f1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        {/* Visual Flow Representation */}
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full max-w-4xl">
          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
            <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-800">School LMS</h3>
            <p className="text-xs text-muted-foreground mt-2">
              Canvas / Blackboard / Moodle
            </p>
          </div>

          <ArrowRight className="text-slate-300 h-8 w-8 hidden md:block" />
          <div className="md:hidden h-8 w-px bg-slate-300 my-2"></div>

          <div className="flex-1 bg-indigo-600 p-6 rounded-lg shadow-lg text-center text-white relative">
            <div className="absolute -top-3 -right-3 bg-green-400 text-green-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-green-500">
              SECURE
            </div>
            <div className="h-12 w-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="font-bold">Crayonics Core</h3>
            <p className="text-xs text-indigo-200 mt-2">
              AI Processing • Webhooks & Sync
            </p>
          </div>

          <ArrowRight className="text-slate-300 h-8 w-8 hidden md:block" />
          <div className="md:hidden h-8 w-px bg-slate-300 my-2"></div>

          <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-slate-200 text-center">
            <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-slate-800">Student Portal</h3>
            <p className="text-xs text-muted-foreground mt-2">
              White-label Deployment w/ Your Branding
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5 text-indigo-600" /> SSO & Auth
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            SAML 2.0 and OIDC support for seamless single-sign-on using your
            existing Identity Provider (Okta, Azure AD, Google Workspace).
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-indigo-600" /> REST API
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            Full read/write access to student data, project submissions, and ARS
            scores via our documented REST API.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-600" /> Privacy First
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-600">
            FERPA and COPPA compliant data handling. All data is encrypted at
            rest and in transit.
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-900 rounded-xl p-8 text-center mt-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          Ready to integrate?
        </h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Download our technical documentation and architecture diagrams to
          share with your IT team.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            Download Architecture PDF
          </Button>
          <Button
            variant="outline"
            className="text-slate-900 bg-white hover:bg-slate-100 border-none"
          >
            View API Docs
          </Button>
        </div>
      </div>
    </div>
  );
}
