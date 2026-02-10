import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0f1528] text-white pt-24">
            <Navbar />
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Get in touch with our team to discuss your project requirements.
                </p>
            </div>
            <Footer />
        </main>
    );
}
