export interface Project {
  id: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  userApplication?: string;
  images: string[];
  link?: string;
  github?: string;
  date: string;
  sector?: 'Consumer' | 'B2B';
  type?: 'Device' | 'Service';
  domain?: 'IoT' | 'Wearables' | 'Device Setup' | 'Network Management';
}

export const workProjects: Project[] = [
  {
    id: 'ffa',
    title: 'Frustration-Free Automation',
    description: 'Led new 0-to-1 GenAI initiative, Frustration-Free Automation. During setup of an Alexa-enabled smart home device, Frustration-Free Automation automatically creates Routines for compatible, connected devices to work together. Shipped across 1P and 3P partners, such as Amazon Basics, WiZ, and Phillips Hue.',
    problem: 'Customers struggled to realize the full value of their smart home devices, often purchasing products without understanding how to make them work together.',
    solution: 'Built a GenAI system that automatically creates intelligent Routines during device setup, suggesting contextually relevant automations based on compatible devices already in the home.',
    result: 'Shipped across 1P and 3P partners including Amazon Basics, WiZ, and Phillips Hue, significantly improving customer smart home onboarding experience.',
    images: [
      new URL('../assets/ffa-1.jpg', import.meta.url).href,
      new URL('../assets/ffa-2.jpg', import.meta.url).href
    ],
    link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=TWqBhTGsWJP8lYhbye',
    date: '2024',
    sector: 'Consumer',
    type: 'Service'
  },
  {
    id: 'ffs-portal',
    title: 'Frustration-Free Setup Developer Portal',
    description: 'Lead product manager for the FFS developer portal experience.',
    problem: 'Device manufacturers needed streamlined access to Amazon\'s Frustration-Free Setup (FFS) integration tools and documentation.',
    solution: 'Created a comprehensive developer portal providing clear integration guides, API documentation, and self-service tools for device certification.',
    result: 'Enabled hundreds of device manufacturers to integrate FFS capabilities into their products, accelerating time-to-market for smart home devices.',
    images: [new URL('../assets/ffs-portal-1.png', import.meta.url).href],
    link: 'https://developer.amazon.com/frustration-free-setup',
    date: '2023',
    sector: 'B2B',
    type: 'Service'
  },
  {
    id: 'air-quality',
    title: 'Amazon Air Quality Monitor',
    description: 'Led team that upleveled the Amazon Air Quality Monitor.',
    problem: 'Customers lacked visibility into their indoor air quality, which could impact health but was invisible without specialized equipment.',
    solution: 'Led product development of an affordable, easy-to-use air quality monitor that tracks five key metrics and integrates with Alexa for voice-controlled monitoring.',
    result: 'Launched a successful consumer device that makes indoor air quality monitoring accessible to mainstream customers.',
    images: [new URL('../assets/air-quality-1.jpg', import.meta.url).href],
    link: 'https://a.co/d/iN3uhzq',
    date: '2022',
    sector: 'Consumer',
    type: 'Device'
  },
  {
    id: 'ffs-matter',
    title: 'Frustration Free Setup for Matter Devices',
    description: 'Lead product manager for FFS over Matter.',
    problem: 'Amazon needed a way to integrate the new Matter standard into their existing setup experience for 1P and 3P devices while maintaining customer expectations.',
    solution: 'Shipped Matter Simple Setup that kept the magic of zero-touch setup and married it with the standardized protocol from the Matter spec, creating a seamless bridge between proprietary and open standards.',
    result: 'Enabled Amazon and third-party device manufacturers to adopt Matter while preserving the best-in-class Frustration-Free Setup experience customers knew and loved.',
    images: [new URL('../assets/ffs-matter-1.png', import.meta.url).href],
    link: 'https://developer.amazon.com/en-US/blogs/alexa/device-makers/2022/01/ces-frustration-free-setup-matter',
    date: '2022',
    sector: 'B2B',
    type: 'Service'
  },
  {
    id: 'wifi-reconnect',
    title: 'Wifi Simple Reconnect',
    description: 'Wifi simple reconnect aims to simplify updating network credentials for a customer\'s compatible smart devices. As a customer, updating all your connected devices\' wifi credentials can be a painful experience when moving to a new building, changing internet service providers, or simply updating wifi passwords for security reasons.',
    problem: 'Customers had to manually update WiFi credentials on each smart device individually when moving homes, changing ISPs, or updating passwords - a tedious process that could take hours with dozens of devices.',
    solution: 'Built a system where customers update WiFi credentials once through Alexa, which then automatically propagates the new network information to all compatible smart home devices simultaneously.',
    result: 'Reduced WiFi credential updates from hours of manual device-by-device configuration to a single action, dramatically improving the smart home ownership experience during network changes.',
    images: [new URL('../assets/wifi-reconnect-1.png', import.meta.url).href],
    link: 'https://developer.amazon.com/en-US/blogs/alexa/device-makers/2020/09/Frustration-Free-Setup-Expands-Features-Protocols-and-Simplifies-Onboarding',
    date: '2021',
    sector: 'Consumer',
    type: 'Service'
  },
  {
    id: 'cas',
    title: 'Verizon Critical Asset Sensor',
    description: 'Lead product manager for Verizon\'s first 1P B2B product, the Critical Asset Sensor. The solution includes a multi-sensor device, access to data stream APIs, and Verizon 4G LTE-M M2M connectivity, all bundled together. Deploy multi-sensor devices in the field without having to worry about devices, connectivity, protocols, or security.',
    problem: 'Enterprise customers needed to monitor critical assets in the field but faced complexity managing devices, cellular connectivity, data APIs, and security separately - often requiring multiple vendors and integration work.',
    solution: 'Created Verizon\'s first fully integrated B2B IoT product: a multi-sensor device with built-in 4G LTE-M connectivity, data stream APIs, and security - all bundled as a turnkey solution.',
    result: 'Enabled businesses to deploy field monitoring at scale without technical overhead, establishing Verizon\'s first-party presence in the enterprise IoT device market.',
    images: [new URL('../assets/cas-1.png', import.meta.url).href],
    link: 'https://thingspace.verizon.com/documentation/iot-devices/critical-asset-sensor.html',
    date: '2020',
    sector: 'B2B',
    type: 'Device'
  },
  {
    id: 'gizmo-pal',
    title: 'Gizmo Pal Watch',
    description: 'Owned product requirements and development for GizmoPal watch at Verizon.',
    problem: 'Parents wanted to stay connected with young children who weren\'t ready for smartphones, but existing solutions were either too complex or lacked essential safety features.',
    solution: 'Led product development for a simplified wearable designed specifically for kids - GPS tracking, two-way voice calling to approved contacts, and parental controls through an intuitive app.',
    result: 'Launched a successful kids\' wearable line that gave parents peace of mind while giving children age-appropriate connected device capabilities.',
    images: [new URL('../assets/gizmo-pal-1.jpg', import.meta.url).href],
    link: 'https://www.verizon.com/connected-smartwatches/verizon-gizmowatch-2/',
    date: '2019',
    sector: 'Consumer',
    type: 'Device'
  },
  {
    id: 'thingspace',
    title: 'ThingSpace Ready',
    description: 'Led Product for ThingSpace Ready. TS-R was designed to help cellular IoT solutions get to market quickly, reliably and cost effectively. Access everything you need, including transparent pricing, design house and system integrator support, free certification support and bill-initiated credits.',
    problem: 'IoT companies faced long, unpredictable development cycles getting cellular-connected products to market - navigating opaque pricing, finding design partners, and handling certification independently.',
    solution: 'Created an end-to-end IoT launch platform with transparent pricing, vetted design house partnerships, free certification support, and bill-initiated credits to reduce financial risk.',
    result: 'Accelerated time-to-market for IoT companies by bundling all necessary services and resources in one platform, removing traditional barriers to cellular IoT adoption.',
    images: ['/placeholder.svg'],
    link: 'https://thingspace.verizon.com/ready',
    date: '2018',
    sector: 'B2B',
    type: 'Service'
  },
  {
    id: 'wear24',
    title: 'Verizon Wear24',
    description: 'Lead software product manager for the Wear24 watch.',
    problem: 'Android Wear smartwatches required constant phone tethering, limiting their utility for fitness activities and situations where carrying a phone wasn\'t practical.',
    solution: 'Led software product management for Verizon\'s first standalone LTE smartwatch - enabling calls, messaging, and data without a phone connection through integrated cellular connectivity.',
    result: 'Delivered an independent smartwatch experience that freed users from phone dependency while maintaining full communication and app functionality.',
    images: [new URL('../assets/wear24-1.png', import.meta.url).href],
    link: 'https://www.phonescoop.com/articles/article.php?a=19172',
    date: '2017',
    sector: 'Consumer',
    type: 'Device'
  }
];

export const sideProjects: Project[] = [
  {
    id: 'prevue',
    title: 'Prevue - Self-Hosted Retro Cable TV Guide',
    description: 'A self-hosted retro cable TV guide for Jellyfin and Plex. Turns your media library into a channel-surfing experience with auto-generated channels, a Prevue Channel-style EPG grid, built-in HLS player, and IPTV output. AI-powered channel creation via OpenRouter lets you describe channels in plain English. Includes iconic scene detection, "What Did I Miss" catch-up, sleep timer, and Just Watch mode.',
    problem: 'Decision fatigue when browsing media libraries. You sit down and spend more time choosing what to watch than actually watching. Existing solutions charge for cable TV-like experiences over your own content.',
    solution: 'Built a self-hosted platform that auto-generates channels from your Jellyfin/Plex library by genre, era, director, actor, or collection. AI channel creation lets you say "80s action movies" and it builds itself. PWA works on all devices.',
    result: 'Fully functional cable TV experience over personal media with IPTV export for Kodi/VLC/TiviMate, hardware transcoding up to 4K, multi-track audio/subtitle support, and Docker deployment.',
    images: [
      new URL('../assets/prevue-1.png', import.meta.url).href,
      new URL('../assets/prevue-2.png', import.meta.url).href,
      new URL('../assets/prevue-3.png', import.meta.url).href,
      new URL('../assets/prevue-4.png', import.meta.url).href
    ],
    github: 'https://github.com/qrobinso/prevue',
    date: '2026'
  },
  {
    id: 'augustus',
    title: 'Augustus - AI Podcast Generator',
    description: 'A self-hosted audio intelligence platform that transforms personalized content into AI-generated podcasts. Pulls from RSS feeds, custom websites, and NewsAPI, then uses LLMs via OpenRouter to write scripts and TTS to produce audio. Supports multi-profile households, scheduled briefings, customizable AI host personalities ("Casts"), and chapter-based playback.',
    problem: 'Staying informed requires jumping between multiple news sources, podcasts, and feeds. No existing tool turns your specific interests into a personalized audio briefing you can listen to hands-free.',
    solution: 'Built a self-hosted platform with FastAPI backend, React frontend, and SQLite. Users define topics, AI suggests and scrapes sources, LLMs script the episode, and TTS (Piper, ElevenLabs, or Gemini) produces the audio. Supports multiple profiles and scheduled daily briefings.',
    result: 'A fully local, privacy-first podcast pipeline with 100+ model support via OpenRouter, three TTS providers, Docker deployment, and enterprise-ready multi-profile support.',
    images: ['/placeholder.svg'],
    github: 'https://github.com/qrobinso/augustus',
    date: '2025'
  },
  {
    id: 'vinyl-stream',
    title: 'Vinyl Stream - Physical Triggers for Digital Streaming',
    description: 'An ESP32-powered NFC music player that integrates with Home Assistant. Place an NFC card on the reader to play music on Sonos speakers via MQTT; remove it to pause, place it back to resume. Cards are programmed with Spotify/music URLs using any NFC writing app. Supports NTAG213/215/216 stickers.',
    problem: 'Music lovers wanted the tactile, intentional experience of vinyl without sacrificing the convenience and multi-room capabilities of streaming services.',
    solution: 'Built an ESP32 + MFRC522 NFC reader that publishes play/pause/resume actions to Home Assistant via MQTT. WiFiManager captive portal handles first-boot config. Home Assistant automations control Sonos playback.',
    result: 'A working hardware bridge between physical NFC cards and digital streaming, with automatic play/pause based on card presence and resume support for returning to the same track.',
    images: ['/placeholder.svg'],
    github: 'https://github.com/qrobinso/music-cards-esp32',
    date: '2025'
  },
  {
    id: 'photo-frame',
    title: 'Photo Frame Assistant - Self-Hosted Digital Photo Frame Manager',
    description: 'Photo Frame Assistant is a self-hosted platform that manages multiple digital photo frames across a home network. Built as a privacy-first alternative to cloud services, it keeps all photos local while controlling e-ink displays, smart TVs, and DIY frames from a unified dashboard. The system handles scheduling, sync groups for coordinated displays, and power optimization for battery-operated frames. Technical stack runs on Python with Docker containers, MQTT communication, and Raspberry Pi compatibility.',
    problem: 'Existing digital photo frame solutions required uploading private photos to cloud services, lacked multi-device management, and didn\'t support heterogeneous display types.',
    solution: 'Built a self-hosted platform using Python, Docker, and MQTT that manages e-ink displays, smart TVs, and DIY frames from one dashboard while keeping all photos local on the home network.',
    result: 'Delivered a privacy-first alternative with features including scheduling, sync groups for coordinated displays, and power optimization for battery-operated frames.',
    images: [
      new URL('../assets/photo-frame-1.jpg', import.meta.url).href,
      new URL('../assets/photo-frame-2.jpg', import.meta.url).href,
      new URL('../assets/photo-frame-3.jpg', import.meta.url).href,
      new URL('../assets/photo-frame-4.jpg', import.meta.url).href,
      new URL('../assets/photo-frame-5.jpg', import.meta.url).href
    ],
    link: '',
    date: '2025'
  },
  {
    id: 'frotorial',
    title: 'FROtorial - Social Network for Textured Hair',
    description: 'FROtorial addressed a gap in the multi-billion dollar ethnic hair care market - no major social platforms served the kinky and curly hair community. We built a social network where users could document their hair journey, search product reviews filtered by hair type, discover routines, and buy products directly. The core insight was simple: people with textured hair had questions and conversations they wouldn\'t post on Facebook or Instagram. They needed a dedicated space.',
    problem: 'The multi-billion dollar ethnic hair care market had no dedicated social platform where people with kinky and curly hair could share routines, product reviews, and advice.',
    solution: 'Created a specialized social network enabling users to document hair journeys, search reviews filtered by hair type, discover routines, and purchase products directly within the platform.',
    result: 'Built a community space that addressed conversations users wouldn\'t have on mainstream platforms like Facebook or Instagram, creating value in an underserved market.',
    images: [
      new URL('../assets/frotorial-1.avif', import.meta.url).href,
      new URL('../assets/frotorial-2.avif', import.meta.url).href,
      new URL('../assets/frotorial-3.avif', import.meta.url).href,
      new URL('../assets/frotorial-4.avif', import.meta.url).href
    ],
    link: '',
    date: '2021'
  },
  {
    id: 'shopbuy',
    title: 'ShopBuy - Universal Cart for Multiple Retailers',
    description: 'ShopBuy aggregated products from multiple retailers into a single feed with a universal cart. Built a platform that mapped disparate product fields to a common format. The product strategy borrowed from social media - an Instagram-style feed that felt familiar but showed retail products. Added gamification to drive repeat visits and engagement.',
    problem: 'Online shoppers had to manage multiple carts across different retailers, creating friction in the purchasing process and limiting product discovery.',
    solution: 'Built a product aggregation platform with a universal cart, Instagram-style feed for familiar UX, and gamification elements to drive engagement across multiple retailers.',
    result: 'Created a unified shopping experience that mapped disparate product data to a common format, enabling cross-retailer browsing and checkout.',
    images: [
      new URL('../assets/shopbuy-1.avif', import.meta.url).href,
      new URL('../assets/shopbuy-2.avif', import.meta.url).href,
      new URL('../assets/shopbuy-3.avif', import.meta.url).href,
      new URL('../assets/shopbuy-4.avif', import.meta.url).href
    ],
    link: '',
    date: '2018'
  }
];


export const patents: Project[] = [
  {
    id: 'patent-12132611',
    title: 'Systems and Methods for Automatically Configuring Computer Devices',
    description: 'Techniques for enabling customers to setup devices before delivery. Customers can provide pre-onboarding information via QR codes containing network and registration data for automatic device configuration. Patent 12132611',
    userApplication: 'Scan a QR code before delivery, device auto-connects to WiFi and account on unboxing.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2024',
    domain: 'Device Setup'
  },
  {
    id: 'patent-11871471',
    title: 'Process for Managing Reconnections of Devices in a Network',
    description: 'Approach for reconnecting IoT devices after network connection loss. Devices transmit beacons to authorized devices which relay to remote systems for password retrieval and reconnection. Patent 11871471',
    userApplication: 'Echo automatically reconnects smart devices when WiFi password changes.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jan 2024',
    domain: 'Network Management'
  },
  {
    id: 'patent-11671829',
    title: 'Server-Based Association of a User Device with a User Account',
    description: 'Efficient registration of third party devices with user accounts through Frustration Free Setup (FFS) service. Validates beacons and initiates user authentication for proper device association. Patent 11,671,829',
    userApplication: 'New smart devices auto-add to Alexa without manufacturer apps or separate accounts.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jun 2023',
    domain: 'Device Setup'
  },
  {
    id: 'patent-11606690',
    title: 'Confidence Based Network Provisioning of Devices',
    description: 'Techniques for establishing data connections using confidence scores. Determines likelihood of user authorization based on multiple data sources to connect devices to networks. Patent 11,606,690',
    userApplication: 'Devices intelligently connect to home network without pairing modes.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Mar 2023',
    domain: 'Device Setup'
  },
  {
    id: 'patent-11575759',
    title: 'Associating Device with User Account and Establishing Connection',
    description: 'Techniques for connecting computing devices to networks. Determines device associations with accounts and manages confirmation requests for secure device setup. Patent 11575759',
    userApplication: 'Simple phone notification confirms adding new devices securely.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Feb 2023',
    domain: 'Device Setup'
  },
  {
    id: 'patent-11368994',
    title: 'Process for Managing Reconnections of Devices in a Network',
    description: 'IoT device reconnection after network connection loss. Echo devices transmit beacons through provisioner devices to retrieve updated passwords and reestablish network connections. Patent 11,368,994',
    userApplication: 'Devices auto-reconnect after power outages via Echo hub.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jun 2022',
    domain: 'Network Management'
  },
  {
    id: 'patent-wearable-ui',
    title: 'Configuring a User Interface Layout via a Configuration Device',
    description: 'System for configuring smart watch user interface layouts. Provides configuration information to permit device UI updates based on user preferences. Patent 20170322711',
    userApplication: 'Customize smartwatch layout from phone, changes sync instantly.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Nov 2019',
    domain: 'Wearables'
  },
  {
    id: 'patent-homescreen',
    title: 'Homescreen for Wearable Devices',
    description: 'Personalized use case detection for wearable devices. Presents new home-screen experiences with multiple app interfaces based on location, sensor, time, and peripheral state data. Patent US20170075551A1',
    userApplication: 'Watch shows fitness apps at gym, work apps at office automatically.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019',
    domain: 'Wearables'
  },
  {
    id: 'patent-connection-mgmt',
    title: 'Connection Management for Internet of Things Devices',
    description: 'Network device management for IoT devices on LTE Cat-M1 networks. Optimizes reporting configurations to reduce signal loading and power consumption. Patent 20220174596',
    userApplication: 'Battery-powered sensors last months via smart cellular data management.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019',
    domain: 'IoT'
  },
  {
    id: 'patent-4g-antenna',
    title: 'Wearable Device Design for 4G Antennas',
    description: '4G antenna implementation in wearable devices. Optimizes signal transmission while minimizing user exposure through raised antenna design and split antenna portions. Patent 20170373381',
    userApplication: 'Strong cellular calls on watch with radiation kept safely from skin.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019',
    domain: 'Wearables'
  },
  {
    id: 'patent-touch-ui',
    title: 'Wearable Device Having Interchangeable Touch User Interface',
    description: 'Modular wearable devices with detachable touch interfaces. Allows user interchangeability between core units and containers for flexible touch interface options. Patent 20170003720',
    userApplication: 'Swap watch screens between fitness band and larger display.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jul 2019',
    domain: 'Wearables'
  },
  {
    id: 'patent-wireless',
    title: 'Wireless Network Interface Management on Multi-Radio Devices',
    description: 'Optimizes wireless network interface configurations on embedded computing devices based on operational modes and connection statuses. Patent 20180205608',
    userApplication: 'Watch auto-switches WiFi, Bluetooth, cellular for optimal battery life.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Aug 2018',
    domain: 'Wearables'
  },
  {
    id: 'patent-sensors',
    title: 'Enabling Interchangeability of Sensor Devices',
    description: 'System for replacing sensors on user devices. Detects connect events and provides sensor data for application use with interchangeable sensor devices. Patent 20170294085',
    userApplication: 'Upgrade individual sensors without replacing entire wearable device.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Apr 2018',
    domain: 'Wearables'
  },
  {
    id: 'patent-activation',
    title: 'Assisted Cellular Device Activation',
    description: 'SDK-based cellular service activation for wearable devices. Primary and embedded SDKs coordinate to obtain activation parameters and request cellular activation. Patent 9854426',
    userApplication: 'Activate kids\' watch cellular service from your phone remotely.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Dec 2017',
    domain: 'Wearables'
  },
  {
    id: 'patent-multicast',
    title: 'Registering a Smart Device Using a Multicast Protocol',
    description: 'Point-to-multipoint messaging for smart device registration. Requests and provides security information to permit device registration with registration devices. Patent US10291603B2',
    userApplication: 'Multiple smart devices register to network simultaneously, not one-by-one.',
    images: ['/placeholder.svg'],
    link: '',
    date: 'May 2019',
    domain: 'IoT'
  }
];
