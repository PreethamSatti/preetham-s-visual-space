import { motion } from 'framer-motion';

const skills = [
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Adobe Illustrator', level: 85 },
  { name: 'Adobe Premiere Pro', level: 88 },
  { name: 'Adobe After Effects', level: 82 },
  { name: 'Figma', level: 80 },
  { name: 'Poster Design', level: 95 },
  { name: 'Graphic Design', level: 92 },
  { name: 'Video Editing', level: 88 },
];

const Skills = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-center mb-4">
            SKILLS & <span className="text-gold italic">EXPERTISE</span>
          </h2>
          <p className="font-body text-muted-foreground text-center mb-12">
            1+ years of hands-on experience with Adobe Creative Suite
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-sm font-medium">{skill.name}</span>
                  <span className="font-body text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
