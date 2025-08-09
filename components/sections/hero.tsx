"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { personalInfo, calculateAge } from "@/lib/data"
import { MapPin, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const age = calculateAge(personalInfo.birthDate)

  return (
    <section className="section-container min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            <Avatar className="w-32 h-32 ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback className="text-2xl">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background flex items-center justify-center">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold gradient-text">
            {personalInfo.name}
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            {personalInfo.title}
          </p>
          <Badge variant="cyber" className="text-sm px-4 py-2">
            {personalInfo.specialization}
          </Badge>
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {personalInfo.location}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            {personalInfo.email}
          </div>
          <Badge variant="outline" className="px-3">
            Age: {age}
          </Badge>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button variant="cyber" size="lg" className="group" asChild>
            <a href="#contact">
              Get In Touch
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <a 
              href={personalInfo.social.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <a 
              href={personalInfo.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}