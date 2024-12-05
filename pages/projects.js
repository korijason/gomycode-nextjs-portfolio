import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  
  return (
    <div>
      <Navbar />
      <h1>My Projects</h1>
      <div>
    
  <h1>"E-Commerce Platform"</h1>
      description:
        "A scalable e-commerce platform built with Next.js, Node.js, and MongoDB. Features include user authentication, product listings, shopping cart, and payment processing using Stripe.",
      technologies: "Next.js, Node.js, MongoDB, Stripe API",
    
    <h1>"Social Media App"</h1>
      description:
        "A dynamic social media application with real-time chat, post sharing, and user profiles. Built using React, Express.js, and Firebase for seamless performance.",
      technologies: "React, Express.js, Firebase, Socket.io",
   
<h1> "Project Management Tool"</h1>
      description:
        "A collaborative project management tool for teams to track tasks and deadlines. Features include Kanban boards, analytics dashboards, and role-based access control.",
      technologies: "Vue.js, Django, PostgreSQL",
   
   <h1> "Online Learning Platform"</h1>
      description:
        "An interactive learning platform offering courses, quizzes, and a discussion forum. Built with Angular, Spring Boot, and MySQL to handle thousands of users.",
      technologies: "Angular, Spring Boot, MySQL",
       
      
      </div>
    </div>
  );
}
