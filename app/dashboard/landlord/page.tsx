"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  revenueChange: number | null; // make numeric for consistent formatting
  pendingCertificates: number;
  activeTenants: number;
  newTenants: number;
}

export default function LandlordDashboard() {
  const [showAddProperty, setShowAddProperty] = useState(false);
  const [stats, setStats] = useState<LandlordStats | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const apiBase = useMemo(
    () => process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001/api",
    []
  );

  useEffect(() => {
    const controller = new AbortController();
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;

    if (!token) {
      setError("Not logged in");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${apiBase}/dashboard/landlord`, {
          headers: { Authorization: `Bearer ${token}` },
          signal: controller.signal,
          cache: "no-store",
        });
        const body = await res.json().catch(() => ({}));
        if (!res.ok) {
          throw new Error(body?.message || "Failed to load dashboard");
        }
        setStats(body as LandlordStats);
      } catch (e: any) {
        if (e?.name !== "AbortError") setError(e?.message || "Failed to load");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, [apiBase]);

  const formatMoney = (n?: number) =>
    typeof n === "number"
      ? n.toLocaleString(undefined, {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        })
      : "...";

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
                {loading ? "..." : stats?.totalProperties ?? 0}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {loading
                  ? "..."
                  : `${stats?.occupiedCount ?? 0} occupied, ${
                      stats?.vacantCount ?? 0
                    } vacant`}
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
                {loading ? "..." : formatMoney(stats?.monthlyRevenue)}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {loading
                  ? "..."
                  : stats?.revenueChange !== null &&
                    stats?.revenueChange !== undefined
                  ? `${stats.revenueChange >= 0 ? "+" : ""}${
                      stats.revenueChange
                    }% from last month`
                  : "—"}
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
                {loading ? "..." : stats?.pendingCertificates ?? 0}
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
                {loading ? "..." : stats?.activeTenants ?? 0}
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {loading ? "..." : `${stats?.newTenants ?? 0} new this month`}
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
            Add Property
          </Button>
          <Button variant="outline" className="font-bold">
            Upload Documents
          </Button>
          <Button variant="outline" className="font-bold">
            View Reports
          </Button>
        </div>

        {/* TODO: main content (table/cards) once API is ready */}
      </div>
    </DashboardLayout>
  );
}
