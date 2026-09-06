-- Sync package prices and copy from catalog (non-destructive updates by slug)

UPDATE packages SET
  price = 339,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Logo design (2 initial concepts, 1 revision).","Basic brand style guide (logo usage, primary colors).","Business card design (print-ready file).","Digital files : Provided in PNG, JPEG, and PDF formats."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'branding-starter';

UPDATE packages SET
  price = 759,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Logo design (3 initial concepts, 2 revisions).","Comprehensive brand style guide (logo, colors, fonts).","Business card and letterhead design (print-ready files).","Social media profile image design.","Basic stationery design (envelopes).","Brand Guidelines : Basic guide (logo, colors, and fonts only).","Digital Files : Provided in PNG, JPEG, SVG, and PDF formats."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'branding-growth';

UPDATE packages SET
  price = 1459,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'For those seeking the best, most complete package.',
  points = '{"Premium logo design (unlimited concepts and revisions).","Full brand identity package (style guide, logo variations, color palette, typography, iconography).","Complete stationery set (business cards, letterheads, envelopes).","Social media kit (profile and banner images for 3 platforms).","Branded marketing materials (brochures, flyers).","Presentation Templates: Branded PowerPoint/Google Slides templates.","Email Signature: Custom HTML or image-based signature with social media links.","Brand Guidelines: Comprehensive guide covering all brand aspects, including voice and messaging.","Brand launch consultation and strategy session.","Digital Files: Provided in AI, EPS, PNG, JPEG, and PDF formats."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'branding-ultimate';

UPDATE packages SET
  price = 1639,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Up to 5-page website.","Security: Basic SSL certificate for secure browsing.","Built entirely from scratch — custom design tailored to your brand.","1-year hosting included.","Mobile-friendly layout.","Basic SEO setup (meta tags, alt text).","Contact form integration.","One round of revisions.","Email: 2 professional email addresses (e.g., name@yourdomain.com)."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'web-design-and-development-starter';

UPDATE packages SET
  price = 2309,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Up to 8-page website.","Domain Name and Hosting.","Security: Basic SSL certificate for secure browsing.","Custom design built from scratch (unique layout, tailored to brand).","CMS integration (WordPress or similar).","Advanced SEO setup (keywords, speed optimization).","1-year hosting included.","Blog setup and basic training.","Social media integration.","Two rounds of revisions.","Email: up to 5 professional email addresses (e.g., name@yourdomain.com).","Support and Training: 1-hour training session on how to update the website content."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'web-design-and-development-growth';

UPDATE packages SET
  price = 5159,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'For those seeking the best, most complete package.',
  points = '{"Up to 18-page fully custom website.","No CMS, coded from scratch for unique needs.","Advanced features (animations, custom forms, e-commerce setup).","1-year hosting included.","Email: Professional email setup (up to 10 accounts).","Full SEO optimization.","Three rounds of revisions.","Ongoing support for 3 months post-launch.","Support and Training: 1-hour training session on how to update the website content."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'web-design-and-development-ultimate';

UPDATE packages SET
  price = 4859,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Basic app for one platform (iOS or Android).","Core features (e.g., user login, simple UI, basic functionalities).","Standard design template.","Basic analytics integration.","One round of revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'mobile-app-development-starter';

UPDATE packages SET
  price = 9359,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Multi-platform app (iOS and Android).","Standard features (push notifications, user profiles, database integration).","Custom UI/UX design.","API integration (e.g., social login, payment gateway).","Intermediate analytics and reporting.","Two rounds of revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'mobile-app-development-growth';

UPDATE packages SET
  price = 17359,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'For those seeking the best, most complete package.',
  points = '{"Advanced app with full custom features (geolocation, advanced user interaction).","Multi-platform (iOS, Android) and web app if needed.","Advanced UI/UX design with animations.","Full backend development and integration.","1-year support and maintenance.","Advanced analytics, performance tracking, and optimization.","Three rounds of revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'mobile-app-development-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 129,
  "priceByYear" = 13329,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Management of 1-2 social media profiles.","10 posts per month with basic graphics.","Monthly performance report."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'social-media-marketing-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 1329,
  "priceByYear" = 27729,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Management of 3-4 social media profiles.","20 posts per month with custom graphics and captions.","Paid ad management (up to $500 ad spend).","Bi-weekly performance report."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'social-media-marketing-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 3429,
  "priceByYear" = 52929,
  description = 'For those seeking the best, most complete package.',
  points = '{"Full management of up to 6 profiles.","30+ posts per month with advanced graphics, videos, and engagement.","Comprehensive ad management (up to $1,000 ad spend).","Weekly performance analysis and strategy calls."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'social-media-marketing-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 0,
  "priceByYear" = 8529,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Basic on-page SEO (keywords, meta tags for up to 5 pages).","Technical audit and basic fixes.","Monthly keyword tracking and report."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'search-engine-optimization-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 429,
  "priceByYear" = 16929,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Comprehensive on-page and off-page SEO (10 pages).","Link building and local SEO optimization.","Monthly performance reports and strategy updates."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'search-engine-optimization-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 1929,
  "priceByYear" = 34929,
  description = 'For those seeking the best, most complete package.',
  points = '{"Advanced SEO strategy (unlimited pages).","Technical SEO overhaul and content strategy.","Ongoing link-building campaigns and competitor analysis.","Weekly detailed performance reports."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'search-engine-optimization-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 0,
  "priceByYear" = 10929,
  description = 'Ideal for getting started with basic needs.',
  points = '{"Setup and management of 1 Google Ads campaign.","Monthly ad spend management up to $500.","Basic ad copy and design."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'pay-per-click-advertising-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 929,
  "priceByYear" = 22929,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"Setup and management of multiple campaigns (Google, Bing).","Monthly ad spend management up to $1,500.","Advanced ad copy, split testing, and landing page optimization."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'pay-per-click-advertising-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 2929,
  "priceByYear" = 46929,
  description = 'For those seeking the best, most complete package.',
  points = '{"Comprehensive PPC strategy across multiple platforms (Google, Bing, Social Media).","Monthly ad spend management up to $5,000.","Custom landing pages, advanced analytics, and conversion tracking."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'pay-per-click-advertising-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 0,
  "priceByYear" = 7929,
  description = 'Ideal for getting started with basic needs.',
  points = '{"2 blog posts or articles per month (up to 500 words each).","Basic SEO optimization for content.","Monthly content performance report."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'content-marketing-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 429,
  "priceByYear" = 16929,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"4 blog posts or articles per month (up to 1,000 words each).","SEO-optimized content and infographics.","Social media content distribution.","Bi-weekly performance analysis."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'content-marketing-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 1929,
  "priceByYear" = 34929,
  description = 'For those seeking the best, most complete package.',
  points = '{"High-volume content strategy and production.","SEO content calendar and advanced optimization.","Multi-channel distribution support.","Detailed analytics and strategy reporting."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'content-marketing-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 0,
  "priceByYear" = 4929,
  description = 'Ideal for getting started with basic needs.',
  points = '{"1 email campaign per month.","Basic template design and content creation.","Performance tracking (open rates, click rates)."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'email-marketing-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 0,
  "priceByYear" = 10929,
  description = 'Designed for businesses looking to expand and enhance their web presence.',
  points = '{"3 email campaigns per month.","Custom template design, list segmentation, and automation setup.","Monthly performance report with recommendations."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'email-marketing-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 929,
  "priceByYear" = 22929,
  description = 'For those seeking the best, most complete package.',
  points = '{"5+ email campaigns per month with advanced automation and personalization.","A/B testing of subject lines, content, and send times.","Detailed analytics and strategy sessions."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'email-marketing-ultimate';

UPDATE packages SET
  price = 459,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Ideal for getting started with basic needs.',
  points = '{"2D animation (up to 30 seconds).","Basic animation style (simple characters or icons).","Scriptwriting and voiceover included.","One round of revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'animation-2d-and-3d-starter';

UPDATE packages SET
  price = 1859,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'For those seeking the best, most complete package.',
  points = '{"3D animation (up to 1 minute).","Advanced animation (detailed characters, complex movements).","Scriptwriting, professional voiceover, and sound effects.","Two rounds of revisions.","Storyboarding and concept art included."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'animation-2d-and-3d-ultimate';

UPDATE packages SET
  price = 680,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Ideal for a single-screen setup with essential branded content.',
  points = '{"1 display screen configured (up to 55\").","3 custom slide designs (menus, promos, or announcements).","Basic playlist setup and scheduling.","On-site or remote display configuration.","One round of content revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'digital-signage-starter';

UPDATE packages SET
  price = 1450,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'For businesses needing multiple screens and ongoing content support.',
  points = '{"Up to 3 display screens configured.","10 custom slide or video designs.","Scheduled playlists for daypart messaging.","3 months of content updates (2 updates per month).","Remote management setup and training.","Two rounds of revisions."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'digital-signage-growth';

UPDATE packages SET
  price = 2800,
  "priceByMonth" = NULL,
  "priceByYear" = NULL,
  description = 'Full signage network with premium content and long-term management.',
  points = '{"Up to 6 display screens across locations.","Unlimited initial slide designs (first month).","Motion graphics and animated promos.","6 months of content management and updates.","Priority remote support and display monitoring.","Quarterly content strategy review."}'::text[],
  "pricingType" = 'ONE_TIME',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'digital-signage-ultimate';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 49,
  "priceByYear" = 490,
  description = 'Launch your marketing hub for less than a single tool subscription.',
  points = '{"CRM with up to 500 contacts and lead tagging.","Contact forms and lead capture widgets for your website.","Email campaigns and basic automation sequences.","Sales pipeline with deal stages and follow-up reminders.","Online appointment booking and calendar sync.","Unified inbox for email and form submissions.","1 team member included."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 1,
  "updatedAt" = NOW()
WHERE slug = 'all-in-marketing-platform-starter';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 97,
  "priceByYear" = 970,
  description = 'Scale lead generation with SMS, funnels, and workflow automation.',
  points = '{"Everything in Starter, plus up to 2,500 contacts.","SMS marketing and two-way text conversations.","Funnel and landing page builder with templates.","Workflow automations (triggers, tags, and follow-ups).","Review and reputation request campaigns.","Social media content planner and post scheduling.","Up to 3 team members included."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 2,
  "updatedAt" = NOW()
WHERE slug = 'all-in-marketing-platform-growth';

UPDATE packages SET
  price = NULL,
  "priceByMonth" = 197,
  "priceByYear" = 1970,
  description = 'Full marketing operating system with advanced automation and priority support.',
  points = '{"Everything in Growth, plus unlimited contacts.","Advanced multi-step automations and conditional workflows.","Custom domains for funnels, forms, and booking pages.","Invoicing, payment links, and proposal templates.","Call tracking and conversation analytics.","White-label client portal option.","Priority onboarding and up to 10 team members."}'::text[],
  "pricingType" = 'MONTHLY_YEARLY',
  position = 3,
  "updatedAt" = NOW()
WHERE slug = 'all-in-marketing-platform-ultimate';
