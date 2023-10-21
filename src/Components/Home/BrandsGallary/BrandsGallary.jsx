const BrandsGallery = () => {
  const photos = [
    {
      id: 1,
      name: "Google",
      src: "https://i.ibb.co/wpnGY5P/google-logo.jpg",
    },
    {
      id: 2,
      name: "Apple",
      src: "https://i.ibb.co/LkR6BQT/apple-logo.png",
    },
    {
      id: 3,
      name: "Microsoft",
      src: "https://i.ibb.co/CVpZPGS/microsoft-logo.png",
    },
    {
      id: 4,
      name: "Samsung",
      src: "https://i.ibb.co/QYgDSVw/samsung-logo.png",
    },
    {
      id: 5,
      name: "Intel",
      src: "https://i.ibb.co/hZPnVzs/intel-logo.jpg",
    },
    {
      id: 6,
      name: "MI",
      src: "https://i.ibb.co/1MYb2Zt/mi-logo.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center bg-gray-100 p-4">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="w-full  p-2 transition-transform transform hover:scale-110 hover:bg-gray-400 "
        >
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <img
              src={photo.src}
              alt={photo.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="text-2xl font-bold mb-2 text-center">
                {photo.name}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandsGallery;
