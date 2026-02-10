"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

// Search data structure
const searchableContent = [
  // Solutions
  { title: "ConvokeAI", category: "Solutions", path: "/solutions", keywords: ["AI", "conversational", "automation", "chatbot"] },
  { title: "Factory of the Future", category: "Solutions", path: "/solutions", keywords: ["manufacturing", "industry 4.0", "IoT", "smart factory"] },
  { title: "Manufacturing Operations Management", category: "Solutions", path: "/solutions", keywords: ["MOM", "production", "scheduling", "quality"] },
  { title: "Product Lifecycle Management", category: "Solutions", path: "/solutions", keywords: ["PLM", "design", "compliance", "collaboration"] },
  { title: "Digital Manufacturing", category: "Solutions", path: "/solutions", keywords: ["digital twin", "simulation", "VR", "3D modeling"] },
  { title: "SAP Implementation", category: "Solutions", path: "/solutions", keywords: ["SAP", "S/4HANA", "integration", "ERP"] },
  { title: "Cloud Services", category: "Solutions", path: "/solutions", keywords: ["cloud", "AWS", "Azure", "GCP", "migration"] },
  { title: "Analytics", category: "Solutions", path: "/solutions", keywords: ["data", "BI", "machine learning", "visualization"] },
  { title: "Intelligent Finance", category: "Solutions", path: "/solutions", keywords: ["finance", "accounting", "automation", "fraud detection"] },
  { title: "IOT & Big Data", category: "Solutions", path: "/solutions", keywords: ["IoT", "big data", "sensors", "edge computing"] },
  
  // Services
  { title: "Managed Services", category: "Services", path: "/services", keywords: ["24/7", "monitoring", "infrastructure", "support"] },
  { title: "Consulting Services", category: "Services", path: "/services", keywords: ["consulting", "strategy", "transformation", "advisory"] },
  { title: "On Demand Services", category: "Services", path: "/services", keywords: ["on-demand", "flexible", "scalable", "project-based"] },
  
  // Pages
  { title: "About Us", category: "Company", path: "/about", keywords: ["company", "team", "mission", "vision"] },
  { title: "Careers", category: "Company", path: "/careers", keywords: ["jobs", "hiring", "opportunities", "work"] },
  { title: "Contact Us", category: "Company", path: "/contact", keywords: ["contact", "support", "email", "phone"] },
  { title: "AI Services", category: "Services", path: "/ai-services", keywords: ["artificial intelligence", "AI", "ML", "generative AI"] },
  { title: "Industries", category: "Company", path: "/industries", keywords: ["sectors", "verticals", "industry"] },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchableContent);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() === "") {
      setResults(searchableContent);
    } else {
      const filtered = searchableContent.filter(item => {
        const searchTerm = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchTerm) ||
          item.category.toLowerCase().includes(searchTerm) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm))
        );
      });
      setResults(filtered);
    }
  }, [query]);

  const handleResultClick = (path: string) => {
    router.push(path);
    onClose();
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "Enter" && results.length > 0) {
      handleResultClick(results[0].path);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl z-101"
          >
            <div className="bg-zinc-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search solutions, services, pages..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-lg"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {results.length > 0 ? (
                  <div className="p-2">
                    {results.map((result, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handleResultClick(result.path)}
                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 rounded-xl transition-colors text-left group"
                      >
                        <div>
                          <h3 className="text-white font-medium group-hover:text-orange-400 transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {result.category}
                          </p>
                        </div>
                        <svg
                          className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center">
                    <p className="text-gray-400">No results found for "{query}"</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-white/10 bg-black/20">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Press ESC to close</span>
                  <span>Press ENTER to navigate</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
