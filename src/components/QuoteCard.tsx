"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Search } from "lucide-react";

type Quote = {
  text: string;
  author: string;
};

export default function QuoteCard() {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
  const [search, setSearch] = useState("");
  const [allQuotes, setAllQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  const fetchAllQuotes = async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();

      // Map API data to Quote type
      const formattedQuotes: Quote[] = data.quotes.map((q: any) => ({
        text: q.quote,
        author: q.author,
      }));

      setAllQuotes(formattedQuotes);
      getRandomQuote(formattedQuotes);
    } catch (error) {
      console.error("Error fetching quotes:", error);
      toast.error("Failed to load quotes.");
    }
  };

  const getRandomQuote = (quotesList: Quote[] = allQuotes) => {
    if (quotesList.length === 0) return;

    const random = quotesList[Math.floor(Math.random() * quotesList.length)];
    setQuote(random);
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
    <>
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-6 flex items-center space-x-2 mt-5 ml-4">
        <span className="hover:underline cursor-pointer text-primary">
          Home
        </span>
        <span className="text-gray-400">/</span>
        <span className="font-medium text-foreground">Quote Generator</span>
      </div>

      <div className="p-8 max-w-3xl mx-auto min-h-screen bg-base-200">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-4">Quote Generator</h1>

        {/* Description */}
        <p className="text-center text-gray-600 mb-6">
          Discover inspiring quotes instantly. Whether you&apos;re designing,
          presenting, or posting on social media, generate meaningful quotes
          with a single click.
        </p>

        {/* Info Card */}
        <Card className="border-blue-400 mb-6">
          <CardContent className="p-3 flex items-center space-x-4">
            <Sparkles className="text-purple-500" />
            <div>
              <p className="text-blue-600 font-medium">
                Generate quotes that offer words of encouragement or daily
                inspiration
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Search Bar */}
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search quote or author..."
            className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Conditional Rendering */}
        {search.length > 0 ? (
          filteredQuotes.length > 0 ? (
            <div className="grid gap-4">
              {filteredQuotes.map((q, index) => (
                <Card key={index} className="shadow">
                  <CardContent className="p-4">
                    <p className="italic">"{q.text}"</p>
                    <p className="text-right font-semibold mt-2">
                      - {q.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No quotes found.</p>
          )
        ) : (
          <>
            {/* Random Quote Display */}
            <Card className="shadow-xl mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">📜 Random Quote</h2>
                <p className="text-lg italic">"{quote.text}"</p>
                <p className="text-right font-bold mt-4">- {quote.author}</p>
              </CardContent>
            </Card>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => getRandomQuote()}
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Generate Quote
              </Button>
              <Button
                onClick={copyQuoteToClipboard}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Copy Quote
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
