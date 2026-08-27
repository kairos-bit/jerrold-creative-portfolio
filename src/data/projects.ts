const project1 = "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787495534/ICC_2026_Acquiantance_Party_compressed.mp4";
import project2 from "@/assets/event-4.jpg";
import project3 from "@/assets/shell-1.jpg";
import project4 from "@/assets/web-1.jpeg";


export interface VideoItem {
  title: string;
  description: string;
  urls: string[];
  thumbnail?: string;
}

export interface ImageItem {
  title: string;
  description: string;
  cover: string;
  images: string[];
  aspect?: "portrait" | "landscape";
}
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  role: string;
  tools: string[];
  year: string;
  image: string;
  fullDescription: string;
  videos?: VideoItem[];
  gallery?: ImageItem[];
}
export const projects: Project[] = [
  {
  id: "tan-mrision-branding",
  title: "Videography & Video Editing",
  category: "Videography",
  description: "A collection of video projects focused on storytelling, editing, and visual presentation.",
  role: "Videographer & Video Editor",
  tools: ["Premiere Pro", "After Effects", "CapCut"],
  year: "2025",
  image: project1,
  fullDescription:
    "This section showcases selected videography works, including event highlights, promotional edits, and cinematic storytelling projects. Each video reflects my approach to pacing, composition, and emotional visual delivery.\n\nWith over four years of experience, I specialize in video editing and storytelling, integrating AI tools for content generation and short-form editing. I primarily use Adobe Premiere Pro, with additional proficiency in CapCut and After Effects.",


  videos: [
    {
      title: "Kairos Prod.",
      description: "Kairos Prod. is my personal production brand where I serve as the owner and creative lead. Through this platform, I have produced social media content and visual campaigns while gaining valuable experience in video production, branding, and digital storytelling.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493915/Kairos_Prod.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787495963/Mason_SDE_compressed.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787495256/FINAL_SDE_compressed.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787496231/IBPVIDEOHIGHLIGHT_compressed.mp4"],
    },
    {
      title: "Alex&B Intern",
      description: "During my internship at Alex&B, I gained hands-on experience in branding and visual communication while collaborating on projects for companies in Iligan such as Ambiente, Shell, and IIT. The experience strengthened my understanding of professional design workflows and brand development.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787496475/CROWN_REVEAL_compressed.mp4"],
    },
    {
      title: "Event Highlight Reel",
      description: "A fast-paced highlight video capturing the best moments of a live event with dynamic transitions and music sync.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787495534/ICC_2026_Acquiantance_Party_compressed.mp4"],
    },
   
     {
      title: "Promotional Videos",
      description: "A corporate promotional video created in collaboration with Republic Cement and other leading companies in Iligan City, showcasing brand identity, operations, and corporate storytelling through clean and engaging visuals.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787495739/RCMI_AVP_2026_compressed.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787494597/PMIEA_2025_compressed.mp4"],
    },
     {
      title: "Student Publication Videos",
      description: "Stories crafted by Silahis, where I played a key role in video shoots, editing, graphics, and overall production management.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493922/Silahis_1.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493927/Silahis_2.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493921/Silahis_3.mp4"],

    },




    {
      title: "Student Council Videos",
      description: "Student Council productions brought to life through direction, cinematography, and editing—spanning montages, short films, and music videos.",
      urls: ["https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493916/CCS_2.mp4", "https://res.cloudinary.com/jdxmsfk2/video/upload/v1787493927/CCS_3.mp4" ],
    },
   

    
  ],
},
//*
 {
  id: "fintech-mobile-app",
  title: "Photography & Photo Editing",
  category: "Photography",
  description: "Professional venture in the photography field",
  role: "Photographer & Editor",
  tools: ["Lightroom", "Photoshop"],
  year: "2024",
  image: project2,
  fullDescription:
    "A collection of photography works focused on composition, color, and visual storytelling.",
  gallery: [
    {
      title: "Portrait Session",
      description: "A portrait study focused on natural lighting and soft tones.",
      cover: "/images/portrait-2.jpg",
      images: ["/images/portrait-2.jpg", "/images/portait-3.jpg", "/images/portrait-4.jpg", "/images/portrait-5.jpg", "/images/portrait-10.jpg", "/images/portrait-11.jpg", "/images/portrait-12.jpg", "/images/portrait-13.jpg", "/images/portrait-1.jpg", "/images/portrait-9.jpg", "/images/portrait-7.jpg", "/images/portrait-8.jpg"],
      aspect: "portrait",
    },
    {
      title: "Commercial Photography",
      description: "Captured candid urban moments with strong framing and contrast.",
      cover: "/images/commercial-1.jpg",
      images: ["/images/commercial-1.jpg", "/images/commercial-2.jpg", "/images/commercial-3.jpg"],
      aspect: "portrait",
    },
    {
      title: "Event Photography",
      description: "Captured candid urban moments with strong framing and contrast.",
      cover: "/images/event-1.jpg",
      images: ["/images/event-1.jpg", "/images/event-2.jpg", "/images/event-3.jpg", "/images/event-4.jpg", "/images/event-5.jpg", "/images/event-6.jpg",  "/images/event-7.jpg",  "/images/event-8.jpg",  "/images/event-9.jpg", "/images/event-10.jpg"],
      aspect: "landscape",
    },{
      title: "Wedding Shoot",
      description: "Captured candid urban moments with strong framing and contrast.",
      cover: "/images/wedding-5.jpg",
      images: ["/images/wedding-1.jpg","/images/wedding-2.jpg", "/images/wedding-3.jpg", "/images/wedding-4.jpg", "/images/wedding-5.jpg", "/images/wedding-6.jpg", "/images/wedding-7.jpg", "/images/wedding-8.jpg" ],
      aspect: "landscape",
    },{
      title: "Silahis Coverage",
      description: "Documenting memorable moments from various events with a focus on storytelling.",
      cover: "/images/silahis-1.jpg",
      images: ["/images/silahis-1.jpg", "/images/silahis-2.jpg", "/images/silahis-3.jpg", "/images/silahis-4.jpg", "/images/silahis-5.jpg", "/images/silahis-6.jpg", "/images/silahis-7.jpg", "/images/silahis-8.jpg"],
      aspect: "landscape",
    },
  ],
},
  {
  id: "golden-hour-series",
  title: "Layout & Branding",
  category: "Layout",
  description: "Creative layout and branding works for visual communication.",
  role: "Layout Artist & Designer",
  tools: ["Photoshop", "Illustrator", "InDesign"],
  year: "2024",
  image: project3,
  fullDescription:
    "A showcase of layout compositions, brand visuals, and design presentation works.",
  gallery: [
    {
      title: "Jonathan Cujator Toyota Layout postings",
      description: "A poster layout with strong visual hierarchy and clean typography.",
      cover: "/images/jonathan-1.jpg",
      images: ["/images/jonathan-1.jpg", "/images/jonathan-2.jpg", "/images/jonathan-3.jpg", "/images/j5.jpg"],
    },
    {
      title: "Shell - Perez Shell Station Corporation Layout postings",
      description: "A branded social media visual designed for clarity and engagement.",
      cover: "/images/shell-1.jpg",
      images: ["/images/shell-1.jpg", "/images/shell-2.jpg", "/images/shell-3.jpg", "/images/shell-4.jpg"],
    },
  ],
},
/*
  {
  id: "portfolio-web-design",
  title: "Modernity — Web Design",
  category: "Web Design",
  description: "Clean, modern website design with bold typography and warm tones.",
  role: "Web Designer & Developer",
  tools: ["Figma", "React", "Tailwind CSS", "Framer Motion"],
  year: "2025",
  image: project4,
  fullDescription:
    "Designed and developed modern website interfaces with strong hierarchy, responsiveness, and interaction design.",
  gallery: [
    {
      title: "Landing Page UI",
      description: "A modern landing page with bold typography and balanced spacing.",
      cover: "/images/web-1.jpeg",
      images: ["/images/web-1.jpeg"],
    },
    {
      title: "Portfolio Interface",
      description: "A personal portfolio UI focused on readability and visual flow.",
      cover: "/images/web-2.jpg",
      images: ["/images/web-2.jpg"],
    },
  ],
},
*/
];
