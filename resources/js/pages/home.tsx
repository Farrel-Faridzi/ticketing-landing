import { Head } from '@inertiajs/react';
import { CoreServices } from '@/components/marketing/core-services';
import { CtaBand } from '@/components/marketing/cta-band';
import { FaqAccordion } from '@/components/marketing/faq-accordion';
import { FeaturesGrid } from '@/components/marketing/features-grid';
import { Footer } from '@/components/marketing/footer';
import { Hero } from '@/components/marketing/hero';
import { Nav } from '@/components/marketing/nav';
import { OrderTrackingPreview } from '@/components/marketing/order-tracking-preview';
import { ProblemSolution } from '@/components/marketing/problem-solution';

export default function Home() {
    return (
        <>
            <Head title="Reservation, Rent Membership & Ready Stock" />
            <div className="bg-bg text-text min-h-screen font-sans">
                <Nav />
                <Hero />
                <OrderTrackingPreview />
                <CoreServices />
                <ProblemSolution />
                <FeaturesGrid />
                <FaqAccordion />
                <CtaBand />
                <Footer />
            </div>
        </>
    );
}
