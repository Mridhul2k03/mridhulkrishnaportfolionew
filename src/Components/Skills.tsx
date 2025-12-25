
interface SkillsData {
  technical: string[];
  soft: string[];
}

function Skills() {
  // Mock data based on your resume - in a real app, this would come from an API
  const skillsData: SkillsData = {
    technical: [
      'Python', 'Django', 'Django REST', 'Redis', 'React js', 'React ts',
      'MySQL', 'SQLite3', 'PostgreSQL', 'HTML 5', 'CSS 3', 'Bootstrap 5',
      'Tailwind CSS', 'JavaScript', 'Git', 'Github', 'Google Search Console',
      'Google Analytics', 'Cpanel', 'SEO', 'Deployment', 'Database development',
      'RESTfull API', 'CI/CD', '3rd party Library\'s', 'Railway', 
      'API rate limiting', 'Performance', 'Scalability', 'Security'
    ],
    soft: [
      'Team Management', 'Flexibility', 'Adaptability', 'Critical thinking',
      'Team Leadership', 'Problem solving'
    ]
  };

  const groupedSkills: { [key: string]: string[] } = {
    'Backend & Languages': ['Python', 'Django', 'Django REST', 'Redis', 'JavaScript'],
    'Databases': ['MySQL', 'SQLite3', 'PostgreSQL', 'Database development'],
    'Frontend': ['React js', 'React ts', 'HTML 5', 'CSS 3', 'Bootstrap 5', 'Tailwind CSS'],
    'DevOps & Tools': ['Git', 'Github', 'Cpanel', 'Deployment', 'CI/CD', 'Railway'],
    'Performance & Security': ['API rate limiting', 'Performance', 'Scalability', 'Security', 'Redis'],
    'Web Analytics': ['Google Search Console', 'Google Analytics', 'SEO'],
    'APIs & Libraries': ['RESTfull API', '3rd party Library\'s']
  };

  return (
    <div className="skills-section p-6 md:p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        Technical Expertise
      </h2>
      
      {/* Technical Skills Grid */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <div 
              key={category} 
              className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Soft Skills & Leadership
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillsData.soft.map((skill) => (
            <div 
              key={skill}
              className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Summary */}
      <div className="mt-10 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
        <p className="text-gray-700 dark:text-gray-300 text-center italic">
          <span className="font-semibold text-gray-800 dark:text-white">
            {skillsData.technical.length}+ technical skills
          </span>
          {' '}and{' '}
          <span className="font-semibold text-gray-800 dark:text-white">
            {skillsData.soft.length} soft skills
          </span>
          {' '}spanning backend development, database management, frontend integration, 
          DevOps, and team leadership for building scalable, high-performance web applications.
        </p>
      </div>
    </div>
  );
}

export default Skills;