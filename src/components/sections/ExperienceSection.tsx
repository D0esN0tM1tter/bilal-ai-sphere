import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Caisse de Dépôt et de Gestion (CDG)',
      location: 'Rabat, Morocco',
      period: 'July – August 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in web development at Morocco\'s premier financial institution, contributing to digital transformation initiatives.',
      achievements: [
        'Developed responsive web applications using modern frameworks',
        'Collaborated with senior developers on enterprise-level projects',
        'Implemented best practices in code quality and version control',
        'Participated in agile development methodologies'
      ],
      technologies: ['Angular', 'Spring Boot', 'TypeScript', 'Git'],
      impact: {
        projects: '3+',
        teamSize: '5',
        duration: '2 months'
      }
    }
  ];

  const leadership = [
    {
      title: 'Team Leader & Trainer',
      organization: 'Fatal Error ENSAM Rabat',
      period: '2023 - Present',
      type: 'Leadership',
      description: 'Leading a student tech community and providing educational workshops to fellow engineering students.',
      achievements: [
        'Led Python workshops for 300+ members',
        'Organized technical meetups and coding competitions',
        'Mentored junior students in programming fundamentals',
        'Built a collaborative learning environment'
      ],
      impact: {
        members: '300+',
        workshops: '10+',
        events: '5+'
      }
    }
  ];

  const ExperienceCard = ({ experience, index, type }: { experience: any, index: number, type: string }) => (
    <motion.div
      initial={{ opacity: 0, x: type === 'work' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="card-tech">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <CardTitle className="text-2xl font-bold text-gradient-secondary mb-2">
                {experience.title}
              </CardTitle>
              <div className="flex items-center gap-2 text-lg font-semibold text-primary mb-2">
                <Building className="w-5 h-5" />
                {experience.company || experience.organization}
              </div>
            </div>
            <Badge 
              variant="secondary" 
              className={
                experience.type === 'Internship' 
                  ? 'bg-primary/20 text-primary' 
                  : 'bg-secondary/20 text-secondary'
              }
            >
              {experience.type}
            </Badge>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4" />
              {experience.period}
            </div>
            {experience.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {experience.location}
              </div>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {experience.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement: string, achievementIndex: number) => (
                <motion.li
                  key={achievementIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  {achievement}
                </motion.li>
              ))}
            </ul>
          </div>

          {experience.technologies && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech: string) => (
                  <Badge 
                    key={tech} 
                    variant="outline"
                    className="text-xs hover:bg-primary/20 hover:border-primary transition-colors duration-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
            {Object.entries(experience.impact).map(([key, value]) => (
              <div key={key} className="text-center">
                <div className="text-2xl font-bold text-gradient-primary">{String(value)}</div>
                <div className="text-xs text-muted-foreground capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-primary font-poppins">
            Experience & Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional experience and community leadership in technology
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gradient-secondary"
          >
            Professional Experience
          </motion.h3>
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard 
                key={experience.company} 
                experience={experience} 
                index={index} 
                type="work" 
              />
            ))}
          </div>
        </div>

        {/* Leadership Experience */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-gradient-secondary"
          >
            Leadership & Community
          </motion.h3>
          <div className="space-y-8">
            {leadership.map((experience, index) => (
              <ExperienceCard 
                key={experience.organization} 
                experience={experience} 
                index={index} 
                type="leadership" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;