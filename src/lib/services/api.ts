import { features, steps, socialProof } from "../mocks/features";
import { faqItems } from "../mocks/faq";
import { plans } from "../mocks/plans";

const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getFeatures() {
  await delay();
  return features;
}

export async function getSteps() {
  await delay();
  return steps;
}

export async function getSocialProof() {
  await delay();
  return socialProof;
}

export async function getFaqItems(category: string | null = null) {
  await delay();
  if (category) {
    return faqItems.filter((item) => item.category === category);
  }
  return faqItems;
}

export async function getPlans() {
  await delay();
  return plans;
}

export async function submitWaitlist(email: string) {
  await delay(500);
  console.log("[mock] Waitlist signup:", email);
  return { success: true, message: "¡Te avisaremos cuando lancemos!" };
}

export async function submitContact({ name, email, message }: { name: string; email: string; message: string }) {
  await delay(500);
  console.log("[mock] Contact form:", { name, email, message });
  return { success: true, message: "Mensaje enviado. Te responderemos pronto." };
}

export async function subscribeNewsletter(email: string) {
  await delay(300);
  console.log("[mock] Newsletter:", email);
  return { success: true };
}