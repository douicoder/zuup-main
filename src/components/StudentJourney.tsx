import { motion } from "framer-motion";
import { useState } from "react";
import TransparentMoza from "./TransparentMoza";

const StudentJourney = () => {

  const steps = [
    "Discovering Tech",
    "Finding Guidance",
    "Building Cool Stuff",
    "College Counseling",
    "Total Independence"
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      
      {/* Top Left Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -20, y: 20 }}
        whileInView={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="absolute hidden lg:block top-12 left-10 xl:left-20 w-80 h-80 pointer-events-none group"
      >
        <TransparentMoza src="/moza-graduate-inverted.png" alt="Moza" className="w-full h-full object-contain -rotate-12 transition-transform duration-700 group-hover:scale-110" />
      </motion.div>

      {/* Top Right Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
        whileInView={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute hidden lg:block top-32 right-10 xl:right-20 w-96 h-96 pointer-events-none group"
      >
        <TransparentMoza src="/moza-hacker-inverted.png" alt="Moza" className="w-full h-full object-contain rotate-6 transition-transform duration-700 group-hover:scale-110" />
      </motion.div>

      {/* Bottom Left Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: -20, y: -20 }}
        whileInView={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="absolute hidden lg:block bottom-32 left-10 xl:left-24 w-96 h-96 pointer-events-none group"
      >
        <TransparentMoza src="/moza-coffee-inverted.png" alt="Moza" className="w-full h-full object-contain rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" />
      </motion.div>

      {/* Bottom Right Moza */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, x: 20, y: -20 }}
        whileInView={{ opacity: 0.15, scale: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="absolute hidden lg:block bottom-12 right-10 xl:right-16 w-[400px] h-[400px] pointer-events-none group"
      >
        <TransparentMoza src="/moza-cool-inverted.png" alt="Moza" className="w-full h-full object-contain -rotate-6 transition-transform duration-700 group-hover:scale-125" />
      </motion.div>

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="flex justify-center mb-6 lg:hidden">
          <TransparentMoza src="/moza-graduate-inverted.png" alt="Moza Graduate" className="w-40 h-40 object-contain -rotate-6" />
        </div>
        <h2 
          className="text-5xl md:text-7xl font-bold text-primary mb-6 transition-all duration-300"
          style={{ fontFamily: "'Caveat', cursive", letterSpacing: "1px" }}
        >
          Imagine where one opportunity could take you.
        </h2>
        <p className="text-2xl text-muted-foreground mb-20 font-medium">
          The student journey.
        </p>

        <div className="flex flex-col items-center space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`text-2xl md:text-4xl font-bold tracking-tight ${idx === steps.length - 1 ? "text-primary" : "text-foreground"} transition-all duration-300`}
              >
                {step}
              </motion.div>
              
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 40, opacity: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 + 0.2 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-px bg-border my-4"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentJourney;
