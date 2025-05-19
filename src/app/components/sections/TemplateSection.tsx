"use client";

import TemplateCard from "../templateCard";

export default function TemplateSection() {
  const trackTemplateInteraction = (action: string, template: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'template_interaction',
        action: action,
        template: template
      });
    }
  };

  return (
    <section id="templates" className="bg-gradient-to-r from-green-50 to-white py-20 scroll-mt-5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-900">
          Pick Your Personal Finance Solution
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <TemplateCard
            title="Free Budget Tracker"
            description="Set a monthly budget and track your income and expenses with this easy-to-use Google Sheets template."
            icon=""
            price="FREE"
            color="bg-green-300"
            isFree={true}
            features={[
              "30 custom categories",
              "Monthly budget settings",
              "Automatic charts and reports",
              "Saving and debt payment goals"
            ]}
            previewLink="https://docs.google.com/spreadsheets/d/13gCc_WQ7n5PGhAFeti8K9w2Lr-zoF-Sqa1qS5z6lSe0/edit?gid=2061588169#gid=2061588169"
            downloadLink="https://docs.google.com/spreadsheets/d/13gCc_WQ7n5PGhAFeti8K9w2Lr-zoF-Sqa1qS5z6lSe0/copy?gid=2061588169#gid=2061588169"
          />
          <TemplateCard
            title="Premium Budget Tracker"
            description="Complete financial dashboard with all templates working seamlessly together for taking control of your finances."
            icon=""
            price="$10"
            color="bg-blue-300"
            isFree={false}
            features={[
              "All templates included in one package",
              "Lifetime updates",
              "Priority email support",
              "Subscription and net worth tracking"
            ]}
            previewLink="https://docs.google.com/spreadsheets/d/1s2UpZ-fx4L17uVf1ALFpDjmKe-oqHLIPasbsVsAhG1A/edit?gid=2061588169#gid=2061588169"
            downloadLink="https://ko-fi.com/s/db49a65ceb"
          />
                  <TemplateCard
            title="Fina Money Tracker"
            description="For freelancers and solopreneurs shaping their path to financial freedom."
            icon=""
            price="FREE"
            color="bg-purple-300"
            isFree={true}
            features={[
              "Fully automated and web based",
              "Create custom metrics that matters to you",
              "Free tier available",
              "Advanced business standard budgeeting",
              "Only U.S. Based"
            ]}
            previewLink={null}
            downloadLink="https://app.fina.money/doc/z9ZWhOmbr6o4fy?ref=f-pieqez6u"
            buttonText="Go to Fina Money"
          />
        </div>
      </div>
    </section>
  );
}