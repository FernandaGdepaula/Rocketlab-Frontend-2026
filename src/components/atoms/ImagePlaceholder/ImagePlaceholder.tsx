type ImagePlaceholderProps = {
  src?: string;
  alt?: string;
};

const ImagePlaceholder = ({ src, alt = "Imagem do produto" }: ImagePlaceholderProps) => {
  return (
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "140px",
          objectFit: "cover",
          borderRadius: "6px",
          backgroundColor: "#004223",
        }}
      />
    );
};

export default ImagePlaceholder;
