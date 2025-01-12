import { testimonials } from '@/constants';

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2D89EF] rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 