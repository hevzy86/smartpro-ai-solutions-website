"use client";

export default function FooterSection() {
  return (
    <footer id="footer" className="w-full bg-[#0f1020] py-8 pb-28 sm:pb-8 px-4 border-t border-[#262a40]">
      <div className="max-w-6xl mx-auto relative">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-300 whitespace-nowrap order-1 sm:order-1">© {new Date().getFullYear()} SmartProAI Solutions. All Rights Reserved.</span>
          <div className="flex gap-6 justify-center order-3 sm:order-2">
            <a href="https://www.linkedin.com/company/108030490/admin/dashboard/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="/icons/socials/4102586_applications_linkedin_social_social media_icon.png" alt="LinkedIn" width={36} height={36} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/hevzy86/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/icons/socials/6929237_instagram_icon.png" alt="Instagram" width={36} height={36} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.youtube.com/@SmartProAiSolutions" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="/icons/socials/317714_video_youtube_icon.png" alt="YouTube" width={36} height={36} className="hover:scale-110 transition-transform duration-200" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="/icons/socials/4102573_applications_facebook_media_social_icon.png" alt="Facebook" width={36} height={36} className="hover:scale-110 transition-transform duration-200" />
            </a>
          </div>
          <nav className="flex gap-6 justify-center mt-2 sm:mt-0 order-2 sm:order-3 mr-0 sm:mr-32 lg:mr-40 xl:mr-52 2xl:mr-64">
            <a href="#services" className="text-gray-300 hover:text-white hover:underline transition">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:underline transition">
              Contact
            </a>
            <a href="#" className="text-gray-300 hover:text-white hover:underline transition">
              Privacy Policy
            </a>
          </nav>
        </div>
      </div>

    </footer>
  );
}
