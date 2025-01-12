import { faqs } from '@/constants';

export default function FAQ() {
  return (
    <section className="section-padding bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Your Top Questions, Answered</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 