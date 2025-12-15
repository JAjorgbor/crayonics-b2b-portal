import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload, Save, Lock, Download, Trash2, LogOut } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Settings
      </h1>

      {/* School Settings */}
      <Card>
        <CardHeader>
          <CardTitle>School Settings</CardTitle>
          <CardDescription>
            Manage your school's profile and contact information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="schoolName">School Name</Label>
            <Input
              id="schoolName"
              placeholder="Enter school name"
              defaultValue="Crayonics Academy"
            />
          </div>
          <div className="grid gap-2">
            <Label>School Logo</Label>
            <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 flex flex-col items-center justify-center gap-2 text-muted-foreground hover:bg-slate-50 transition-colors cursor-pointer">
              <Upload className="h-8 w-8 text-slate-400" />
              <span className="text-sm">Click to upload or drag and drop</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contactEmail">Primary Contact Email</Label>
            <Input
              id="contactEmail"
              type="email"
              placeholder="admin@school.edu"
              defaultValue="admin@crayonics.ai"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="bg-indigo-600 hover:bg-indigo-700">
            <Save className="mr-2 h-4 w-4" /> Save Changes
          </Button>
        </CardFooter>
      </Card>

      {/* Admin Account Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Admin Account</CardTitle>
          <CardDescription>
            Manage your personal administrator account details.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label>Admin Name</Label>
            <Input value="Jane Doe" readOnly className="bg-slate-50" />
          </div>
          <div className="grid gap-2">
            <Label>Email Address</Label>
            <Input
              value="jane.doe@crayonics.ai"
              readOnly
              className="bg-slate-50"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Lock className="mr-2 h-4 w-4" /> Change Password
          </Button>
          <Button
            variant="ghost"
            className="text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <LogOut className="mr-2 h-4 w-4" /> Sign Out
          </Button>
        </CardFooter>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>
            Configure how and when you receive alerts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">Weekly Summary Emails</Label>
              <p className="text-sm text-muted-foreground">
                Receive a weekly digest of student progress.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">At-Risk Student Alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified immediately when a student falls behind.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">New Project Availability</Label>
              <p className="text-sm text-muted-foreground">
                Notifications when new projects are added to the library.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Data & Privacy</CardTitle>
          <CardDescription>
            Manage data retention and export options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Export all student data, project grades, and settings configurations
            in CSV format.
          </p>
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" /> Export All Data
          </Button>
        </CardContent>
        <CardFooter className="border-t pt-6 bg-slate-50/50">
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Permanently delete this account and all data.
            </span>
            <Button variant="destructive" disabled>
              <Trash2 className="mr-2 h-4 w-4" /> Delete Account
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
