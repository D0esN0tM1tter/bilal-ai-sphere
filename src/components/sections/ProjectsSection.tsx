import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Phishing Detection System',
      description: 'Advanced AI-powered system for detecting phishing URLs using fine-tuned BERT models. Built with modern web technologies for real-time threat assessment.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'React', 'TypeScript', 'BERT'],
      highlight: 'BERT fine-tuning for URL analysis',
      category: 'AI/ML',
      status: 'Completed',
      features: [
        'Real-time URL analysis',
        'BERT-based classification',
        'RESTful API architecture',
        'Responsive web interface'
      ],
      gradient: 'from-primary to-primary-glow'
    },
    {
      title: 'Medical Assistance Chatbot',
      description: 'Intelligent medical assistance chatbot powered by Large Language Models. Provides preliminary medical guidance and information to users.',
      technologies: ['Python', 'Flask', 'React', 'LLM', 'Deepseek R1'],
      highlight: 'Deepseek R1 integration',
      category: 'AI/Healthcare',
      status: 'Completed',
      features: [
        'Natural language processing',
        'Medical knowledge base',
        'Conversational interface',
        'Multi-language support'
      ],
      gradient: 'from-secondary to-secondary-glow'
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for complex data visualization and analytics. Built for business intelligence and data-driven decision making.',
      technologies: ['React', 'D3.js', 'Power BI', 'Python', 'Pandas'],
      highlight: 'Real-time analytics',
      category: 'Data Science',
      status: 'In Progress',
      features: [
        'Interactive charts',
        'Real-time data updates',
        'Export capabilities',
        'Custom filters'
      ],
      gradient: 'from-accent to-primary'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient-primary font-poppins">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining AI, web development, and data science
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-tech h-full group overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/20 text-primary"
                    >
                      {project.category}
                    </Badge>
                    <Badge 
                      variant={project.status === 'Completed' ? 'default' : 'secondary'}
                      className={
                        project.status === 'Completed' 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-muted/20 text-muted-foreground'
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold group-hover:text-gradient-primary transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  
                  <div className={`h-1 bg-gradient-to-r ${project.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary mb-2">Key Highlight:</h4>
                    <p className="text-sm bg-secondary/10 p-2 rounded text-secondary-foreground">
                      {project.highlight}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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

                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => console.log(`Demo: ${project.title}`)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 group/btn"
                      onClick={() => console.log(`Code: ${project.title}`)}
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating or learning more about my work?
          </p>
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;