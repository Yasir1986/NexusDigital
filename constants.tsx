
import React from 'react';
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web',
    title: 'Web Development',
    description: 'Bespoke, high-performance websites built with the latest frameworks.',
    detailedDescription: 'Our web development team leverages cutting-edge technologies like React, Next.js, and Tailwind CSS to build blazing-fast, SEO-optimized, and highly accessible web applications tailored to your business needs.',
    features: ['Custom UI/UX Design', 'Performance Optimization', 'E-commerce Integration', 'Modern CMS Solutions'],
    icon: '🌐',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'shopify',
    title: 'Shopify Stores',
    description: 'Premium e-commerce experiences built for high conversion and scale.',
    detailedDescription: 'We build enterprise-grade Shopify and Shopify Plus stores. From custom Liquid theme development to complex private app integrations, we ensure your store is optimized for the ultimate shopping experience.',
    features: ['Custom Theme Dev', 'App Customization', 'Migration Services', 'CRO Optimization'],
    icon: '🛍️',
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love.',
    detailedDescription: 'Crafting seamless mobile experiences for iOS and Android. We specialize in Flutter and React Native to deliver native performance with cross-platform efficiency, focusing on user-centric design.',
    features: ['Cross-Platform Reach', 'Biometric Security', 'Push Notification Systems', 'Offline Data Functionality'],
    icon: '📱',
    color: 'from-fuchsia-500 to-pink-400'
  },
  {
    id: 'games',
    title: 'Mobile Games',
    description: 'Immersive gaming experiences with stunning visuals and gameplay.',
    detailedDescription: 'Bringing your game concepts to life with Unity and Unreal Engine. We handle everything from high-fidelity character design and physics to multiplayer networking and monetization strategy.',
    features: ['High-Quality 2D & 3D Assets', 'Multiplayer Integration', 'In-App Purchase Systems', 'Cross-Device Sync'],
    icon: '🎮',
    color: 'from-orange-500 to-red-400'
  },
  {
    id: 'hosting',
    title: 'Domain & Hosting',
    description: 'Ultra-fast cloud servers and domain management with 99.9% uptime.',
    detailedDescription: 'Secure your digital home with our enterprise-grade hosting infrastructure. We provide automated backups, SSL certificates, and global CDN delivery via Cloudflare to ensure your site is always available and safe.',
    features: ['99.99% Uptime SLA', 'Daily Managed Backups', 'Free SSL Certificates', 'Advanced DDoS Protection'],
    icon: '☁️',
    color: 'from-indigo-500 to-purple-400'
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce',
    description: 'Scalable WordPress e-commerce solutions with total control.',
    detailedDescription: 'Leverage the power of WordPress with a bespoke WooCommerce setup. We build high-traffic stores that offer complete ownership of your data and endless customization possibilities for unique business models.',
    features: ['Custom Plugin Dev', 'Speed Optimization', 'Secure Payment Gateways', 'Wholesale Systems'],
    icon: '🛒',
    color: 'from-purple-600 to-indigo-500'
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    description: 'Strategic design that bridges the gap between brand and user.',
    detailedDescription: 'Our design philosophy is rooted in user psychology. We create intuitive interfaces and memorable brand experiences that drive engagement and build long-term customer loyalty through beauty and utility.',
    features: ['User Research', 'Interactive Prototypes', 'Brand Guidelines', 'Accessibility Audits'],
    icon: '🎨',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    id: 'seo',
    title: 'SEO & Growth',
    description: 'Data-driven marketing and technical SEO to dominate rankings.',
    detailedDescription: 'Visibility is everything. We combine technical SEO (Core Web Vitals) with content strategy and performance marketing to ensure your digital products reach the right audience at the right time.',
    features: ['Technical SEO Audits', 'Keyword Strategy', 'Conversion Analytics', 'Performance Ads'],
    icon: '📈',
    color: 'from-rose-500 to-red-600'
  }
];

export const PORTFOLIO = [
  { id: 1, title: 'E-Commerce Nexus', category: 'Web App', image: 'https://picsum.photos/seed/web1/800/600' },
  { id: 2, title: 'HealthTrack Pro', category: 'Mobile App', image: 'https://picsum.photos/seed/mob1/800/600' },
  { id: 3, title: 'Galactic Odyssey', category: 'Game', image: 'https://picsum.photos/seed/game1/800/600' },
  { id: 4, title: 'CloudStream', category: 'Platform', image: 'https://picsum.photos/seed/plat1/800/600' },
  { id: 5, title: 'ZenSpace', category: 'Lifestyle App', image: 'https://picsum.photos/seed/mob2/800/600' },
  { id: 6, title: 'FinanceFlow', category: 'Dashboard', image: 'https://picsum.photos/seed/dash1/800/600' }
];

export const TESTIMONIALS = [
  {
    id: 1,
    content: "NexusDigital didn't just build our app; they helped us redefine our digital strategy. The attention to detail is simply unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CTO",
    company: "StellarTech Solutions",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    content: "Our game reached 1M downloads within the first month thanks to their incredible optimization and immersive UX design. Highly recommended!",
    author: "Marcus Thorne",
    role: "Founder",
    company: "NeonPlay Studios",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    content: "The web portal they developed handles 50k+ daily active users without a hitch. Their hosting solutions are fast and rock-solid.",
    author: "Elena Rodriguez",
    role: "Product Director",
    company: "GlobalStream Co.",
    avatar: "https://i.pravatar.cc/150?u=elena"
  }
];
