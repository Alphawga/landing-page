export default function Services() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Achieve Digital Dominance with Our Core Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Content Crafting & Optimization",
              description: "Deliver compelling, user-focused content that resonates with your audience and satisfies search intent."
            },
            {
              title: "On-Page & Technical SEO",
              description: "Enhance site speed, implement structured data, and optimize meta tags for higher rankings and better user experiences."
            },
            {
              title: "Keyword Research & Optimization",
              description: "Uncover high-traffic, low-competition keywords. Align content with user intent to ensure maximum visibility and engagement."
            }
          ].map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 