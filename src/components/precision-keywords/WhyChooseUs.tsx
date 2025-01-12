export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Your All-in-One SEO Solution</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "New Customers",
              description: "Gain a competitive edge by optimizing your website to attract more leads and boost conversions."
            },
            {
              title: "Performance Tracking",
              description: "Monitor your traffic growth, keyword rankings, and conversions. Leverage real-time insights to refine your strategy."
            },
            {
              title: "Transparency & Reporting",
              description: "Stay informed with frequent performance updates and analytics, empowering you to make data-driven decisions."
            },
            {
              title: "Location-Specific Customization",
              description: "Tailor content to audiences based on geographical location, ensuring relevance and engagement."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 