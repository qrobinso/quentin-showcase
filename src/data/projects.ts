export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  link?: string;
  date: string;
}

export const workProjects: Project[] = [
  {
    id: 'ffa',
    title: 'Frustration-Free Automation',
    description: 'Led new 0-to-1 GenAI initiative, Frustration-Free Automation. During setup of an Alexa-enabled smart home device, Frustration-Free Automation automatically creates Routines for compatible, connected devices to work together. Shipped across 1P and 3P partners, such as Amazon Basics, WiZ, and Phillips Hue.',
    images: [
      new URL('../assets/ffa-1.jpg', import.meta.url).href,
      new URL('../assets/ffa-2.jpg', import.meta.url).href
    ],
    link: '',
    date: '2024'
  },
  {
    id: 'ffs-portal',
    title: 'Frustration-Free Setup Developer Portal',
    description: 'Lead product manager for the FFS developer portal experience.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2023'
  },
  {
    id: 'air-quality',
    title: 'Amazon Air Quality Monitor',
    description: 'Led team that upleveled the Amazon Air Quality Monitor.',
    images: [new URL('../assets/air-quality-1.jpg', import.meta.url).href],
    link: '',
    date: '2022'
  },
  {
    id: 'ffs-matter',
    title: 'Frustration Free Setup for Matter Devices',
    description: 'Lead product manager for FFS over Matter.',
    images: [new URL('../assets/ffs-matter-1.png', import.meta.url).href],
    link: '',
    date: '2022'
  },
  {
    id: 'wifi-reconnect',
    title: 'Wifi Simple Reconnect',
    description: 'Wifi simple reconnect aims to simplify updating network credentials for a customer\'s compatible smart devices. As a customer, updating all your connected devices\' wifi credentials can be a painful experience when moving to a new building, changing internet service providers, or simply updating wifi passwords for security reasons.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2021'
  },
  {
    id: 'cas',
    title: 'Verizon Critical Asset Sensor',
    description: 'Lead product manager for Verizon\'s first 1P B2B product, the Critical Asset Sensor. The solution includes a multi-sensor device, access to data stream APIs, and Verizon 4G LTE-M M2M connectivity, all bundled together. Deploy multi-sensor devices in the field without having to worry about devices, connectivity, protocols, or security.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2020'
  },
  {
    id: 'gizmo-pal',
    title: 'Gizmo Pal Watch',
    description: 'Owned product requirements and development for GizmoPal watch at Verizon.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2019'
  },
  {
    id: 'thingspace',
    title: 'ThingSpace Ready',
    description: 'Led Product for ThingSpace Ready. TS-R was designed to help cellular IoT solutions get to market quickly, reliably and cost effectively. Access everything you need, including transparent pricing, design house and system integrator support, free certification support and bill-initiated credits.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2018'
  },
  {
    id: 'wear24',
    title: 'Verizon Wear24',
    description: 'Lead software product manager for the Wear24 watch.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2017'
  }
];

export const sideProjects: Project[] = [
  {
    id: 'vinyl-stream',
    title: 'Vinyl Stream - Physical Triggers for Digital Streaming',
    description: 'Vinyl Stream uses NFC technology to bridge physical vinyl records and streaming services. Users place NFC-enabled records on a base unit that instantly plays the album through connected smart speakers while syncing smart lighting to match album artwork. The system integrates with Spotify, Apple Music, and TIDAL, supporting multi-room audio across smart speaker ecosystems.',
    images: ['/placeholder.svg'],
    link: '',
    date: '2025'
  },
  {
    id: 'photo-frame',
    title: 'Photo Frame Assistant - Self-Hosted Digital Photo Frame Manager',
    description: 'Photo Frame Assistant is a self-hosted platform that manages multiple digital photo frames across a home network. Built as a privacy-first alternative to cloud services, it keeps all photos local while controlling e-ink displays, smart TVs, and DIY frames from a unified dashboard. The system handles scheduling, sync groups for coordinated displays, and power optimization for battery-operated frames. Technical stack runs on Python with Docker containers, MQTT communication, and Raspberry Pi compatibility.',
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
    description: 'FROtorial addressed a gap in the multi-billion dollar ethnic hair care market—no major social platforms served the kinky and curly hair community. We built a social network where users could document their hair journey, search product reviews filtered by hair type, discover routines, and buy products directly. The core insight was simple: people with textured hair had questions and conversations they wouldn\'t post on Facebook or Instagram. They needed a dedicated space.',
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
    description: 'ShopBuy aggregated products from multiple retailers into a single feed with a universal cart. Built a platform that mapped disparate product fields to a common format. The product strategy borrowed from social media—an Instagram-style feed that felt familiar but showed retail products. Added gamification to drive repeat visits and engagement.',
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
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2024'
  },
  {
    id: 'patent-11871471',
    title: 'Process for Managing Reconnections of Devices in a Network',
    description: 'Approach for reconnecting IoT devices after network connection loss. Devices transmit beacons to authorized devices which relay to remote systems for password retrieval and reconnection. Patent 11871471',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jan 2024'
  },
  {
    id: 'patent-11671829',
    title: 'Server-Based Association of a User Device with a User Account',
    description: 'Efficient registration of third party devices with user accounts through Frustration Free Setup (FFS) service. Validates beacons and initiates user authentication for proper device association. Patent 11,671,829',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jun 2023'
  },
  {
    id: 'patent-11606690',
    title: 'Confidence Based Network Provisioning of Devices',
    description: 'Techniques for establishing data connections using confidence scores. Determines likelihood of user authorization based on multiple data sources to connect devices to networks. Patent 11,606,690',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Mar 2023'
  },
  {
    id: 'patent-11575759',
    title: 'Associating Device with User Account and Establishing Connection',
    description: 'Techniques for connecting computing devices to networks. Determines device associations with accounts and manages confirmation requests for secure device setup. Patent 11575759',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Feb 2023'
  },
  {
    id: 'patent-11368994',
    title: 'Process for Managing Reconnections of Devices in a Network',
    description: 'IoT device reconnection after network connection loss. Echo devices transmit beacons through provisioner devices to retrieve updated passwords and reestablish network connections. Patent 11,368,994',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jun 2022'
  },
  {
    id: 'patent-wearable-ui',
    title: 'Configuring a User Interface Layout via a Configuration Device',
    description: 'System for configuring smart watch user interface layouts. Provides configuration information to permit device UI updates based on user preferences. Patent 20170322711',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Nov 2019'
  },
  {
    id: 'patent-homescreen',
    title: 'Homescreen for Wearable Devices',
    description: 'Personalized use case detection for wearable devices. Presents new home-screen experiences with multiple app interfaces based on location, sensor, time, and peripheral state data. Patent US20170075551A1',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019'
  },
  {
    id: 'patent-connection-mgmt',
    title: 'Connection Management for Internet of Things Devices',
    description: 'Network device management for IoT devices on LTE Cat-M1 networks. Optimizes reporting configurations to reduce signal loading and power consumption. Patent 20220174596',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019'
  },
  {
    id: 'patent-4g-antenna',
    title: 'Wearable Device Design for 4G Antennas',
    description: '4G antenna implementation in wearable devices. Optimizes signal transmission while minimizing user exposure through raised antenna design and split antenna portions. Patent 20170373381',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Oct 2019'
  },
  {
    id: 'patent-touch-ui',
    title: 'Wearable Device Having Interchangeable Touch User Interface',
    description: 'Modular wearable devices with detachable touch interfaces. Allows user interchangeability between core units and containers for flexible touch interface options. Patent 20170003720',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Jul 2019'
  },
  {
    id: 'patent-wireless',
    title: 'Wireless Network Interface Management on Multi-Radio Devices',
    description: 'Optimizes wireless network interface configurations on embedded computing devices based on operational modes and connection statuses. Patent 20180205608',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Aug 2018'
  },
  {
    id: 'patent-sensors',
    title: 'Enabling Interchangeability of Sensor Devices',
    description: 'System for replacing sensors on user devices. Detects connect events and provides sensor data for application use with interchangeable sensor devices. Patent 20170294085',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Apr 2018'
  },
  {
    id: 'patent-activation',
    title: 'Assisted Cellular Device Activation',
    description: 'SDK-based cellular service activation for wearable devices. Primary and embedded SDKs coordinate to obtain activation parameters and request cellular activation. Patent 9854426',
    images: ['/placeholder.svg'],
    link: '',
    date: 'Dec 2017'
  },
  {
    id: 'patent-multicast',
    title: 'Registering a Smart Device Using a Multicast Protocol',
    description: 'Point-to-multipoint messaging for smart device registration. Requests and provides security information to permit device registration with registration devices. Patent US10291603B2',
    images: ['/placeholder.svg'],
    link: '',
    date: 'May 2019'
  }
];
