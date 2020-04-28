export default ({ border = true, children, className, title = '' }) => (
  <div className={`mt-5 ${className}`}>
    {title && (
      <h2
        className={`text-lg md:text-xl text-gray-700 mb-2 ${
          border ? 'border-b border-gray' : ''
        }`}
        id={title.toLowerCase().replace(/ /g, '-')}
      >
        {title}
      </h2>
    )}
    {children}
  </div>
);
