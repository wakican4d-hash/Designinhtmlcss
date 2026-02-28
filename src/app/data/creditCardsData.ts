import imgBobcardPremier from "figma:asset/d326441dbe055cea6b310850b0fa9e9e904edcd5.png";
import imgSbiCard from "figma:asset/9e8464a7eab87f98f526ee35bf4d41bae183ecae.png";

export interface CreditCardData {
  id: string;
  image: string;
  title: string;
  joiningFee: string;
  renewalFee: string;
  benefits: string[];
  categories: string[];
  description?: string;
  cardOrientation?: 'horizontal' | 'vertical';
}

export const creditCardsData: CreditCardData[] = [
  {
    id: "bob-premier-bobcard",
    image: imgBobcardPremier,
    title: "Bank of Baroda Premier BOBCARD",
    joiningFee: "₹1200",
    renewalFee: "₹1200",
    benefits: [
      "5X Reward Points on online, dining, and travel spends",
      "1% Fuel Surcharge Waiver on fuel transactions between ₹400–₹5,000",
      "500 Bonus Reward Points on spending ₹5,000 within 60 days of card issuance",
      "Complimentary lounge access at domestic airports",
      "Personal accident insurance coverage up to ₹10 lakhs",
      "Zero fraud liability on lost/stolen cards",
    ],
    categories: ["Dining", "Shopping", "Travel"],
    description: "Experience premium banking with BOB Premier card, designed for lifestyle enthusiasts who value rewards and travel benefits.",
    cardOrientation: "horizontal",
  },
  {
    id: "bob-premier-bobcard-2",
    image: imgBobcardPremier,
    title: "Bank of Baroda Premier BOBCARD",
    joiningFee: "₹1200",
    renewalFee: "₹1200",
    benefits: [
      "5X Reward Points on online, dining, and travel spends",
      "1% Fuel Surcharge Waiver on fuel transactions between ₹400–₹5,000",
      "500 Bonus Reward Points on spending ₹5,000 within 60 days of card issuance",
      "Complimentary lounge access at domestic airports",
      "Personal accident insurance coverage up to ₹10 lakhs",
    ],
    categories: ["Dining", "Shopping"],
    description: "Experience premium banking with BOB Premier card, designed for lifestyle enthusiasts who value rewards and travel benefits.",
    cardOrientation: "horizontal",
  },
  {
    id: "sbi-elite-card",
    image: imgSbiCard,
    title: "SBI Elite Credit Card",
    joiningFee: "₹4999",
    renewalFee: "₹4999",
    benefits: [
      "Complimentary domestic and international airport lounge access",
      "10 Reward Points per ₹100 spent on dining, departmental stores & groceries",
    ],
    categories: ["Travel", "Lounge Pass", "Reward Points"],
    description: "Premium lifestyle card with exceptional travel benefits and reward points for high spenders.",
    cardOrientation: "vertical",
  },
];