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

const quotes: Quote[] = [
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Rumi",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Stephen Hawking",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Bill Gates",
  },
  { text: "Try to be a rainbow in someone's cloud.", author: "Elon Musk" },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "Aristotle",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Abraham Lincoln",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Steve Jobs",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Albert Einstein",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Mother Teresa",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "Albert Einstein",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become.",
    author: "Mark Twain",
  },
  {
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Stephen Hawking",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Steve Jobs",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Barack Obama",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "Albert Einstein",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Marie Curie",
  },
  { text: "The best revenge is massive success.", author: "Mark Twain" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Leonardo da Vinci",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Abraham Lincoln",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Nelson Mandela",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Aristotle",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Marie Curie",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Isaac Newton",
  },
  { text: "Believe you can and you're halfway there.", author: "Socrates" },
  { text: "The best revenge is massive success.", author: "Benjamin Franklin" },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Steve Jobs",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "Oprah Winfrey",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Mother Teresa",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "Isaac Newton",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Marie Curie",
  },
  {
    text: "It is never too late to be what you might have been.",
    author: "Benjamin Franklin",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Confucius",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Mother Teresa",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Thomas Edison",
  },
  { text: "The best revenge is massive success.", author: "Stephen Hawking" },
  { text: "Turn your wounds into wisdom.", author: "J.K. Rowling" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Aristotle",
  },
  {
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Buddha",
  },
  { text: "Turn your wounds into wisdom.", author: "Steve Jobs" },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Socrates",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Marie Curie",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Aristotle",
  },
  { text: "The best revenge is massive success.", author: "Thomas Edison" },
  {
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Barack Obama",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Albert Einstein",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Walt Disney",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Elon Musk",
  },
  { text: "Turn your wounds into wisdom.", author: "Maya Angelou" },
  { text: "It always seems impossible until it's done.", author: "Aristotle" },
  { text: "The best revenge is massive success.", author: "Steve Jobs" },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Bill Gates",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Maya Angelou",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Disney",
  },
  {
    text: "Life is short, and it is up to you to make it sweet.",
    author: "Steve Jobs",
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Nelson Mandela",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "J.K. Rowling",
  },
  {
    text: "You must be the change you wish to see in the world.",
    author: "Mother Teresa",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Bill Gates",
  },
  { text: "The best revenge is massive success.", author: "Walt Disney" },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Steve Jobs",
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Aristotle",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Mother Teresa",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Buddha",
  },
  { text: "Turn your wounds into wisdom.", author: "Thomas Edison" },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Confucius",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Thomas Edison",
  },
  { text: "Believe you can and you're halfway there.", author: "Walt Disney" },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Buddha",
  },
  { text: "Try to be a rainbow in someone's cloud.", author: "Isaac Newton" },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Aristotle",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become.",
    author: "Mark Twain",
  },
  { text: "The best revenge is massive success.", author: "Buddha" },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Nelson Mandela",
  },
  { text: "If you can dream it, you can do it.", author: "Aristotle" },
  {
    text: "What you get by achieving your goals is not as important as what you become.",
    author: "Bill Gates",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Confucius",
  },
  { text: "The best revenge is massive success.", author: "Maya Angelou" },
  { text: "Turn your wounds into wisdom.", author: "Steve Jobs" },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "J.K. Rowling",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Maya Angelou",
  },
  { text: "Turn your wounds into wisdom.", author: "Martin Luther King Jr." },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "Thomas Edison",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become.",
    author: "Maya Angelou",
  },
  {
    text: "What you get by achieving your goals is not as important as what you become.",
    author: "Confucius",
  },
  { text: "If you can dream it, you can do it.", author: "Rumi" },
  { text: "The best revenge is massive success.", author: "Aristotle" },
  { text: "Try to be a rainbow in someone's cloud.", author: "Barack Obama" },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Buddha",
  },
  {
    text: "Try to be a rainbow in someone's cloud.",
    author: "Stephen Hawking",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "Benjamin Franklin",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "J.K. Rowling",
  },
  {
    text: "Hardships often prepare ordinary people for an extraordinary destiny.",
    author: "Maya Angelou",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Mother Teresa",
  },
  { text: "Turn your wounds into wisdom.", author: "Rumi" },
  {
    text: "It always seems impossible until it's done.",
    author: "Marie Curie",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Mother Teresa",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Walt Disney",
  },
];

export default function QuoteCard() {
  const [quote, setQuote] = useState<Quote>({ text: "", author: "" });
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  const copyQuoteToClipboard = () => {
    const quoteText = `"${quote.text}" - ${quote.author}`;
    navigator.clipboard.writeText(quoteText).then(() => {
      toast.success("Copied to clipboard!");
    });
  };

  const filteredQuotes = useMemo(() => {
    return quotes.filter(
      (q) =>
        q.text.toLowerCase().includes(search.toLowerCase()) ||
        q.author.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

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
          Discover inspiring quotes instantly. Whether you're designing,
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
                onClick={getRandomQuote}
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
