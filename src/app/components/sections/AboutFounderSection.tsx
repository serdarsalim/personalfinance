export default function AboutFounderSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
          Meet the Founder
        </h2>

        <div className="bg-white rounded-xl p-8 shadow-md">
          <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            <p className="mb-6">
              I'm Serdar Salim, former Twitter Program Manager who managed critical systems for millions of users.
              But like everyone else, I struggled with budgeting. Cash payments, multiple accounts, and apps that either broke or were too complicated.
            </p>

            <p className="mb-6">
              <strong>So I built my own system.</strong> One that actually works in real life, takes less than a minute to use daily,
              and gives me the financial security to sleep better at night.
            </p>

            <div className="flex justify-center">
              <a
                href="/about"
                className="inline-flex items-center px-6 py-3 text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors font-medium"
              >
                Read my full story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}