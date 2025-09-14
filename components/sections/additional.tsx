"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { courses, conferences } from "@/lib/data"
import { 
  Award, 
  Users, 
  MapPin,
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
            Continuing education and professional development
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
      </div>
    </section>
  )
}