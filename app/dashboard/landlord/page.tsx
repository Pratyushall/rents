// app/dashboard/landlord/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import DashboardLayout from "../../components/layout/dashboard-layout";

interface LandlordStats {
  totalProperties: number;
  occupiedCount: number;
  vacantCount: number;
  monthlyRevenue: number;
  revenueChange: string | null;
  pendingCertificates: number;
  activeTenants: number;
  newTenants: number;
}

export default function LandlordDashboard() {
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [stats, setStats] = useState<LandlordStats | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Not logged in");
      return;
    }
    const apiUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";
    fetch(`${apiUrl}/dashboard/landlord`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.message || "Failed to load dashboard");
        }
        return res.json();
      })
      .then((data: LandlordStats) => setStats(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <DashboardLayout role="landlord">
      <div className="space-y-6">
        {error && <div className="text-red-600 font-bold">{error}</div>}
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats ? stats.totalProperties : "..."}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stats
                  ? `${stats.occupiedCount} occupied, ${stats.vacantCount} vacant`
                  : "..."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats ? `$${stats.monthlyRevenue}` : "..."}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stats && stats.revenueChange !== null
                  ? `+${stats.revenueChange}% from last month`
                  : "..."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pending Certificates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">
                {stats ? stats.pendingCertificates : "..."}
              </div>
              <p className="text-xs text-gray-500 mt-1">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Active Tenants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats ? stats.activeTenants : "..."}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {stats ? `${stats.newTenants} new this month` : "..."}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            onClick={() => setShowAddProperty(true)}
            className="bg-primary hover:bg-primary/90 font-bold"
          >
            {/* SVG omitted for brevity */}
            Add Property
          </Button>
          <Button variant="outline" className="font-bold">
            Upload Documents
          </Button>
          <Button variant="outline" className="font-bold">
            View Reports
          </Button>
        </div>

        {/* Main Content (static for now) */}
        {/* … the rest of your UI remains unchanged … */}
      </div>
    </DashboardLayout>
  );
}
