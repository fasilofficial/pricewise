"use server";

import { scrapeAmazonProduct } from "../scrapper";

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  const scrapedProduct = await scrapeAmazonProduct(productUrl)

  if(!scrapedProduct) return

  

  try {
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}