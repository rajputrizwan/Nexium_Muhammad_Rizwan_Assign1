"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Search, Copy, Shuffle, Home, Quote } from "lucide-react";

type Quote = {
  text: string;
  author: string;
};

export default function QuoteCard() {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
  const [search, setSearch] = useState("");
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  const fetchAllQuotes = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      const formattedQuotes: Quote[] = data.quotes.map((q: any) => ({
        text: q.quote,
        author: q.author,
      }));

      setAllQuotes(formattedQuotes);
      getRandomQuote(formattedQuotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      toast.error("Failed to load quotes.");
    } finally {
      setIsLoading(false);
    }
  };

  const getRandomQuote = async (quotesList: Quote[] = allQuotes) => {
    if (quotesList.length === 0) return;

    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 300));

    const random = quotesList[Math.floor(Math.random() * quotesList.length)];
    setQuote(random);
    setIsGenerating(false);
  };

  const copyQuoteToClipboard = () => {
    const quoteText = `"${quote.text}" - ${quote.author}`;
    navigator.clipboard.writeText(quoteText).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  const filteredQuotes = useMemo(() => {
    return allQuotes.filter(
      (q) =>
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allQuotes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      {/* Animated Background Elements - Mobile Optimized */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-40 h-40 md:-top-40 md:-right-40 md:w-80 md:h-80 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 md:-bottom-40 md:-left-40 md:w-80 md:h-80 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
        {/* Enhanced Breadcrumb - Mobile Responsive */}
        <div className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 md:mb-8 flex items-center space-x-2 mt-2 sm:mt-4">
          <Home className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
          <span className="hover:underline cursor-pointer text-primary transition-colors duration-200">
            Home
          </span>
          <span className="text-gray-400">/</span>
          <span className="font-medium text-foreground bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Quote Generator
          </span>
        </div>

        {/* Enhanced Title Section - Mobile Responsive */}
        <div className="text-center mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 rounded-full mb-3 sm:mb-4 shadow-lg">
            <Quote className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Quote Generator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Discover inspiring quotes instantly. Whether you're designing,
            presenting, or posting on social media, generate meaningful quotes
            with a single click.
          </p>
        </div>

        {/* Enhanced Info Card - Mobile Responsive */}
        <Card className="border-0 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 shadow-lg mb-4 sm:mb-6 md:mb-8 transform transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] dark:border dark:border-purple-800/30">
          <CardContent className="p-3 sm:p-4 md:p-6 flex items-center space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-600 dark:to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-purple-700 dark:text-purple-300 font-semibold text-sm sm:text-base md:text-lg">
                Generate quotes that offer words of encouragement or daily
                inspiration
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Search Bar - Mobile Responsive */}
        <div className="mb-4 sm:mb-6 md:mb-8 relative group">
          <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-200 group-focus-within:text-purple-500 dark:group-focus-within:text-purple-400" />
          <input
            type="text"
            placeholder="Search quote or author..."
            className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:rounded-2xl shadow-sm focus:outline-none focus:ring-2 sm:focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Loading State - Mobile Responsive */}
        {isLoading && (
          <div className="flex justify-center items-center py-8 sm:py-10 md:py-12">
            <div className="animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 border-b-2 border-purple-600 dark:border-purple-400"></div>
          </div>
        )}

        {/* Conditional Rendering */}
        {!isLoading && search.length > 0 ? (
          filteredQuotes.length > 0 ? (
            <div className="grid gap-3 sm:gap-4 animate-fade-in">
              {filteredQuotes.map((q, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-xl cursor-pointer dark:border dark:border-gray-700"
                  onClick={() => {
                    setQuote(q);
                    setSearch("");
                  }}
                >
                  <CardContent className="p-4 sm:p-5 md:p-6">
                    <p className="italic text-gray-700 dark:text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
                      "{q.text}"
                    </p>
                    <p className="text-right font-semibold mt-3 sm:mt-4 text-purple-600 dark:text-purple-400 text-sm sm:text-base">
                      - {q.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 sm:py-10 md:py-12 animate-fade-in">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <Search className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-400 dark:text-gray-500" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-base sm:text-lg md:text-lg px-4 sm:px-0">
                No quotes found. Try a different search term.
              </p>
            </div>
          )
        ) : (
          !isLoading && (
            <>
              {/* Enhanced Random Quote Display - Mobile Responsive */}
              <Card
                className={`shadow-2xl border-0 mb-4 sm:mb-6 md:mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm transform transition-all duration-500 ${
                  isGenerating ? "scale-95 opacity-50" : "scale-100 opacity-100"
                } dark:border dark:border-gray-700`}
              >
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold flex items-center gap-2">
                      <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                        Random Quote
                      </span>
                    </h2>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 dark:bg-green-500 rounded-full animate-pulse"></div>
                  </div>

                  <div
                    className={`transition-opacity duration-300 ${
                      isGenerating ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <p className="text-base sm:text-lg md:text-xl italic text-gray-800 dark:text-gray-200 leading-relaxed mb-4 sm:mb-5 md:mb-6 text-center px-2 sm:px-0">
                      "{quote.text}"
                    </p>
                    <p className="text-right font-bold text-sm sm:text-base md:text-lg text-purple-600 dark:text-purple-400">
                      - {quote.author}
                    </p>
                  </div>

                  {isGenerating && (
                    <div className="flex justify-center items-center py-4 sm:py-6 md:py-8">
                      <div className="animate-spin rounded-full h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 border-b-2 border-purple-600 dark:border-purple-400"></div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Enhanced Buttons - Mobile Responsive */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 animate-fade-in-up">
                <Button
                  onClick={() => getRandomQuote()}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-500 dark:to-blue-500 dark:hover:from-purple-600 dark:hover:to-blue-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none disabled:hover:scale-100 text-sm sm:text-base"
                >
                  <Shuffle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {isGenerating ? "Generating..." : "Generate Quote"}
                </Button>
                <Button
                  onClick={copyQuoteToClipboard}
                  disabled={!quote.text}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 dark:from-green-600 dark:to-emerald-600 dark:hover:from-green-700 dark:hover:to-emerald-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:transform-none disabled:hover:scale-100 text-sm sm:text-base"
                >
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Copy Quote
                </Button>
              </div>
            </>
          )
        )}
      </div>

      {/* Add custom animations to global CSS */}
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
