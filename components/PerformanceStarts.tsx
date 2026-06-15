import { BarChart3, Cpu, TrendingUp, ShieldCheck, PieChart } from 'lucide-react';

export default function PerformanceStarts() {
  const features = [
    {
      title: "Data-Driven Marketing",
      description: "Every campaign is optimized using real-time data and audience insights.",
      icon: BarChart3
    },
    {
      title: "AI-Powered Campaign Optimization",
      description: "Advanced AI tools improve targeting, bidding, and performance.",
      icon: Cpu
    },
    {
      title: "Conversion-Focused Growth Strategies",
      description: "We focus on leads, sales, and business growth.",
      icon: TrendingUp
    },
    {
      title: "End-to-End Marketing Support",
      description: "From ad creation to automation and reporting.",
      icon: ShieldCheck
    },
    {
      title: "Transparent Reporting",
      description: "Track leads, conversions, and ROI clearly.",
      icon: PieChart
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Why Partner With Our Performance Marketing Agency?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-green-200 dark:hover:border-green-900/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
