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
      // @ts-ignore
      Cal('init', '30-min-ai-meeting', { origin: 'https://app.cal.com' });
      // @ts-ignore
      Cal.ns['30-min-ai-meeting']('inline', {
        elementOrSelector: '#my-cal-inline-30-min-ai-meeting',
        config: { layout: 'month_view' },
        calLink: 'vladimir-rumyantsev-absjms/30-min-ai-meeting',
      });
      // @ts-ignore
      Cal.ns['30-min-ai-meeting']('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };

    return () => {
      script.remove();
      const widget = document.getElementById('my-cal-inline-30-min-ai-meeting');
      if (widget) widget.innerHTML = '';
    };
  }, []);

  return null;
}
