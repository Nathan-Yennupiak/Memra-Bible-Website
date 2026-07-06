import React from "react";
import screenshotHome from "@/assets/screenshots/home.jpg";
import screenshotReader from "@/assets/screenshots/reader.jpg";
import screenshotSearch from "@/assets/screenshots/search.jpg";
import screenshotLibrary from "@/assets/screenshots/library.jpg";
import screenshotSettings from "@/assets/screenshots/settings.jpg";
import screenshotVersions from "@/assets/screenshots/versions2.jpg";
import screenshotVerseSelect from "@/assets/screenshots/verse-select.jpg";
import { 
  IconSearch, 
  IconBook, 
  IconHighlighter, 
  IconPencil, 
  IconBookmark, 
  IconMoon, 
  IconCalendar, 
  IconWifiOff 
} from "@/components/Icons";

export const features = [
  { icon: <IconSearch />, name: "Fast Bible Search", desc: "Instantly locate verses, keywords, and passages across the entire Bible." },
  { icon: <IconBook />, name: "Multiple Translations", desc: "Switch seamlessly between KJV, NIV, ESV, NKJV, and more." },
  { icon: <IconHighlighter />, name: "Verse Highlighting", desc: "Mark meaningful passages in four colors for quick future reference." },
  { icon: <IconPencil />, name: "Notes & Study Tools", desc: "Capture insights, cross-references, and commentary as you study." },
  { icon: <IconBookmark />, name: "Bookmarks", desc: "Save important verses and return to them from any device." },
  { icon: <IconMoon />, name: "Dark Mode", desc: "Comfortable reading day or night with a true dark display." },
  { icon: <IconCalendar />, name: "Reading Plans", desc: "Build consistent Bible reading habits with guided daily plans." },
  { icon: <IconWifiOff />, name: "Offline Access", desc: "Read Scripture anywhere — no internet connection required." },
];

export const screens = [
  { label: "Home", image: screenshotHome },
  { label: "Bible Reader", image: screenshotReader },
  { label: "Verse Actions", image: screenshotVerseSelect },
  { label: "Search", image: screenshotSearch },
  { label: "Library", image: screenshotLibrary },
  { label: "Translations", image: screenshotVersions },
  { label: "Settings", image: screenshotSettings },
];

export const stats = [
  { n: "100+", l: "Downloads" },
  { n: "4.7★", l: "App Store Rating" },
  { n: "1000+", l: "Verses Read" },
  { n: "10+", l: "Countries" },
];

export const testimonials = [
  {
    quote: "I've tried every Bible app available. Memra Bible is the only one that doesn't get in the way of actually reading the Word. The clean interface has transformed my quiet time.",
    name: "Pastor James Osei",
    role: "Senior Pastor, Accra",
  },
  {
    quote: "As a seminary student, I need serious study tools. Memra's notes and highlighting system is exactly what I was looking for — and it works beautifully offline during my commute.",
    name: "Rachel Kim",
    role: "M.Div. Student, Dallas Theological Seminary",
  },
  {
    quote: "I gave this to my elderly mother who had never used a Bible app. She called me the next day to say she'd read three chapters before bed. That says everything.",
    name: "Emmanuel Darko",
    role: "Software Engineer & New Believer",
  },
];

export const faqs = [
  {
    q: "Is Memra Bible free?",
    a: "Yes. Memra Bible is completely free to download and use. All core features — reading, search, highlighting, and notes — are available at no cost.",
  },
  {
    q: "Can I use it offline?",
    a: "Absolutely. Once downloaded, the Bible is available entirely offline. No internet connection is needed to read, search, or study.",
  },
  {
    q: "Which Bible translations are available?",
    a: "Memra Bible includes KJV, NIV, ESV, NKJV, NLT, AMP, and more. The translation library is regularly expanded.",
  },
  {
    q: "Does it support dark mode?",
    a: "Yes. Toggle between light and dark mode from the settings menu. The app respects your system preference by default.",
  },
  {
    q: "Is it available on both Android and iPhone?",
    a: "Yes. Memra Bible is available on Google Play for Android and the App Store for iOS.",
  },
];

export const versesOfTheDay = [
  { text: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
  { text: "I can do all this through him who gives me strength.", ref: "Philippians 4:13" },
  { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
  { text: "For I know the plans I have for you, declares the Lord.", ref: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "Seek first his kingdom and his righteousness, and all these things will be given to you as well.", ref: "Matthew 6:33" },
  { text: "The Lord is my light and my salvation—whom shall I fear?", ref: "Psalm 27:1" },
  { text: "Come to me, all you who are weary and burdened, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "With God all things are possible.", ref: "Matthew 19:26" },
  { text: "The joy of the Lord is your strength.", ref: "Nehemiah 8:10" },
  { text: "In the beginning was the Word, and the Word was with God, and the Word was God.", ref: "John 1:1" },
  { text: "For God so loved the world that he gave his one and only Son.", ref: "John 3:16" },
  { text: "Peace I leave with you; my peace I give you.", ref: "John 14:27" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
  { text: "We know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
  { text: "Love is patient, love is kind.", ref: "1 Corinthians 13:4" },
  { text: "The steadfast love of the Lord never ceases; his mercies never come to an end.", ref: "Lamentations 3:22-23" },
  { text: "Fear not, for I am with you; do not be dismayed, for I am your God.", ref: "Isaiah 41:10" },
];
