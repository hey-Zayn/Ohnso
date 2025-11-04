import { Zap, ShieldCheck, Users, TrendingUp, Paintbrush, Cog } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Data-Driven Product Research',
    description: 'We identify high-demand, low-competition products poised for market success, giving you a critical competitive edge.',
  },
  {
    icon: ShieldCheck,
    title: 'Strategic Global Sourcing',
    description: 'Our experts navigate the complexities of global sourcing to find reliable suppliers and secure top-quality products at competitive prices.',
  },
  {
    icon: Users,
    title: 'Expert PPC Management',
    description: 'Maximize your ROI with our targeted PPC campaigns. We optimize every ad to convert clicks into loyal customers.',
  },
  {
    icon: TrendingUp,
    title: 'Actionable Analytics',
    description: 'Gain valuable insights from your data with our powerful and intuitive analytics dashboard.',
  },
  {
    icon: Paintbrush,
    title: 'Fully Customizable',
    description: 'Tailor Launchpad to fit your exact needs with extensive customization options.',
  },
  {
    icon: Cog,
    title: 'Easy Integration',
    description: 'Connect Launchpad with your favorite apps and services in just a few clicks.',
  },
];

export default function ValueProposition() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Ohnso LLC?</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg">
            We empower your e-commerce venture with end-to-end solutions, from product discovery to market domination.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group transform transition-transform duration-300 hover:-translate-y-2">
              <Card className="text-center h-full group-hover:border-accent group-hover:shadow-xl transition-all duration-300">
                <CardHeader className="items-center p-8">
                  <div className="bg-accent/10 p-4 rounded-full mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                  <CardDescription className="pt-2">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
