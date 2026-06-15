"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  Download,
  LogOut,
} from "lucide-react";

interface Lead {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service?: string;
  budget?: string;
  message?: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");

    if (isAdmin !== "true") {
      router.push("/admin/login");
      return;
    }

    fetchLeads();
  }, [router]);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");

      if (!res.ok) {
        throw new Error("Failed to fetch leads");
      }

      const json = await res.json();

      setLeads(json.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    router.push("/admin/login");
  };

  const downloadCSV = () => {
    const headers = [
      "Name",
      "Email",
      "Phone",
      "Service",
      "Budget",
      "Message",
      "Date",
    ];

    const rows = leads.map((lead) => [
      `"${(lead.name || "").replace(/"/g, '""')}"`,
      `"${(lead.email || "").replace(/"/g, '""')}"`,
      `"${(lead.phone || "").replace(/"/g, '""')}"`,
      `"${(lead.service || "").replace(/"/g, '""')}"`,
      `"${(lead.budget || "").replace(/"/g, '""')}"`,
      `"${(lead.message || "").replace(/"/g, '""')}"`,
      `"${new Date(lead.createdAt).toLocaleDateString().replace(/"/g, '""')}"`,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "leads.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-white">
            Admin Dashboard
          </h1>

          <div className="flex gap-3">
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              <Download size={18} />
              Download CSV
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-800">
                  <th className="p-4 text-left text-white">Name</th>
                  <th className="p-4 text-left text-white">Email</th>
                  <th className="p-4 text-left text-white">Phone</th>
                  <th className="p-4 text-left text-white">Service</th>
                  <th className="p-4 text-left text-white">Budget</th>
                  <th className="p-4 text-left text-white">Message</th>
                  <th className="p-4 text-left text-white">Date</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="p-10 text-center text-zinc-400"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="p-10 text-center text-zinc-400"
                    >
                      No Leads Found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr
                      key={lead._id}
                      className="border-t border-zinc-800 hover:bg-zinc-800/40"
                    >
                      <td className="p-4 text-white">
                        {lead.name}
                      </td>

                      <td className="p-4 text-zinc-300">
                        <div className="flex items-center gap-2">
                          <Mail size={16} />
                          {lead.email}
                        </div>
                      </td>

                      <td className="p-4 text-zinc-300">
                        <div className="flex items-center gap-2">
                          <Phone size={16} />
                          {lead.phone}
                        </div>
                      </td>

                      <td className="p-4 text-zinc-300">
                        {lead.service}
                      </td>

                      <td className="p-4 text-zinc-300">
                        {lead.budget}
                      </td>

                      <td className="p-4 text-zinc-300">
                        {lead.message}
                      </td>

                      <td className="p-4 text-zinc-300">
                        {new Date(
                          lead.createdAt
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}