"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { courses, international, volunteering, conferences, military } from "@/lib/data"
import { 
  ExternalLink, 
  Award, 
  Globe, 
  Heart, 
  Users, 
  Shield,
  Calendar,
  MapPin,
  User,
  FileCheck
} from "lucide-react"
import { motion } from "framer-motion"

export function Additional() {
  return (
    <section id="additional" className="section-container">
      <div className="space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Additional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuing education, international programs, community service, and professional development
          </p>
        </motion.div>

        {/* Online Courses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Online Courses & Certifications</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-morphism hover:bg-card/80 transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {course.provider}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                    
                    <Button variant="ghost" size="sm" asChild className="w-full">
                      <a 
                        href={course.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileCheck className="w-4 h-4 mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* International Programs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">International Programs</h3>
          </div>
          
          <div className="space-y-4">
            {international.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism hover:bg-card/80 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {program.title}
                        </CardTitle>
                        
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{program.organization} • {program.location}</span>
                        </div>
                        
                        {program.supervisor && (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <User className="w-4 h-4" />
                            <span>Supervisor: {program.supervisor}</span>
                          </div>
                        )}
                        
                        {program.program && (
                          <Badge variant="outline" className="w-fit">
                            {program.program}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <Badge 
                          variant={program.status === 'current' ? 'cyber' : 'outline'}
                          className="whitespace-nowrap"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {program.period}
                        </Badge>
                        
                        {program.status === 'current' && (
                          <Badge variant="cyber" className="text-xs">
                            Current
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Volunteering & Community Service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold">Volunteering & Community Service</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteering.map((volunteer, index) => (
              <motion.div
                key={volunteer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-morphism hover:bg-card/80 transition-all duration-300 group border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {volunteer.title}
                    </CardTitle>
                    
                    <CardDescription className="text-base">
                      {volunteer.organization}
                    </CardDescription>
                    
                    {volunteer.note && (
                      <div className="text-sm text-muted-foreground">
                        {volunteer.note}
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge 
                        variant={volunteer.status === 'current' ? 'cyber' : 'outline'}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {volunteer.period}
                      </Badge>
                      
                      {volunteer.status === 'current' && (
                        <Badge variant="cyber" className="text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Conferences & Military Service */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Conferences */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Conferences</h3>
            </div>
            
            <div className="space-y-4">
              {conferences.map((conference, index) => (
                <Card key={conference.title} className="glass-morphism">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">{conference.title}</h4>
                      <div className="text-sm text-muted-foreground">
                        {conference.organization}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {conference.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {conference.date}
                        </Badge>
                        {conference.status === 'upcoming' && (
                          <Badge variant="cyber" className="text-xs">
                            Upcoming
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Military Service */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Military Service</h3>
            </div>
            
            <div className="space-y-4">
              {military.map((service, index) => (
                <Card key={service.title} className="glass-morphism border-l-4 border-l-green-500">
                  <CardContent className="pt-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">{service.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {service.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {service.period}
                        </Badge>
                        {service.duration && (
                          <span className="text-xs text-muted-foreground">
                            {service.duration}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}