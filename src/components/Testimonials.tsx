import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'John Doe', company: 'Tech Co', quote: "Working with this agency has been a game-changer for our business. Their expertise and dedication are unmatched." },
    { name: 'Jane Smith', company: 'Design Inc', quote: "The team's creativity and attention to detail brought our vision to life. We couldn't be happier with the results." },
    { name: 'Mike Johnson', company: 'StartUp Ltd', quote: "From concept to execution, they guided us through every step. Their insights were invaluable to our success." },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="text-sm text-gray-400">{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;