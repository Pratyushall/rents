"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import DashboardLayout from "../../components/layout/dashboard-layout";

export default function AdminDashboard() {
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        {/* System Stats */}
        <div className="grid md:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Users
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-gray-500 mt-1">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-gray-500 mt-1">Across all landlords</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$127K</div>
              <p className="text-xs text-gray-500 mt-1">Monthly total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Issues
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">23</div>
              <p className="text-xs text-gray-500 mt-1">Require attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                System Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">99.9%</div>
              <p className="text-xs text-gray-500 mt-1">Uptime</p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={() => setShowUserModal(true)}
            className="bg-primary hover:bg-primary/90 font-bold"
          >
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
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add User
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
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            System Settings
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
            Generate Reports
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* User Management */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                User Management
              </CardTitle>
              <CardDescription>
                Manage all system users and roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-sm font-bold text-gray-600 border-b pb-2">
                  <span>Admins: 3</span>
                  <span>Managers: 8</span>
                  <span>Landlords: 24</span>
                  <span>Tenants: 121</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-bold">John Smith</p>
                      <p className="text-sm text-gray-600">
                        john@example.com • Landlord
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="font-bold">
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 font-bold"
                      >
                        Suspend
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b">
                    <div>
                      <p className="font-bold">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">
                        sarah@example.com • Manager
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="font-bold">
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 font-bold"
                      >
                        Suspend
                      </Button>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View All Users
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* System Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                System Analytics
              </CardTitle>
              <CardDescription>
                Platform performance and metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">2,847</div>
                    <p className="text-sm text-blue-700 font-bold">
                      Total Logins
                    </p>
                    <p className="text-xs text-blue-600">This month</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-600">
                      94.2%
                    </div>
                    <p className="text-sm text-green-700 font-bold">
                      User Satisfaction
                    </p>
                    <p className="text-xs text-green-600">Based on surveys</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Database Usage</span>
                    <span className="text-sm font-bold">67%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">Server Load</span>
                    <span className="text-sm font-bold">23%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "23%" }}
                    ></div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View Detailed Analytics
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                Recent Activity
              </CardTitle>
              <CardDescription>System-wide activity log</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-bold">New user registration</p>
                    <p className="text-xs text-gray-600">
                      jane.doe@email.com joined as Tenant
                    </p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-bold">Property listed</p>
                    <p className="text-xs text-gray-600">
                      Oak Street House added by John Smith
                    </p>
                    <p className="text-xs text-gray-500">4 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 py-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-bold">Payment issue</p>
                    <p className="text-xs text-gray-600">
                      Failed payment for Downtown Loft #3A
                    </p>
                    <p className="text-xs text-gray-500">6 hours ago</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  View Full Log
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* System Health */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold">System Health</CardTitle>
              <CardDescription>
                Monitor system performance and status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">Database</p>
                    <p className="text-sm text-gray-600">
                      Connection and performance
                    </p>
                  </div>
                  <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded text-sm">
                    Healthy
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">Payment Gateway</p>
                    <p className="text-sm text-gray-600">Stripe API status</p>
                  </div>
                  <span className="text-green-600 font-bold bg-green-100 px-2 py-1 rounded text-sm">
                    Online
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div>
                    <p className="font-bold">Email Service</p>
                    <p className="text-sm text-gray-600">
                      Notification delivery
                    </p>
                  </div>
                  <span className="text-yellow-600 font-bold bg-yellow-100 px-2 py-1 rounded text-sm">
                    Delayed
                  </span>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-bold">
                  System Diagnostics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
