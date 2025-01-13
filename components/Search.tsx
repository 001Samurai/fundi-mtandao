'use client'

import React, { useState, useEffect, useRef } from 'react'
import { SearchIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { BlogPost } from '@/data/blogPosts'

interface SearchProps {
  onSearch: (term: string) => void;
  blogPosts: BlogPost[];
}

export function Search({ onSearch, blogPosts }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setSuggestions([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    onSearch(term);

    if (term.trim() === '') {
      setSuggestions([]);
    } else {
      const newSuggestions = blogPosts
        .filter(post =>
          post.title.toLowerCase().includes(term.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(term.toLowerCase()))
        )
        .map(post => post.title)
        .slice(0, 5);
      setSuggestions(newSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="search"
        placeholder="Search articles..."
        className="pl-10 w-full bg-white/10 text-white placeholder-gray-300 border-white/20"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        aria-label="Search articles"
      />
      {suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg"
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

