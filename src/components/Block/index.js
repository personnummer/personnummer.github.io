export default ({ children, className, title = '' }) => (
  <div className={`mt-5 ${className}`}>
    {title && <h2 className='text-xl text-gray-700 border-b border-gray mb-2'>{title}</h2>}
    {children}
  </div>
);
