/**
 * Optimized image imports via vite-imagetools.
 *
 * Images are resized and converted to WebP at build time for
 * dramatically smaller file sizes vs the raw originals.
 */

// ── Food Photos (BTS mosaic) ── 800px wide, WebP ──
// @ts-ignore - vite-imagetools query
import lobsterPlate from './food/LobsterPlate.png?w=800&format=webp';
// @ts-ignore
import cocktail from './food/Cocktail.png?w=800&format=webp';
// @ts-ignore
import frenchToast from './food/FrenchToast.png?w=800&format=webp';
// @ts-ignore
import acaiBowl from './food/AcaiBowl.png?w=800&format=webp';
// @ts-ignore
import espressoMartini from './food/EspressoMartini.png?w=800&format=webp';
// @ts-ignore
import lambChopAndMash from './food/LambChopandMash.png?w=800&format=webp';
// @ts-ignore
import blueberryPancakes from './food/BlueberryPancakes.png?w=800&format=webp';
// @ts-ignore
import drinks from './food/Drinks.png?w=800&format=webp';

export const foodPhotos = {
  lobsterPlate,
  cocktail,
  frenchToast,
  acaiBowl,
  espressoMartini,
  lambChopAndMash,
  blueberryPancakes,
  drinks,
};

export const btsPhotoList: string[] = [
  lobsterPlate,
  cocktail,
  frenchToast,
  acaiBowl,
  espressoMartini,
  lambChopAndMash,
  blueberryPancakes,
  drinks,
];

// ── Industry Images ── 1200px wide, WebP ──
// @ts-ignore
import coaches from './industries/Coaches.jpg?w=1200&format=webp';
// @ts-ignore
import marketingStrategists from './industries/Marketing Strategists.jpg?w=1200&format=webp';
// @ts-ignore
import realtors from './industries/Realtors.jpg?w=1200&format=webp';
// @ts-ignore
import restaurants from './industries/Restaurants.jpg?w=1200&format=webp';
// @ts-ignore
import bakery from './industries/Bakery.jpg?w=1200&format=webp';
// @ts-ignore
import authors from './industries/Authors.jpg?w=1200&format=webp';
// @ts-ignore
import taxStrategists from './industries/Tax strategists.jpg?w=1200&format=webp';
// @ts-ignore
import speakers from './industries/Speakers.jpg?w=1200&format=webp';
// @ts-ignore
import entrepreneurs from './industries/Entrepreneurs.jpg?w=1200&format=webp';
// @ts-ignore
import eventPlanners from './industries/Event planners.jpg?w=1200&format=webp';
// @ts-ignore
import hairStylists from './industries/Hair stylists.jpg?w=1200&format=webp';
// @ts-ignore
import nailSalons from './industries/Nail salons.jpg?w=1200&format=webp';
// @ts-ignore
import skincare from './industries/Skincare.jpg?w=1200&format=webp';
// @ts-ignore
import grantWriters from './industries/Grant writers.jpg?w=1200&format=webp';

export const industryImages = {
  coaches,
  marketingStrategists,
  realtors,
  restaurants,
  bakery,
  authors,
  taxStrategists,
  speakers,
  entrepreneurs,
  eventPlanners,
  hairStylists,
  nailSalons,
  skincare,
  grantWriters,
};

// ── Logos ── 400px wide, WebP ──
// @ts-ignore
import logoBlack from './4six-creative-logo-black.png?w=400&format=webp';
// @ts-ignore
import logoWhite from './4six-creative-logo-white.png?w=400&format=webp';

export { logoBlack, logoWhite };

// ── CEO Photo ── 800px wide, WebP ──
// @ts-ignore
import meetTroyia from './meet-troyia.jpg?w=800&format=webp';

export { meetTroyia };

// ── iPhone Frame ── 600px wide, WebP ──
// @ts-ignore
import iPhoneFrame from './iPhone.png?w=600&format=webp';

export { iPhoneFrame };
