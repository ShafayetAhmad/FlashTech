import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Testimonials = () => {
  const testimonialsData = [
    {
      content:
        "“Amazing products and top-notch quality! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus bibendum odio, non volutpat enim. Vivamus nec libero vel justo cursus dictum.”",
      author: "John Doe",
      role: "Happy Customer",
    },
    {
      content:
        "“Exceptional service and innovation! Sed vel mauris eu lacus hendrerit posuere. Sed id libero at purus vestibulum consectetur nec in nisl. Suspendisse potenti.”",
      author: "Jane Smith",
      role: "Satisfied Client",
    },
    {
      content:
        "“Outstanding technology and support! Pellentesque aliquet nisl a neque finibus, nec fermentum dolor efficitur. Curabitur nec augue eu turpis tincidunt fermentum.”",
      author: "David Johnson",
      role: "Impressed Customer",
    },
    {
      content:
        "“Best experience ever! Donec tincidunt auctor enim, nec aliquet tellus feugiat in. Vestibulum eu justo sed ex rhoncus volutpat vel at nisi.”",
      author: "Emily Wilson",
      role: "Loyal User",
    },
    {
      content:
        "“Incredible products and excellent support! Integer vitae commodo ligula. Phasellus bibendum sem in lectus dignissim, et facilisis quam egestas. Aenean scelerisque metus ut libero lobortis, in bibendum justo facilisis.”",
      author: "Alex Turner",
      role: "Satisfied Developer",
    },
    // Add more positive testimonials as needed
  ];

  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-4 md:px-10">
        <div className="mx-auto mb-6 flex max-w-3xl flex-col text-center"></div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="hover:scale-110 transition-transform transform"
            >
              <div className="mb-4 flex rounded-lg bg-[#ccccff] px-8 py-6">
                <p className="text-lg font-medium">{testimonial.content}</p>
              </div>
              <div className="mb-5 flex flex-row lg:mb-8">
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-4 inline-block h-10 w-10 object-cover"
                />

                <div className="flex flex-col">
                  <h6 className="text-base font-bold">{testimonial.author}</h6>
                  <p className="text-sm text-[#636262]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
