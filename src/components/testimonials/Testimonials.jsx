import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';
import { HiSparkles } from 'react-icons/hi2';

// Sample testimonials data - شما می‌تونید این رو با داده‌های واقعی LinkedIn جایگزین کنید
const testimonialsData = [
  {
    id: 1,
    name: "Nelman Ranasinghe",
    position: "Frontend Developer, Web and UX/UI | Content Creator",
    company: "",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFsWnLBK21SQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702486877940?e=1758153600&v=beta&t=Oa4yJmcbrGHPvFUr08HCJMC_GszfMA2YpJnLM-JAz7k",
    text: "I had the pleasure of collaborating with Hamidreza Delshad, a superb full-stack developer specialising in JavaScript, TypeScript, React, Next, Node, Express, and MongoDB. Hamidreza is highly skilled in creating scalable, user-centric, aesthetically pleasing and resilient apps by fusing strong technical talents with a clear sense of design. He is an invaluable asset to any team because of his proactive approach to problem-solving and cooperation attitude. I heartily and highly recommend Hamidreza.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/nelman/"
  },
  {
    id: 2,
    name: "Adel Ansari",
    position: "Software Developer",
    company: "Nordea",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGb2X5Fy9Hymw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1698993881247?e=1758153600&v=beta&t=DoTujLOQff-qMvd9RRbisoXnEND4HcT7sXNg3NBAv_Q",
    text: "I had the pleasure of working with Hamid on a web application project for a hackathon challenge. Hamid is a skilled and knowledgeable front-end developer who can deliver high-quality features in a short time. He was also an effective team leader who took the initiative to coordinate the tasks and communicate the progress. Hamid was always open for discussion and ready to contribute with his ideas and expertise. He was patient and supportive with his teammates and helped us overcome the challenges we faced. Working with Hamid was a great experience and I highly recommend him as a software developer.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/adel-ansari/"
  },
  {
    id: 3,
    name: "Reza Ardalan",
    position: "founder - Director",
    company: "Neobuild NSW",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEPkE7LL-Zxww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724892931509?e=1758153600&v=beta&t=qga6DFuYNrcbtebEArEUsrXeKHNT34MASdAckWDKNJc",
    text: "I am writing to recommend Hamid for his exceptional work in a graphic design highly. I had the pleasure of working with Hamid when he designed the logo, brochure, poster and everything we need for our company in Australia. Hamid's attention to detail, creativity, and ability to understand our brand's vision and mission were truly outstanding. Throughout the design process, Hamid was a pleasure to work with. He was always willing to listen to our feedback and make changes accordingly, and he consistently exceeded our expectations with his final designs.Overall, I highly recommend Hamid for any graphic design work. He is an incredibly talented designer with a keen eye for detail and a deep understanding of branding. I do not doubt that he would be a valuable asset to any team.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/reza-bani-ardalan-a6a59038/"
  },
  {
    id: 4,
    name: "EHSAN (Ehsansajedi) SAJEDI",
    position: "Personal Branding",
    company: "",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQEmLWnbj_XqRg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1671364818320?e=1755968400&v=beta&t=fKXY2oEXgiACjyuKNgZ8muUo04vf6Ginme55cXpq-Us",
    text: "I worked with Hamidreza Delshad in the AmighCultural Complex and we were both senior managers in the organization. he was the director of the graphics department and executive director of the amigh complex and I was the real estate sales manager. we were experts in the organization and were the masterminds of the system. we were very friendly and literate and fully aware of the psychology of negotiation and presence in the main and vital parts of the organization.Due to her very powerful vision in the topic of advertising psychology, he helped me a lot in the sales and marketing of the collection and made a significant contribution to my success.",
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/ehsansajedi/"
  },
  {
    id: 5,
    name: "Micheal Ulasi",
    position: "Technical Lead Cloud Solution specialist",
    company: "Swedcon18 AB",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQF1YnNMZIriTw/profile-displayphoto-shrink_800_800/B4DZhvX1fuGsAk-/0/1754215176669?e=1758153600&v=beta&t=cNRk0-iPn1dVhZgP_hPIqiR6vfrlfdDAbrsduAUjyEk",
    text: `I am writing this recommendation for Hamid Reza Delshad, who worked as a frontend developer with Swedocn18. I had the pleasure of working with Hamid for several years and can confidently say that he is an outstanding developer with exceptional skills and a strong work ethic.
           Hamid is an expert in frontend development and demonstrated a deep understanding of web technologies such as HTML, CSS, and JavaScript. He consistently delivered high-quality work on time and within budget. His attention to detail and ability to troubleshoot and solve complex problems was instrumental in the success of many of our projects.
           Apart from his technical skills, Hamid is a great team player and a pleasure to work with. He is always willing to lend a helping hand and takes initiative to ensure that the team's goals are met. His positive attitude, strong communication skills, and ability to collaborate effectively with others made him a valuable asset to our team.
           Overall, I highly recommend Hamid Reza Delshad for any frontend development role. He is a talented and dedicated developer who consistently goes above and beyond to deliver quality work. I am confident that he will make a positive contribution to any organization that he joins.`,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/michealulasi/"
  },
  {
    id: 6,
    name: "Alina Samoteev",
    position: "Experienced MERN Stack Developer | TypeScript Enthusiast",
    company: "Freelancing Success",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHtFL0VK9lvsw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694723832048?e=1758153600&v=beta&t=Q_eRz12oSVZAbMr9nkcyX5aekzOpKPhATmZXVKv1O8E",
    text: `I highly recommend Hamid to anyone seeking a skilled developer and exceptional team leader. Having worked with Hamid, I can attest to his outstanding coding abilities and excellent design taste. He consistently produces clean and understandable code that is visually appealing.
           Hamid is a talented leader who is patient and supportive with his colleagues. He values the opinions of others and makes sure that everyone has a voice and choice in the decision-making process. He listens carefully to the ideas and suggestions of his team members, making the right choices for the team.
           Under Hamid's leadership, his team has never had any coding issues. He creates a comfortable work environment where everyone feels heard and respected. Additionally, Hamid has a great personality, a fantastic sense of humor, and is a pleasure to work with.
           In summary, I highly recommend Hamid as an excellent addition to any team. He is a skilled developer, an exceptional team leader, and an all-around great person to work with.`,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/alina-samoteev-627836a5/"
  },
  {
    id: 7,
    name: "Hossein Ashrafipoor",
    position: "Full stack developer | NextJS | NestJS",
    company: "Freelancing",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQEd_e944DA5yA/profile-framedphoto-shrink_800_800/B4DZbbs1bgHQAk-/0/1747442685907?e=1755968400&v=beta&t=-NZoHGepv4YJ7mA_bh_48EEyc-Tzot-dZJ1zraHNUaw",
    text: `Hamid has consistently shown himself to be the foundation of our efforts. Even in the most trying circumstances, he maintains a positive outlook on his profession. Nobody with his degree of experience can equal his breadth of knowledge and experience in web development.`,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/ashrafipoor/"
  },
  {
    id: 8,
    name: "Iman Hosseini",
    position: "Business Analyst | Power Platform Developer",
    company: "Volvo Group",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFd8-Zu3k4CeA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1711024731611?e=1758153600&v=beta&t=uD95_CUD7GnBtIFlPY9dV_Z7JOz_-uvGb8rcKLPQ-Wo",
    text: `I had the pleasure of working with Hamid during their time as a junior full stack developer on our team. I was particularly impressed by their depth of knowledge and experience in UI/UX, which they gained during their previous senior role.
           Hamid brought a unique perspective to our team, with their keen eye for design and ability to develop user-friendly interfaces. They were able to bring this skill set to their development work, creating products that were not only functional but also aesthetically pleasing and intuitive to use.
           In addition, Hamid was a great team player and collaborator, always willing to jump in and help others, whether it was with UI design or backend development. Their positive attitude and strong work ethic made them a pleasure to work with, and I would highly recommend them for any future roles in the industry.
           Overall, Hamid is an incredibly talented individual with a wealth of experience in both UI/UX and full stack development. I believe that they have a bright future ahead of them and will be an asset to any team they join.`,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/iman-hosseini-81098283/"
  },
  {
    id: 9,
    name: "Farzan Wadood",
    position: "Software Developer",
    company: "Leica Geosystems",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH-dltzU84Xgw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727262653861?e=1758153600&v=beta&t=l2gGLW0CSlrckvmGViup27EW8uZ8rJHyRT3epEV-THA",
    text: `Hamid is highly skilled, technically sound and experienced person in the field of Web Development. I really recommend him for any thing related to Web Development. He has amazing skills in graphic designing and he is Pro-Active and self-learner.`,
    rating: 5,
    linkedinUrl: "https://www.linkedin.com/in/farzanwadood/"
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-16 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12 animate-slide-down">
        <div className="flex items-center justify-center gap-2 mb-4">
          <HiSparkles className="dark:text-dark-accent light:text-light-accent animate-pulse text-2xl" />
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            What People Say
          </h2>
          <HiSparkles className="dark:text-dark-primary light:text-light-primary animate-pulse text-2xl" />
        </div>
        <p className="dark:text-dark-muted light:text-light-muted max-w-2xl mx-auto">
          Recommendations from colleagues and clients I've had the pleasure to work with
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-8 lg:p-12 hover-lift relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-dark-primary/10 to-dark-secondary/10 rounded-full blur-3xl"></div>
          
          {/* Quote marks */}
          <div className="absolute top-6 left-6 text-6xl dark:text-dark-primary/20 light:text-light-primary/20 font-serif">
            "
          </div>

          <div className="relative z-10">
            {/* Current testimonial */}
            <div className="text-center animate-slide-up" key={currentIndex}>
              {/* Profile Image */}
              <div className="relative w-20 h-20 mx-auto mb-6">
                <img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="w-full h-full rounded-full object-cover border-4 dark:border-dark-primary/30 light:border-light-primary/30"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                  <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-sm lg:text-lg dark:text-dark-text light:text-light-text leading-relaxed mb-6 max-w-3xl mx-auto">
                {testimonialsData[currentIndex].text}
              </blockquote>

              {/* Author Info */}
              <div className="space-y-1">
                <h4 className="font-semibold text-lg dark:text-dark-text light:text-light-text">
                  {testimonialsData[currentIndex].name}
                </h4>
                <p className="dark:text-dark-muted light:text-light-muted">
                  {testimonialsData[currentIndex].position}
                </p>
                <p className="text-sm dark:text-dark-primary light:text-light-primary font-medium">
                  {testimonialsData[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center dark:text-dark-text light:text-light-text hover:scale-110 transition-all duration-300 hover-lift"
        >
          <HiChevronLeft className="w-6 h-6" />
        </button>
        
        <button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center dark:text-dark-text light:text-light-text hover:scale-110 transition-all duration-300 hover-lift"
        >
          <HiChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'dark:bg-dark-primary light:bg-light-primary scale-125'
                  : 'dark:bg-dark-muted/30 light:bg-light-muted/30 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="text-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-xs dark:text-dark-muted light:text-light-muted hover:text-dark-primary transition-colors duration-300"
          >
            {isAutoPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-scroll
          </button>
        </div>
      </div>
    </section>
  );
}