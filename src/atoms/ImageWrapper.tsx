import Image from "next/image";

interface ImageWrapperProps {
  src: string;
  alt: string;
  sizes?: string;
  containerSize: string;
  className?: string;
}

const ImageWrapper = ({
  src,
  alt,
  containerSize,
  className = "",
  sizes = "",
}: ImageWrapperProps) => {
  return (
    <div className={`${containerSize} relative`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${className}`}
        sizes={sizes}
      />
    </div>
  );
};

export default ImageWrapper;
