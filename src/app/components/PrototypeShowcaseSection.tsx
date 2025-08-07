"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Prototype {
  id: string;
  title: string;
  description: string;
  image: string;
  secondaryImage?: string;
  images?: string[]; // For multiple images slideshow
  videoUrl?: string;
  technologies: string[];
}

const prototypes: Prototype[] = [
  {
    id: "ai-medical",
    title: "AI Medical Assistant",
    description:
      "Intelligent medical consultation system with symptom analysis and treatment recommendations",
    image: "/prototypes/ai_medical.png",
    images: [
      "/prototypes/ai_medical.png?v=2",
      "/prototypes/ai_medical2.png?v=2",
      "/prototypes/ai_medical3.png?v=2",
    ],
    videoUrl: "https://youtu.be/oKNkyYYmRyc?si=u9OSiABGgrR2QPAV",
    technologies: ["AI/ML", "Healthcare", "NLP"],
  },
  {
    id: "elevator-company",
    title: "Smart Elevator Management",
    description:
      "IoT-enabled elevator monitoring and predictive maintenance system",
    image: "/prototypes/elevatorCompany.png",
    secondaryImage: "/prototypes/elevatorCompany2.png",
    videoUrl: "https://youtu.be/rUmPOAWevVM",
    technologies: ["IoT", "Predictive Analytics", "Dashboard"],
  },
  {
    id: "lead-generation",
    title: "AI Lead Generation",
    description:
      "Automated lead qualification and nurturing system with intelligent scoring",
    image: "/prototypes/leadGeneration3.png",
    images: [
      "/prototypes/leadGeneration2.png",
      "/prototypes/leadGeneration3.png",
    ],
    videoUrl: "https://youtu.be/ZJ67gbyy81w",
    technologies: ["CRM", "AI Scoring", "Automation"],
  },
  {
    id: "n8n-schema",
    title: "Workflow Automation",
    description:
      "Complex business process automation with n8n integration and custom nodes",
    image: "/prototypes/n8n_Schema.png",
    videoUrl: "https://youtu.be/q6DEN7rM34k",
    technologies: ["n8n", "API Integration", "Workflow"],
  },
  {
    id: "smart-bite",
    title: "SmartBite AI",
    description:
      "Comprehensive nutrition app with AI recommendations, meal planning, and dietary goal optimization",
    image: "/prototypes/SmartBiteAI4.png",
    images: [
      "/prototypes/SmartBiteAI4.png",
      "/prototypes/smartBiteAi2.png",
      "/prototypes/smartBite.png",
    ],
    videoUrl: "https://youtube.com/shorts/oCKaEcxL1zM?feature=share",
    technologies: [
      "React Native",
      "AI Recommendations",
      "ML",
      "Nutrition API",
      "Health",
    ],
  },
  {
    id: "ai-persona-baby-podcast",
    title: "AI Persona Baby Podcast",
    description:
      "Revolutionary AI-powered podcast platform that transforms any person into a personalized voice host and distributes content across all social media platforms from one dashboard",
    image: "/prototypes/babypodcast2.png",
    images: [
      "/prototypes/babypodcast2.png",
      "/prototypes/BabyPodcast1.png",
      "/prototypes/BabyPodcast3.png?v=2",
    ],
    videoUrl: "https://youtube.com/shorts/fQCbp0YHfaI",
    technologies: [
      "AI Voice Cloning",
      "Podcast Generation",
      "Social Media API",
      "Cross-Platform Publishing",
      "NLP",
      "Audio Processing",
    ],
  },
];

export default function PrototypeShowcaseSection() {
  const [touchedPrototype, setTouchedPrototype] = useState<string | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);
  const [hasMouse, setHasMouse] = useState<boolean>(false);
  const lastPointerType = useRef<"mouse" | "touch" | null>(null);

  // Hybrid detection: listen for pointer events and window changes
  useEffect(() => {
    function detectPointerType(e: PointerEvent) {
      if (e.pointerType === "mouse") {
        setHasMouse(true);
        setIsTouchDevice(false);
        lastPointerType.current = "mouse";
      } else if (e.pointerType === "touch") {
        setHasMouse(false);
        setIsTouchDevice(true);
        lastPointerType.current = "touch";
      }
    }
    function detectMouseMove() {
      setHasMouse(true);
      setIsTouchDevice(false);
      lastPointerType.current = "mouse";
      window.removeEventListener("mousemove", detectMouseMove);
    }
    function detectTouchStart() {
      setHasMouse(false);
      setIsTouchDevice(true);
      lastPointerType.current = "touch";
      window.removeEventListener("touchstart", detectTouchStart);
    }
    // Initial pointer type
    if (typeof window !== "undefined") {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isCoarse);
      setHasMouse(!isCoarse);
    }
    window.addEventListener("pointerdown", detectPointerType);
    window.addEventListener("mousemove", detectMouseMove, { once: true });
    window.addEventListener("touchstart", detectTouchStart, { once: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    function handleResize() {
      const isCoarse = window.matchMedia("(pointer: coarse)").matches;
      if (isCoarse !== isTouchDevice) {
        // Force full reload to reset all states and browser pointer logic
        // Try to unregister all service workers
        if ("serviceWorker" in navigator) {
          navigator.serviceWorker
            .getRegistrations()
            .then(function (registrations) {
              for (const registration of registrations) {
                registration.unregister();
              }
            });
        }
        // Clear Cache API
        if ("caches" in window) {
          caches.keys().then(function (names) {
            for (const name of names) caches.delete(name);
          });
        }
        // Ensure scroll to top
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        // Add cache-busting param and reload
        window.location.replace(
          window.location.pathname + "?reload=" + Date.now()
        );
        // Optionally, if reload does not help, show alert after reload
        setTimeout(() => {
          const existing = document.getElementById("hard-reload-banner");
          if (existing) return;
          const banner = document.createElement("div");
          banner.id = "hard-reload-banner";
          banner.style.position = "fixed";
          banner.style.top = "0";
          banner.style.left = "0";
          banner.style.width = "100vw";
          banner.style.background =
            "linear-gradient(90deg,#1e293b 60%,#6366f1 100%)";
          banner.style.color = "#fff";
          banner.style.zIndex = "9999";
          banner.style.padding = "18px 12px 18px 24px";
          banner.style.fontSize = "1.1rem";
          banner.style.fontWeight = "600";
          banner.style.display = "flex";
          banner.style.justifyContent = "space-between";
          banner.style.alignItems = "center";
          banner.innerHTML = `
            <span>Если после автоматической перезагрузки сайт всё ещё работает некорректно, <b>пожалуйста, вручную нажмите Shift+Reload (или Ctrl+F5)</b> для полного сброса кэша.</span>
            <button id="close-hard-reload-banner" style="margin-left:32px;padding:6px 16px;background:#334155;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:1rem;font-weight:600;">Закрыть</button>
          `;
          document.body.appendChild(banner);
          document
            .getElementById("close-hard-reload-banner")
            ?.addEventListener("click", () => {
              banner.remove();
            });
        }, 2000);
      }
    }
    return () => {
      window.removeEventListener("pointerdown", detectPointerType);
      window.removeEventListener("mousemove", detectMouseMove);
      window.removeEventListener("touchstart", detectTouchStart);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [isTouchDevice]);

  // Always reset states on device mode change
  useEffect(() => {
    setTouchedPrototype(null);
    setHoveredPrototype(null);
    // On switching to desktop, reset all image indexes to 0 to prevent stuck animation
    if (!isTouchDevice) {
      setCurrentImageIndex({});
    }
  }, [isTouchDevice, hasMouse]);

  useEffect(() => {
    if (!isTouchDevice) return;
    const handleTouch = (e: TouchEvent) => {
      // If tap was not on a card, clear touchedPrototype
      if (!(e.target as HTMLElement).closest(".prototype-card")) {
        setTouchedPrototype(null);
      }
    };
    document.addEventListener("touchstart", handleTouch);
    return () => document.removeEventListener("touchstart", handleTouch);
  }, [isTouchDevice]);

  const [selectedPrototype, setSelectedPrototype] = useState<Prototype | null>(
    null
  );
  const [hoveredPrototype, setHoveredPrototype] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: string]: number;
  }>({});
  const intervalRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});

  const openVideo = (prototype: Prototype) => {
    if (prototype.videoUrl) {
      window.open(prototype.videoUrl, "_blank");
    }
  };

  const closeModal = () => {
    setSelectedPrototype(null);
  };

  const startSlideshow = (prototypeId: string, images: string[]) => {
    if (intervalRefs.current[prototypeId]) {
      clearInterval(intervalRefs.current[prototypeId]);
    }

    setCurrentImageIndex((prev) => ({ ...prev, [prototypeId]: 0 }));

    intervalRefs.current[prototypeId] = setInterval(() => {
      setCurrentImageIndex((prev) => ({
        ...prev,
        [prototypeId]: ((prev[prototypeId] || 0) + 1) % images.length,
      }));
    }, 1000); // Change image every 1 second
  };

  const stopSlideshow = (prototypeId: string) => {
    if (intervalRefs.current[prototypeId]) {
      clearInterval(intervalRefs.current[prototypeId]);
      delete intervalRefs.current[prototypeId];
    }
    setCurrentImageIndex((prev) => ({ ...prev, [prototypeId]: 0 }));
  };

  const handleMouseEnter = (prototype: Prototype) => {
    setHoveredPrototype(prototype.id);
    if (prototype.images && prototype.images.length > 1) {
      startSlideshow(prototype.id, prototype.images);
    }
  };

  const handleMouseLeave = (prototype: Prototype) => {
    setHoveredPrototype(null);
    if (prototype.images && prototype.images.length > 1) {
      stopSlideshow(prototype.id);
    }
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(intervalRefs.current).forEach((interval) => {
        if (interval) clearInterval(interval);
      });
    };
  }, []);

  return (
    <section
      id="prototypes-showcase"
      className="py-20 px-4 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1020] via-[#18123a] to-[#1a0a2f]"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SmartPro AI in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge prototypes and see how we transform ideas
            into intelligent solutions
          </p>
        </div>

        {/* Prototypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {prototypes.map((prototype) => (
            <div
              key={prototype.id}
              className={`prototype-card group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300
                hover:border-blue-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
                ${
                  touchedPrototype === prototype.id
                    ? "border-blue-500/50 scale-105 shadow-2xl shadow-blue-500/20"
                    : ""
                }`}
              onMouseEnter={() => handleMouseEnter(prototype)}
              onMouseLeave={() => handleMouseLeave(prototype)}
              onTouchStart={(e) => {
                if (isTouchDevice) {
                  e.stopPropagation();
                  setTouchedPrototype(prototype.id);
                }
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                {prototype.images && prototype.images.length > 1 ? (
                  // Multiple images slideshow (AI Medical Assistant)
                  <div className="relative h-full">
                    {prototype.images.map((img, index) => (
                      <Image
                        key={index}
                        src={img}
                        alt={`${prototype.title} - ${index + 1}`}
                        fill
                        className={`object-cover transition-all duration-500 group-hover:scale-110 absolute inset-0 ${
                          index === (currentImageIndex[prototype.id] || 0) &&
                          (touchedPrototype === prototype.id ||
                            hoveredPrototype === prototype.id)
                            ? "opacity-100 scale-110"
                            : ""
                        } ${
                          index === (currentImageIndex[prototype.id] || 0)
                            ? "opacity-100"
                            : "opacity-0"
                        } ${
                          touchedPrototype === prototype.id ||
                          hoveredPrototype === prototype.id
                            ? "scale-110"
                            : ""
                        }`}
                      />
                    ))}
                  </div>
                ) : prototype.secondaryImage ? (
                  // Hover-switching image layout for SmartBite AI
                  <div className="relative h-full">
                    <Image
                      src={prototype.image}
                      alt={`${prototype.title} - Main`}
                      fill
                      className={`object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-110 ${
                        touchedPrototype === prototype.id
                          ? "opacity-0 scale-110"
                          : ""
                      }`}
                    />
                    <Image
                      src={prototype.secondaryImage}
                      alt={`${prototype.title} - Enhanced`}
                      fill
                      className={`object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110 absolute inset-0 ${
                        touchedPrototype === prototype.id
                          ? "opacity-100 scale-110"
                          : ""
                      }`}
                    />
                  </div>
                ) : (
                  // Single image layout
                  <Image
                    src={prototype.image}
                    alt={prototype.title}
                    fill
                    className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
                      touchedPrototype === prototype.id ? "scale-110" : ""
                    }`}
                  />
                )}

                {/* Play Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openVideo(prototype)}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg hover:shadow-blue-500/50"
                  >
                    <svg
                      className="w-8 h-8 ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {prototype.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {prototype.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {prototype.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openVideo(prototype)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    Watch Demo
                  </button>
                  <button
                    onClick={() => setSelectedPrototype(prototype)}
                    className="px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-white rounded-lg transition-all duration-300 text-sm"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      {selectedPrototype && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {selectedPrototype.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                {selectedPrototype.secondaryImage ? (
                  // Dual image layout for SmartBite AI in modal
                  <div className="flex h-full">
                    <div className="relative flex-1">
                      <Image
                        src={selectedPrototype.image}
                        alt={`${selectedPrototype.title} - Main`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative flex-1">
                      <Image
                        src={selectedPrototype.secondaryImage}
                        alt={`${selectedPrototype.title} - Enhanced`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  // Single image layout in modal
                  <Image
                    src={selectedPrototype.image}
                    alt={selectedPrototype.title}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              <p className="text-gray-300 mb-4">
                {selectedPrototype.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {selectedPrototype.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => openVideo(selectedPrototype)}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-lg transition-all duration-300 font-medium"
              >
                Watch Full Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
