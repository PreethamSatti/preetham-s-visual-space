import { motion } from 'framer-motion';
import projectPoster from '@/assets/project-poster.jpg';
import projectBranding from '@/assets/project-branding.jpg';
import projectSocial from '@/assets/project-social.jpg';
import projectVideo from '@/assets/project-video.jpg';

const projects = [
  {
    id: 1,
    title: 'ABSTRACT POSTER',
    category: 'Poster Design',
    description: 'Geometric poster series',
    image: projectPoster,
  },
  {
    id: 2,
    title: 'BRAND IDENTITY',
    category: 'Branding',
    description: 'Complete brand identity system',
    image: projectBranding,
  },
  {
    id: 3,
    title: 'LIBERAMENTE ETS',
    category: 'Social Media',
    description: 'Instagram campaign design',
    image: projectSocial,
  },
  {
    id: 4,
    title: 'MOTION WORK',
    category: 'Video Editing',
    description: 'Video editing & motion graphics',
    image: projectVideo,
  },
];

const Works = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-card mb-4">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-body font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <span className="font-body text-xs text-muted-foreground">
                  0{project.id}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
