import React, { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';
import profilePhoto from '@/assets/profile-photo.jpg';
import ParticleBackground from './ParticleBackground';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'R', category: 'Programming' },
    { name: 'SQL', category: 'Database' },
    { name: 'Excel', category: 'Analysis' },
    { name: 'SPSS', category: 'Analysis' },
    { name: 'Power BI', category: 'Visualization' },
    { name: 'TensorFlow', category: 'ML/AI' },
    { name: 'Scikit-learn', category: 'ML/AI' },
    { name: 'Pandas', category: 'Data Processing' },
    { name: 'NumPy', category: 'Data Processing' },
    { name: 'NLP', category: 'ML/AI' },
    { name: 'Predictive Modeling', category: 'ML/AI' },
    { name: 'Tableau', category: 'Visualization' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' }
  ];

  const certifications = [
    { name: 'R Programming', provider: 'Johns Hopkins University', year: '2023', icon: '📊' },
    { name: 'Excel Data Analysis', provider: 'Microsoft', year: '2023', icon: '📈' },
    { name: 'Python for Data Science', provider: 'IBM', year: '2023', icon: '🐍' },
    { name: 'Machine Learning Specialization', provider: 'Stanford Online', year: '2024', icon: '🧠' },
    { name: 'Power BI Data Analyst', provider: 'Microsoft', year: '2024', icon: '⚡' },
    { name: 'SPSS Statistical Analysis', provider: 'IBM', year: '2024', icon: '📋' }
  ];

  const journeyTimeline = [
    { 
      year: '2019', 
      title: 'Tech Journey Begins', 
      desc: 'Admitted to Technical University of Mombasa for Bachelor\'s in Mathematics and Computer Science. Built foundations in programming, mathematics, and computer systems.', 
      icon: '🎓' 
    },
    { 
      year: '2021–2022', 
      title: 'Tech Exploration', 
      desc: 'Explored web development, networking, and software engineering while continuing academic studies. Discovered passion for data science and analytics.', 
      icon: '🔍' 
    },
    { 
      year: '2023', 
      title: 'Data Specialization', 
      desc: 'Specialized in data science with strong skills in Excel, Python, SQL, Power BI, R, and SPSS. Completed certifications in R Programming, Excel Data Analysis, and Python for Data Science.', 
      icon: '📊' 
    },
    { 
      year: '2024', 
      title: 'Industry Experience', 
      desc: 'Started as Data Analyst Intern at Aqua Clara Kenya, later absorbed as Junior Data Analyst. Expanded experience through roles at CodSoft, Mentorness, and Phoenix Ke Analytics.', 
      icon: '💼' 
    },
    { 
      year: '2025', 
      title: 'Exploring ML & AI', 
      desc: 'Currently advancing into Data Science, Machine Learning and AI through ALX Africa program. Leading CASPAL Tech Consultancy, mentoring learners, and helping organizations adopt data-driven solutions.', 
      icon: '🚀' 
    }
  ];

  const projects = [
    {
      title: 'AI-Powered Predictive Analytics',
      description: 'Built a machine learning system that predicts customer behavior with 94% accuracy using ensemble methods.',
      tech: ['Python', 'TensorFlow', 'Excel', 'Power BI'],
      link: '#'
    },
    {
      title: 'Interactive Data Dashboard',
      description: 'Created real-time analytics dashboard processing 1M+ data points for business intelligence.',
      tech: ['Power BI', 'Excel', 'Python', 'SQL'],
      link: '#'
    },
    {
      title: 'Statistical Analysis Platform',
      description: 'Developed comprehensive statistical analysis platform using SPSS and R for advanced research analytics.',
      tech: ['SPSS', 'R', 'Excel', 'Python'],
      link: '#'
    },
    {
      title: 'NLP Sentiment Analysis Tool',
      description: 'Developed sentiment analysis tool for social media monitoring with advanced NLP techniques.',
      tech: ['Python', 'NLP', 'Predictive Modeling'],
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Floating Particles */}
      <ParticleBackground />

      {/* Creative Glassmorphism Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 glass-nav rounded-2xl px-8 py-3 z-50 animate-fade-in-up">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Casmir Maturi
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 ml-12">
            <a href="#about" className="relative group text-foreground hover:text-primary transition-all duration-300">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="relative group text-foreground hover:text-primary transition-all duration-300">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#journey" className="relative group text-foreground hover:text-primary transition-all duration-300">
              Journey
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="relative group text-foreground hover:text-primary transition-all duration-300">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group text-foreground hover:text-primary transition-all duration-300">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* View Resume CTA */}
            <Button size="sm" variant="outline" className="ml-4 border-primary/30 hover:bg-primary hover:text-primary-foreground glow-button">
              <FileDown className="mr-2 h-3 w-3" />
              View Resume
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border/20">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5">About</a>
              <a href="#skills" className="hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5">Skills</a>
              <a href="#journey" className="hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5">Journey</a>
              <a href="#portfolio" className="hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-primary/5">Contact</a>
              <Button size="sm" variant="outline" className="mt-2 border-primary/30 hover:bg-primary hover:text-primary-foreground">
                <FileDown className="mr-2 h-3 w-3" />
                View Resume
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
        <div className="absolute inset-0 hero-gradient opacity-15"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Data Science Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Section */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="profile-frame w-80 h-80">
                  <img 
                    src={profilePhoto} 
                    alt="Casmir Maturi - Data Scientist" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Enhanced livelier bubble particles around profile */}
                <div className="absolute -inset-28 pointer-events-none">
                  {[...Array(16)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-particle-float"
                      style={{
                        left: `${10 + Math.cos(i * 22.5 * Math.PI / 180) * 80}%`,
                        top: `${10 + Math.sin(i * 22.5 * Math.PI / 180) * 80}%`,
                        width: `${Math.random() * 12 + 6}px`,
                        height: `${Math.random() * 12 + 6}px`,
                        background: i % 4 === 0 ? 'hsl(var(--primary))' : 
                                   i % 4 === 1 ? 'hsl(var(--secondary))' : 
                                   i % 4 === 2 ? 'hsl(var(--accent))' : 
                                   'hsl(32 75% 70%)',
                        opacity: Math.random() * 0.4 + 0.3,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: `${Math.random() * 6 + 4}s`,
                        boxShadow: i % 2 === 0 ? '0 0 20px hsl(var(--primary) / 0.3)' : '0 0 15px hsl(var(--secondary) / 0.2)'
                      }}
                    />
                  ))}
                  {/* Additional smaller floating particles */}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`small-${i}`}
                      className="absolute rounded-full animate-particle-float"
                      style={{
                        left: `${25 + Math.cos((i + 8) * 45 * Math.PI / 180) * 50}%`,
                        top: `${25 + Math.sin((i + 8) * 45 * Math.PI / 180) * 50}%`,
                        width: '4px',
                        height: '4px',
                        background: 'hsl(var(--accent))',
                        opacity: 0.7,
                        animationDelay: `${i * 0.4}s`,
                        animationDuration: `${Math.random() * 3 + 8}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="text-center lg:text-left animate-fade-in-up">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Casmir Maturi</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8">
                Data Scientist transforming complex data into actionable insights through 
                <span className="text-secondary font-semibold"> AI, Machine Learning, and Advanced Analytics</span>.
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="glow-button group relative overflow-hidden">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <span className="relative z-10">View My Work</span>
                </Button>
                <Button variant="outline" size="lg" className="group border-primary/20 hover:border-primary hover:bg-primary/5">
                  <FileDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  I'm Casmir Maturi, a passionate Data Scientist driven by curiosity, creativity, and problem-solving. 
                  I specialize in designing data-driven solutions that turn numbers into stories and insights that empower smarter decisions.
                </p>
                <p className="mb-4">
                  With a strong background in AI, statistical modeling, data visualization, and cloud technologies, 
                  I blend analytical precision with innovative thinking to uncover hidden patterns and deliver measurable results.
                </p>
                <p>
                  When I'm not crunching data, you'll find me exploring new AI trends, mentoring young tech enthusiasts, 
                  and building tools that make technology more human-centered.
                </p>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Innovation</h3>
                  <p className="text-muted-foreground">
                    Transforming complex datasets into business value through advanced analytics and machine learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Section Divider */}
      <div className="section-divider w-full my-12"></div>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I bring together a diverse set of technical and analytical skills to solve real-world problems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.name} className="skill-card group cursor-pointer border-primary/10 hover:border-primary/30">
                <CardContent className="p-6 text-center">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform">
                    {skill.category === 'Programming' && '💻'}
                    {skill.category === 'ML/AI' && '🧠'}
                    {skill.category === 'Data Processing' && '📊'}
                    {skill.category === 'Visualization' && '📈'}
                    {skill.category === 'Analysis' && '📋'}
                    {skill.category === 'Cloud' && '☁️'}
                    {skill.category === 'Database' && '🗄️'}
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section Divider */}
      <div className="section-divider w-full my-12"></div>

      {/* Certifications & My Journey Section */}
      <section id="journey" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Certifications & My Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From academic foundations to industry expertise - my path in data science and analytics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
              <div className="grid gap-6">
                {certifications.map((cert, index) => (
                  <div key={cert.name} className="cert-badge rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{cert.name}</h4>
                        <p className="opacity-90">{cert.provider} • {cert.year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* My Journey Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
                
                <div className="space-y-8">
                  {journeyTimeline.map((item, index) => (
                    <div key={item.year} className="relative flex items-start gap-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold relative z-10">
                        {item.icon}
                      </div>
                      <div className="flex-1 bg-card rounded-lg p-6 shadow-lg border border-primary/10">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-lg text-primary">{item.title}</h4>
                          <span className="text-sm text-muted-foreground bg-secondary/10 px-3 py-1 rounded-full">{item.year}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here are some of my featured projects that showcase how I use data science, AI, and machine learning to solve practical problems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="project-card group cursor-pointer h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download my comprehensive resume to explore my full journey in data science, certifications, and professional experience.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h3 className="font-semibold text-lg mb-1">Education</h3>
                <p className="text-sm text-muted-foreground">Bachelor's in Mathematics & Computer Science</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💼</div>
                <h3 className="font-semibold text-lg mb-1">Experience</h3>
                <p className="text-sm text-muted-foreground">Data Analyst roles across multiple companies</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📜</div>
                <h3 className="font-semibold text-lg mb-1">Certifications</h3>
                <p className="text-sm text-muted-foreground">6+ Professional Data Science Certifications</p>
              </div>
            </div>
            
            <Button size="lg" className="glow-button group relative overflow-hidden">
              <FileDown className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform relative z-10" />
              <span className="relative z-10">Download Resume PDF</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect! 🚀</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to collaborations, consulting, or knowledge-sharing in the world of Data Science and AI.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Data?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you need predictive analytics, machine learning solutions, or data visualization, 
              let's discuss how we can turn your data into your competitive advantage.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Send Me a Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">Casmir Maturi</div>
            <p className="text-muted-foreground mb-6">Data Scientist & AI Enthusiast</p>
            
            <div className="flex justify-center gap-6 mb-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                © 2025 Casmir Maturi. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;