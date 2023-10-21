
// eslint-disable-next-line react/prop-types
const Separator = ({text, color}) => {
  return (
    <div className="text-center mt-8 mb-12">
      <div className="relative inline-block">
              <div className={`absolute inset-0 ${color} rounded-3xl`}></div>
        <div className="relative z-10 py-4 px-16 text-white font-semibold text-3xl">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Separator;
