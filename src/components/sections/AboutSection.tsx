import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      year: '2023-2026',
      institution: 'ENSAM Rabat',
      degree: 'Engineering Degree',
      field: 'Data Science, AI & Digital Health',
      status: 'In Progress'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-primary font-poppins">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-tech">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                  Quick Overview
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Engineering student passionate about AI and web development, with hands-on 
                  experience in creating intelligent platforms. Seeking a final-year internship 
                  to contribute to innovative and impactful technology projects.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                    Innovation-Driven
                  </span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium">
                    Problem Solver
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    Tech Enthusiast
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-tech">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient-secondary">
                  Education
                </h3>
                {education.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background glow-primary"></div>
                        {index !== education.length - 1 && (
                          <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                          <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-full">
                            {item.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {item.degree}
                        </h4>
                        <p className="text-muted-foreground mb-1">{item.field}</p>
                        <p className="text-sm text-muted-foreground font-medium">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats */}
       
      </div>
    </section>
  );
};

export default AboutSection;