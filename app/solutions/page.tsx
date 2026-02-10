import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";

export default function SolutionsPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
            <Navbar />
            <SolutionsHero />
            <SolutionsGrid />
            <Footer />
        </main>
    );
}
