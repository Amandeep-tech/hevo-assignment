import { Poppins } from "next/font/google";
import SecurityFeatures from '../components/SecurityFeatures';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${poppins.className}`}
    >
      <SecurityFeatures />
    </main>
  );
}
