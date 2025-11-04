'use server';

/**
 * @fileOverview A flow for generating AI-powered headline suggestions for a product landing page.
 *
 * - generateHeadlineSuggestions - A function that generates headline suggestions.
 * - HeadlineSuggestionsInput - The input type for the generateHeadlineSuggestions function.
 * - HeadlineSuggestionsOutput - The return type for the generateHeadlineSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const HeadlineSuggestionsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
  targetAudience: z.string().describe('The target audience for the product.'),
  tone: z.string().describe('The desired tone of the headlines (e.g., professional, funny, exciting).'),
  numSuggestions: z.number().default(3).describe('Number of headline suggestions to generate.'),
});
export type HeadlineSuggestionsInput = z.infer<typeof HeadlineSuggestionsInputSchema>;

const HeadlineSuggestionsOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('An array of headline suggestions.'),
});
export type HeadlineSuggestionsOutput = z.infer<typeof HeadlineSuggestionsOutputSchema>;

export async function generateHeadlineSuggestions(input: HeadlineSuggestionsInput): Promise<HeadlineSuggestionsOutput> {
  return headlineSuggestionsFlow(input);
}

const headlineSuggestionsPrompt = ai.definePrompt({
  name: 'headlineSuggestionsPrompt',
  input: {schema: HeadlineSuggestionsInputSchema},
  output: {schema: HeadlineSuggestionsOutputSchema},
  prompt: `You are a marketing expert specializing in crafting high-converting headlines for landing pages.
  Generate {{numSuggestions}} headline suggestions for the following product, tailored to the specified target audience and tone.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  Target Audience: {{{targetAudience}}}
  Tone: {{{tone}}}

  Suggestions:`, 
});

const headlineSuggestionsFlow = ai.defineFlow(
  {
    name: 'headlineSuggestionsFlow',
    inputSchema: HeadlineSuggestionsInputSchema,
    outputSchema: HeadlineSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await headlineSuggestionsPrompt(input);
    return output!;
  }
);
