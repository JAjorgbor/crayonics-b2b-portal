import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PermissionGate from "@/components/auth/PermissionGate";

export default function SystemConfig() {
  return (
    <div className="space-y-6 pt-6 px-6 pb-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            System Configuration
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Manage integrations, security, and global settings.
          </p>
        </div>
        <Button disabled variant="outline">
          Save Changes (Coming Soon)
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
            <CardDescription>
              Configure LTI and LMS connections.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="canvas-integration">Canvas LMS (LTI 1.3)</Label>
                <span className="text-xs text-slate-500">
                  Enable connectivity with Canvas courses.
                </span>
              </div>
              <Switch id="canvas-integration" defaultChecked />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="blackboard-integration">Blackboard Learn</Label>
                <span className="text-xs text-slate-500">
                  Enable connectivity with Blackboard.
                </span>
              </div>
              <Switch id="blackboard-integration" />
            </div>
            <div className="pt-4  border-t">
              <Label>SSO Provider</Label>
              <Select defaultValue="saml">
                <SelectTrigger className="w-full mt-2">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saml">SAML 2.0 (Generic)</SelectItem>
                  <SelectItem value="google">Google Workspace</SelectItem>
                  <SelectItem value="azure">Microsoft Azure AD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Branding & Appearance</CardTitle>
            <CardDescription>
              Customize the simplified admin portal.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label>Dark Mode Force Enable</Label>
                <span className="text-xs text-slate-500">
                  Force dark mode for all users.
                </span>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between space-x-2">
              <div className="flex flex-col space-y-1">
                <Label>Show Beta Features</Label>
                <span className="text-xs text-slate-500">
                  Enable early access to Tier 2 reporting.
                </span>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
