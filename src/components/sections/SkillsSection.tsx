import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      color: 'primary',
      skills: ['Java', 'Python', 'C++'],
      icon: '💻'
    },
    {
      title: 'Web Development',
      color: 'secondary',
      skills: ['Angular', 'Spring Boot', 'Flask', 'FastAPI', 'React'],
      icon: '🌐'
    },
    {
      title: 'AI & Data Science',
      color: 'accent',
      skills: ['Scikit-learn', 'PyTorch', 'Pandas', 'NumPy', 'Matplotlib', 'Fine-tuning LLM'],
      icon: '🧠'
    },
    {
      title: 'Databases',
      color: 'primary',
      skills: ['MySQL', 'MongoDB', 'Neo4j'],
      icon: '🗃️'
    },
    {
      title: 'Big Data & BI',
      color: 'secondary',
      skills: ['Hadoop (HDFS, Hive, Pig, HBase)', 'Power BI'],
      icon: '📊'
    },
    {
      title: 'Tools',
      color: 'accent',
      skills: ['Git', 'Docker'],
      icon: '🛠️'
    }
  ];

  const languages = [
    { name: 'Arabic', level: 'Native', flag: '🇲🇦', proficiency: 100 },
    { name: 'French', level: 'Fluent', flag: '🇫🇷', proficiency: 90 },
    { name: 'English', level: 'Fluent', flag: '🇺🇸', proficiency: 85 }
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
            A comprehensive toolkit for building intelligent solutions
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient-secondary">
            Languages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-tech">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{language.flag}</div>
                    <h4 className="text-xl font-bold mb-2">{language.name}</h4>
                    <p className="text-muted-foreground mb-4">{language.level}</p>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${language.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language.proficiency}%
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;