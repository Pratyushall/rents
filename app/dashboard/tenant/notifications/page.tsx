"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import DashboardLayout from "../../../components/layout/dashboard-layout";
import { Bell, Check, X, Clock, AlertTriangle } from "lucide-react";

export default function TenantNotifications() {
  const notifications = [
    {
      id: 1,
      type: "payment",
      title: "Rent Payment Due",
      message: "Your rent payment of $1,200 is due on December 1, 2024",
      time: "2 hours ago",
      read: false,
      priority: "high",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
    },
    {
      id: 2,
      type: "maintenance",
      title: "Maintenance Scheduled",
      message: "Heating system inspection scheduled for tomorrow 2-4 PM",
      time: "5 hours ago",
      read: false,
      priority: "medium",
      icon: <Clock className="w-5 h-5 text-orange-500" />,
    },
    {
      id: 3,
      type: "document",
      title: "Certificate Upload Required",
      message:
        "Please upload your updated insurance certificate by December 15",
      time: "1 day ago",
      read: true,
      priority: "medium",
      icon: <Bell className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 4,
      type: "message",
      title: "New Message from Landlord",
      message: "John Smith sent you a message about the heating repair",
      time: "2 days ago",
      read: true,
      priority: "low",
      icon: <Bell className="w-5 h-5 text-green-500" />,
    },
    {
      id: 5,
      type: "lease",
      title: "Lease Renewal Reminder",
      message: "Your lease expires on June 30, 2025. Consider renewal options",
      time: "1 week ago",
      read: true,
      priority: "low",
      icon: <Bell className="w-5 h-5 text-purple-500" />,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DashboardLayout role="tenant">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-2">
              You have {unreadCount} unread notification
              {unreadCount !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="font-bold">
              <Check className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline" className="font-bold">
              <X className="w-4 h-4 mr-2" />
              Clear All
            </Button>
          </div>
        </div>

        {/* Notification Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold">
              Filter Notifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 font-bold"
              >
                All
              </Button>
              <Button size="sm" variant="outline" className="font-bold">
                Unread
              </Button>
              <Button size="sm" variant="outline" className="font-bold">
                Payments
              </Button>
              <Button size="sm" variant="outline" className="font-bold">
                Maintenance
              </Button>
              <Button size="sm" variant="outline" className="font-bold">
                Messages
              </Button>
              <Button size="sm" variant="outline" className="font-bold">
                Documents
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card
              key={notification.id}
              className={`${
                !notification.read
                  ? "border-l-4 border-l-primary bg-primary/5"
                  : ""
              } hover:shadow-md transition-shadow`}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{notification.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-bold ${
                          !notification.read ? "text-gray-900" : "text-gray-700"
                        }`}
                      >
                        {notification.title}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs font-bold rounded ${
                            notification.priority === "high"
                              ? "bg-red-100 text-red-800"
                              : notification.priority === "medium"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {notification.priority}
                        </span>
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <p
                      className={`mt-1 text-sm ${
                        !notification.read ? "text-gray-900" : "text-gray-600"
                      }`}
                    >
                      {notification.message}
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      {notification.type === "payment" && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 font-bold"
                        >
                          Pay Now
                        </Button>
                      )}
                      {notification.type === "document" && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 font-bold"
                        >
                          Upload Document
                        </Button>
                      )}
                      {notification.type === "message" && (
                        <Button
                          size="sm"
                          className="bg-primary hover:bg-primary/90 font-bold"
                        >
                          View Message
                        </Button>
                      )}
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="font-bold"
                        >
                          Mark as Read
                        </Button>
                      )}
                      <Button size="sm" variant="outline" className="font-bold">
                        Dismiss
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="font-bold">
            Load More Notifications
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
}
