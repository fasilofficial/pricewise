"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { isValidAmazonProductUrl } from "@/lib/utils";
import React, { FormEvent, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Searchbar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValidLink = isValidAmazonProductUrl(searchPrompt);

    if (!isValidLink)
      return toast("Please provide a valid Amazon product link");

    try {
      setIsLoading(true);

      // scrape the products page
      const product = await scrapeAndStoreProduct(searchPrompt);

      console.log(product)
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <Toaster />
      <input
        type="text"
        placeholder="Enter product link"
        className="searchbar-input"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button
        type="submit"
        className="searchbar-btn"
        disabled={searchPrompt === ""}
      >
        {isLoading ? "Searching..." : "Search"}
      </button>
    </form>
  );
};

export default Searchbar;
