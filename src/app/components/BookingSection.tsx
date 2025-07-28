"use client";
import { useEffect } from 'react';

export default function BookingSection() {
  useEffect(() => {
    // Remove any existing Cal scripts
    const existingScript = document.getElementById('cal-embed-script');
    if (existingScript) existingScript.remove();
    
    // Add Cal.com embed script
    const script = document.createElement('script');
    script.id = 'cal-embed-script';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30-min-ai-meeting", {origin:"https://app.cal.com"});
      
      Cal.ns["30-min-ai-meeting"]("inline", {
        elementOrSelector:"#my-cal-inline",
        config: {
          layout:"month_view",
          theme: "dark"
        },
        calLink: "vladimir-rumyantsev-absjms/30-min-ai-meeting"
      });
      
      Cal.ns["30-min-ai-meeting"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: {
          body: {
            background: "transparent"
          }
        }
      });
    `;
    document.head.appendChild(script);
    
    return () => {
      if (script) script.remove();
      const calDiv = document.getElementById('my-cal-inline');
      if (calDiv) calDiv.innerHTML = '';
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        #my-cal-inline {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        #my-cal-inline * {
          margin: 0 !important;
          padding: 0 !important;
        }
        
        #my-cal-inline .main {
          padding: 0 !important;
        }
        
        #my-cal-inline [data-testid="booker-container"] {
          margin: 0 !important;
          padding: 0 !important;
        }
      `}</style>
      
      <section id="book-call" className="w-full">
        <div 
          id="my-cal-inline" 
          style={{
            width: '100%',
            height: '750px',
            margin: 0,
            padding: 0
          }}
        ></div>
      </section>
    </>
  );
}
