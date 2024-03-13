interface HeaderWrapperProps {
  title: string;
  className?: string;
}

const HeaderWrapper = ({ title, className = "" }: HeaderWrapperProps) => (
  <h2 className={`text-xl lg:text-3xl font-bold font-montserrat ${className}`}>
    {title}
  </h2>
);

export default HeaderWrapper;
