import { useEffect } from 'react';

export default function CalComScriptLoader() {
  useEffect(() => {
    if (document.getElementById('calcom-embed-script')) return;

    const script = document.createElement('script');
    script.id = 'calcom-embed-script';
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Wait for Cal to be available
      const initCal = () => {
        if (typeof window !== 'undefined' && window.Cal) {
          window.Cal('init', '30-min-ai-meeting', { origin: 'https://app.cal.com' });
          window.Cal.ns['30-min-ai-meeting']('inline', {
            elementOrSelector: '#my-cal-inline-30-min-ai-meeting',
            config: { layout: 'month_view' },
            calLink: 'vladimir-rumyantsev-absjms/30-min-ai-meeting',
          });
          window.Cal.ns['30-min-ai-meeting']('ui', {
            hideEventTypeDetails: false,
            layout: 'month_view',
          });
        } else {
          // Retry after a short delay if Cal is not ready
          setTimeout(initCal, 100);
        }
      };
      initCal();
    };

    return () => {
      script.remove();
      const widget = document.getElementById('my-cal-inline-30-min-ai-meeting');
      if (widget) widget.innerHTML = '';
    };
  }, []);

  return null;
}
