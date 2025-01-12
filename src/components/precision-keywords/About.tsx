import Image from "next/image";

export default function About() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">Who We Are</h2>
            <p className="text-lg mb-6">
              At PrecisionKeywords, we recognize how critical search engine optimization is to your online success—regardless of your business size or industry. Our mission is to harness the power of SEO to elevate visibility, engagement, and organic traffic, ensuring that your digital footprint thrives.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2">Our Mission</h3>
                <p>
                  Boost your online visibility, drive sustainable traffic, and maximize your business&apos;s digital success through strategic, ROI-focused SEO.
                </p>
              </div>
              <div>
                <h3 className="mb-2">Our Story</h3>
                <p>
                  Founded on the principle that every brand deserves a custom marketing approach, PrecisionKeywords delivers data-driven SEO solutions that help you stand out in a crowded marketplace.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/precision-keywords/colleagues-generating-ideas-floor.jpg"
              alt="Team of SEO specialists analyzing data and brainstorming strategies"
              className="w-full"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 