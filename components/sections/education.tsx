"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { education } from "@/lib/data"
import { ExternalLink, GraduationCap, Calendar, User } from "lucide-react"
import { motion } from "framer-motion"

export function Education() {
  return (
    <section id="education" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Academic Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey in geology, GIS, and geospatial technologies
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism hover:bg-card/80 transition-all duration-300 group border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {edu.link ? (
                          <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 hover:underline"
                          >
                            <GraduationCap className="w-5 h-5" />
                            {edu.degree}
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2">
                            <GraduationCap className="w-5 h-5" />
                            {edu.degree}
                          </div>
                        )}
                      </CardTitle>

                      <CardDescription className="text-base font-medium text-foreground">
                        {edu.institution}
                      </CardDescription>

                      {edu.supervisor && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>
                            Supervisor: {edu.supervisorLink ? (
                              <a
                                href={edu.supervisorLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {edu.supervisor}
                              </a>
                            ) : (
                              edu.supervisor
                            )}
                          </span>
                        </div>
                      )}

                      {edu.gpa && (
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="font-medium">
                            GPA: {edu.gpa}
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-2">
                      <Badge
                        variant={edu.status === 'upcoming' ? 'cyber' : 'outline'}
                        className="whitespace-nowrap"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        {edu.period}
                      </Badge>

                      {edu.status === 'upcoming' && (
                        <Badge variant="cyber" className="text-xs">
                          Upcoming
                        </Badge>
                      )}

                      {edu.status === 'completed' && (
                        <Badge variant="outline" className="text-xs">
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Education Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">BSc</div>
              <div className="text-sm text-muted-foreground">Geology & Geo-environment</div>
              <div className="text-xs text-muted-foreground mt-1">7.4/10 GPA</div>
            </CardContent>
          </Card>

          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">MSc</div>
              <div className="text-sm text-muted-foreground">Geographic Information Systems</div>
              <div className="text-xs text-muted-foreground mt-1">Starting Sep 2025</div>
            </CardContent>
          </Card>

          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">6+</div>
              <div className="text-sm text-muted-foreground">Years of Study</div>
              <div className="text-xs text-muted-foreground mt-1">Academic Excellence</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
