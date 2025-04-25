import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-l from-[#333333] to-[#4B4B4B] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#4B4B4B] p-6 rounded-lg shadow-lg text-white">
          
          <h2 className="text-4xl font-bold text-center text-yellow-400 mb-6">About Me</h2>
          <section className="flex flex-col items-center mb-8">
            
            <Image
              src="/about.jpg"
              alt="Your Name"
              width={40}
              height={40}
              className="rounded-full w-40 h-40 mb-4 border-4 border-yellow-400"
            />
            <p className="text-lg mb-4">
              Hello! I'm Chandan Pargi, the creator of <strong>Plays Go</strong>. I built this platform to help gamers find and connect with other players for their favorite games. Whether you're looking for teammates, players for a match, or want to share your gaming experience, Plays Go is here to help!
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">My Development Journey</h3>
            <p className="text-lg mb-4">
              My web development journey began during my college years when I started learning the basics of HTML, CSS, and JavaScript. As I explored more, I realized the power of frameworks like React.js and Next.js. I dove deeper into these technologies, and after completing several projects, I wanted to build something that could help others.
            </p>
            <p className="text-lg mb-4">
              Building <strong>Plays Go</strong> was a challenging yet exciting experience. It allowed me to apply everything I had learned and also gave me the opportunity to explore new tools like Firebase and NextAuth for user authentication.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Technologies I Used</h3>
            <p className="text-lg mb-4">
              Here are some of the key technologies I used to build <strong>Plays Go</strong>:
            </p>
            <ul className="list-disc pl-5">
              <li>React.js for building the user interface</li>
              <li>Next.js for server-side rendering and routing</li>
              <li>Tailwind CSS for styling and responsive design</li>
              <li>Firebase for database management and authentication</li>
              <li>NextAuth for managing user sessions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Connect with Me</h3>
            <p className="text-lg mb-4">
              Feel free to connect with me on any of the platforms below. I would love to hear from you, whether it’s about suggestions for improving Plays Go or just a friendly chat about gaming!
            </p>
            <div className="flex justify-center space-x-10">

              <a
                href="https://github.com/chandanrx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 text-center"
              >
                <i className="fab fa-github fa-3x"></i>
                <p className="mt-2 text-yellow-400">GitHub</p>
              </a>

              <a
                href="https://www.linkedin.com/in/chandan-pargi-459272187"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 text-center"
              >
                <i className="fab fa-linkedin fa-3x"></i>
                <p className="mt-2 text-yellow-400">LinkedIn</p>
              </a>

              <a
                href="https://www.youtube.com/@rxn013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 text-center"
              >
                <i className="fab fa-youtube fa-3x"></i>
                <p className="mt-2 text-yellow-400">YouTube</p>
              </a>

              <a
                href="https://twitter.com/rxn_13"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-400 text-center"
              >
                <i className="fab fa-x-twitter fa-3x"></i>
                <p className="mt-2 text-yellow-400">X (Twitter)</p>
              </a>
            </div>
          </section>


          <section>
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Contact Me</h3>
            <p className="text-lg mb-4">
              If you'd like to collaborate, discuss a project, or just say hello, feel free to reach out to me via email at: 
              <a href="mailto:your-email@example.com" className="text-yellow-400 hover:underline">chandan.rxn@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
