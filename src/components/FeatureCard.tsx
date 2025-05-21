import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: any;
  title: string;
  active: boolean;
  progress: number; // 0 to 1
  onClick: () => void;
}

export default function FeatureCard({ icon, title, active, progress, onClick }: FeatureCardProps) {
  const size = 38; // or 56 for larger
  const borderWidth = 4;
  const progressDegree = progress * 360;

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2 ${active ? 'border-indigo-600 bg-indigo-50 shadow-lg' : 'border-gray-200 bg-white'} w-full`}
      onClick={onClick}
    >
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        {/* Progress Border */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(#6366F1 ${progressDegree}deg, #E5E7EB ${progressDegree}deg 360deg)`,
          }}
          animate={{
            background: `conic-gradient(#6366F1 ${progressDegree}deg, #E5E7EB ${progressDegree}deg 360deg)`,
          }}
          transition={{ duration: 0.3 }}
        />
        {/* White center to mask the border */}
        <div
          className="absolute inset-0 m-auto bg-white rounded-full flex items-center justify-center"
          style={{
            width: size - borderWidth * 2,
            height: size - borderWidth * 2,
          }}
        >
          <span className="text-indigo-600 text-xl z-10 flex items-center justify-center w-[70%] h-[70%]">
            {icon}
          </span>
        </div>
      </div>
      <span className={`font-semibold text-base ${active ? 'text-indigo-800' : 'text-gray-700'}`}>{title}</span>
    </div>
  );
} 