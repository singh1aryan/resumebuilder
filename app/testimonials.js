import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ashok Sharma",
    job: "$120k+ job",
    company: "Google",
    image: "https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20240913T235907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240913/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=082132cea7f214180f24b0b1f01fea385489a803ce183fcd72a7e1088661cf84",
    photo: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Emily Johnson",
    job: "$95k+ job",
    company: "Amazon",
    image: "https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20240913T235907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240913/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=082132cea7f214180f24b0b1f01fea385489a803ce183fcd72a7e1088661cf84",
    photo: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Michael Chen",
    job: "$150k+ job",
    company: "Microsoft",
    image: "https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20240913T235907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240913/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=082132cea7f214180f24b0b1f01fea385489a803ce183fcd72a7e1088661cf84",
    photo: "https://i.pravatar.cc/100?img=3"
  },
  {
    name: "Sarah Rodriguez",
    job: "$110k+ job",
    company: "Apple",
    image: "https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20240913T235907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240913/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=082132cea7f214180f24b0b1f01fea385489a803ce183fcd72a7e1088661cf84",
    photo: "https://i.pravatar.cc/100?img=4"
  },
  {
    name: "David Kim",
    job: "$130k+ job",
    company: "Facebook",
    image: "https://writelatex.s3.amazonaws.com/published_ver/16158.jpeg?X-Amz-Expires=14400&X-Amz-Date=20240913T235907Z&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240913/us-east-1/s3/aws4_request&X-Amz-SignedHeaders=host&X-Amz-Signature=082132cea7f214180f24b0b1f01fea385489a803ce183fcd72a7e1088661cf84",
    photo: "https://i.pravatar.cc/100?img=5"
  },
]

export function Testimonials() {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex space-x-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-none w-72 bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.job}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s resume`}
                className="w-full h-80 object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}