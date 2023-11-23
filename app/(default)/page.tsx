export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
};

import Hero from '@/app/components/hero';
import FeaturesBlocks from '@/app/components/features-blocks';
import Testimonials from '@/app/components/testimonials';
import Team from '../components/Team';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Testimonials />
      <Team />
    </>
  );
}
