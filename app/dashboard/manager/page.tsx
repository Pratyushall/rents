"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import DashboardLayout from "../../components/layout/dashboard-layout";

export default function ManagerDashboard() {
  return (
    <DashboardLayout role="manager">
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-gray-500 mt-1">Across 6 landlords</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Disputes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
              <p className="text-xs text-gray-500 mt-1">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$28,400</div>
              <p className="text-xs text-gray-500 mt-1">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pending Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">7</div>
              <p className="text-xs text-gray-500 mt-1">
                Maintenance & applications
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="bg-primary hover:bg-primary/90 font-bold">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Handle Disputes
          </Button>
          <Button variant="outline" className="font-bold">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            Generate Report
          </Button>
          <Button variant="outline" className="font-bold">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
              />
            </svg>
            Manage Users
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Active Disputes */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Active Disputes
              </CardTitle>
              <CardDescription>
                Issues requiring immediate attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-red-800">
                      Rent Payment Dispute
                    </h4>
                    <span className="text-xs text-red-600 bg-red-200 px-2 py-1 rounded font-bold">
                      High Priority
                    </span>
                  </div>
                  <p className="text-sm text-red-700">
                    Tenant claims payment was made, landlord disputes
                  </p>
                  <p className="text-xs text-red-600">
                    Property: Sunset Apt #101 • Opened: Nov 25
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-red-600 hover:bg-red-700 font-bold"
                  >
                    Resolve
                  </Button>
                </div>

                <div className="border-l-4 border-orange-500 pl-4 py-3 bg-orange-50 rounded-r-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-orange-800">
                      Maintenance Delay
                    </h4>
                    <span className="text-xs text-orange-600 bg-orange-200 px-2 py-1 rounded font-bold">
                      Medium
                    </span>
                  </div>
                  <p className="text-sm text-orange-700">
                    Heating repair taking longer than expected
                  </p>
                  <p className="text-xs text-orange-600">
                    Property: Garden View #205 • Opened: Nov 20
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-orange-600 hover:bg-orange-700 font-bold"
                  >
                    Investigate
                  </Button>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View All Disputes
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Property Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Property Overview
              </CardTitle>
              <CardDescription>
                Manage properties across all landlords
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Sunset Complex</h4>
                    <span className="text-sm text-gray-600 font-bold">
                      Landlord: John Smith
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    8 units • 6 occupied • $9,600/month
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="font-bold">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="font-bold">
                      Contact Landlord
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Garden View Properties</h4>
                    <span className="text-sm text-gray-600 font-bold">
                      Landlord: Sarah Johnson
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    6 units • 5 occupied • $7,200/month
                  </p>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline" className="font-bold">
                      View Details
                    </Button>
                    <Button size="sm" variant="outline" className="font-bold">
                      Contact Landlord
                    </Button>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View All Properties
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                User Management
              </CardTitle>
              <CardDescription>Monitor tenants and landlords</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">John Doe</p>
                    <p className="text-sm text-gray-600">
                      Tenant • Sunset Apt #101
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-sm font-bold">
                      Current
                    </span>
                    <p className="text-xs text-gray-600">Rent paid</p>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">Jane Smith</p>
                    <p className="text-sm text-gray-600">
                      Tenant • Downtown Loft #3A
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-orange-600 text-sm font-bold">
                      Late
                    </span>
                    <p className="text-xs text-gray-600">3 days overdue</p>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">John Smith</p>
                    <p className="text-sm text-gray-600">
                      Landlord • 8 properties
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-600 text-sm font-bold">
                      Active
                    </span>
                    <p className="text-xs text-gray-600">All compliant</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View All Users
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Recent Messages
              </CardTitle>
              <CardDescription>
                Latest communications requiring attention
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">John Smith (Landlord)</h4>
                    <span className="text-xs text-gray-500">2 hours ago</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    "Unit #101 needs new carpet installation. Can we schedule
                    this week?"
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-primary hover:bg-primary/90 font-bold"
                  >
                    Reply
                  </Button>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold">Jane Smith (Tenant)</h4>
                    <span className="text-xs text-gray-500">1 day ago</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    "The heating system is still not working properly. Please
                    help!"
                  </p>
                  <Button
                    size="sm"
                    className="mt-2 bg-primary hover:bg-primary/90 font-bold"
                  >
                    Escalate
                  </Button>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View All Messages
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
