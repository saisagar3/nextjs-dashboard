import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { fetchCardData } from "../../lib/data";
import { lusitana } from "../../ui/fonts";
import { Suspense } from "react";
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from "@/app/ui/skeletons";



export default async function Page() {
    // const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish.
    const {
        numberOfCustomers,
        numberOfInvoices,
        totalPaidInvoices,
        totalPendingInvoices
    } = await fetchCardData(); // wait for fetchLatestInvoices() to finish.

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-x1 md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-g sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}