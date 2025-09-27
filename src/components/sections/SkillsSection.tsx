import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Code2,
  Globe2,
  Brain,
  Database,
  BarChart3,
  Wrench
} from 'lucide-react';



const SkillsSection = () => {
  const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'primary',
    skills: ['Python', 'Java', 'TypeScript', 'C', 'C++'],
    icon: <Code2 className="text-primary w-6 h-6" />
  },
  {
    title: 'Web Development',
    color: 'primary',
    skills: ['Angular', 'React', 'Spring Boot', 'FastAPI', 'Flask', 'REST APIs', 'JWT/OAuth2'],
    icon: <Globe2 className="text-secondary w-6 h-6" />
  },
  {
    title: 'AI & Data Science',
    color: 'primary',
    skills: ['PyTorch', 'Scikit-learn', 'LLM fine-tuning (LoRA, PEFT)', 'Pandas', 'NumPy', 'Matplotlib'],
    icon: <Brain className="text-accent w-6 h-6" />
  },
  {
    title: 'Databases',
    color: 'primary',
    skills: ['SQL Databases (PostgreSQL) ', 'NoSQL Databases (MongoDb)', 'Graphe Databases (Neo4j)'],
    icon: <Database className="text-primary w-6 h-6" />
  },
  {
    title: 'Data Engineering & BI',
    color: 'primary',
    skills: ['Hadoop Ecosystem', 'Spark', 'Power BI'],
    icon: <BarChart3 className="text-secondary w-6 h-6" />
  },
  {
    title: 'DevOps & Tooling',
    color: 'primary',
    skills: ['Git', 'Docker', 'CI/CD (GitHub Actions)', 'Linux', 'VS Code'],
    icon: <Wrench className="text-accent w-6 h-6" />
  }
];




  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-primary font-poppins">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and maintaining intelligent solutions
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-tech h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">{category.icon}</span>
                    <h3 className="text-xl font-bold text-gradient-secondary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <Badge 
                          variant="secondary" 
                          className={`
                            px-3 py-1 text-sm font-medium transition-all duration-300 hover:scale-105
                            ${category.color === 'primary' ? 'bg-primary/20 text-primary hover:bg-primary/30' : ''}
                            ${category.color === 'secondary' ? 'bg-secondary/20 text-secondary hover:bg-secondary/30' : ''}
                            ${category.color === 'accent' ? 'bg-accent/20 text-accent hover:bg-accent/30' : ''}
                          `}
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
       
      </div>
    </section>
  );
};

export default SkillsSection;