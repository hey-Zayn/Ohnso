'use server';

import { generateHeadlineSuggestions } from '@/ai/flows/ai-headline-suggestions';
import { z } from 'zod';

// AI Headline Generator Action
export async function getHeadlineSuggestions(
  productName: string,
  productDescription: string,
  targetAudience: string,
  tone: string
) {
  try {
    const result = await generateHeadlineSuggestions({
      productName,
      productDescription,
      targetAudience,
      tone,
      numSuggestions: 3,
    });
    return { success: true, suggestions: result.suggestions };
  } catch (error) {
    console.error('Error generating headline suggestions:', error);
    return { success: false, error: 'Failed to generate suggestions.' };
  }
}

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
    };
  }
  
  // In a real-world application, you would process the form data here,
  // e.g., send an email, save to a database, etc.
  console.log('Contact form submitted successfully:', validatedFields.data);

  return { message: 'Thank you for your message! We will get back to you soon.', errors: {} };
}
