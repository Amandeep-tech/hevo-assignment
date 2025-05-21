import { motion } from 'framer-motion';

interface FeatureImageProps {
  image: string;
  alt: string;
}

export default function FeatureImage({ image, alt }: FeatureImageProps) {
  return (
    <motion.img
      key={image}
      src={image}
      alt={alt}
      className="w-full h-auto rounded-xl shadow-md object-contain"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    />
  );
} 