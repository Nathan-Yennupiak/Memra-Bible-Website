import {
  Search,
  Book,
  Highlighter,
  Pencil,
  Bookmark,
  Moon,
  Calendar,
  WifiOff,
  ChevronDown,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from "lucide-react";

/* ---------- Lucide React Icons (strokeWidth=1.6) ---------- */

export const IconSearch = () => <Search strokeWidth={1.6} />;
export const IconBook = () => <Book strokeWidth={1.6} />;
export const IconHighlighter = () => <Highlighter strokeWidth={1.6} />;
export const IconPencil = () => <Pencil strokeWidth={1.6} />;
export const IconBookmark = () => <Bookmark strokeWidth={1.6} />;
export const IconMoon = () => <Moon strokeWidth={1.6} />;
export const IconCalendar = () => <Calendar strokeWidth={1.6} />;
export const IconWifiOff = () => <WifiOff strokeWidth={1.6} />;
export const IconChevron = () => <ChevronDown strokeWidth={1.6} />;
export const IconMenu = () => <Menu strokeWidth={1.6} />;
export const IconClose = () => <X strokeWidth={1.6} />;
export const IconFacebook = () => <Facebook strokeWidth={1.6} />;
export const IconX = () => <Twitter strokeWidth={1.6} />;
export const IconInstagram = () => <Instagram strokeWidth={1.6} />;
export const IconYouTube = () => <Youtube strokeWidth={1.6} />;

/* ---------- Custom Brand SVGs (Not in Lucide) ---------- */

export const IconApple = () => (
  <svg viewBox="0 0 384 512" width="20" height="20" fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
  </svg>
);

export const IconGooglePlay = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
    <path d="M4.05 1.38A1.9 1.9 0 0 0 3 3.03v17.94c0 .64.3 1.23.8 1.6l10.87-10.74L4.05 1.38zM15.48 12.59 5.3 22.84l11.45-6.55c1.44-.82 1.44-2.17 0-3l-1.27-.7zM16.14 11.23l2.84-1.63c.67-.38 1.02-.9 1.02-1.42 0-.53-.35-1.04-1.02-1.43l-2.84-1.63-2.58 2.58 2.58 2.53zM5.3 1.16 14.67 6.5l-2.58 2.58-6.79-6.72v-.03a1.94 1.94 0 0 1 0-1.17z"/>
  </svg>
);
