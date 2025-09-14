"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { experience } from "@/lib/data"
import { ExternalLink, MapPin, User, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey across research, development, and service industries
          </p>
        </motion.div>

        {/* Experience Categories */}
        <div className="space-y-12">
          {experience.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
              </div>

              {/* Positions */}
              <div className="space-y-4">
                {category.positions.map((position, positionIndex) => (
                  <motion.div
                    key={`${position.title}-${positionIndex}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: positionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-morphism hover:bg-card/80 transition-all duration-300 group border-l-4 border-l-primary">
                      <CardHeader>
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="space-y-2 flex-1">
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {'link' in position && position.link ? (
                                <a
                                  href={position.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 hover:underline"
                                >
                                  {position.title}
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              ) : (
                                position.title
                              )}
                            </CardTitle>

                            {'organization' in position && position.organization && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin className="w-4 h-4" />
                                <span>{position.organization}</span>
                                {'location' in position && position.location && <span>• {position.location}</span>}
                              </div>
                            )}

                            {'supervisor' in position && position.supervisor && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <User className="w-4 h-4" />
                                <span>Supervisor: {position.supervisor}</span>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col items-start lg:items-end gap-2">
                            <Badge
                              variant={position.status === 'current' ? 'cyber' : 'outline'}
                              className="whitespace-nowrap"
                            >
                              <Calendar className="w-3 h-3 mr-1" />
                              {position.period}
                            </Badge>

                            {position.status === 'current' && (
                              <Badge variant="cyber" className="text-xs">
                                Current
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>

                      {'description' in position && position.description && (
                        <CardContent>
                          <CardDescription className="text-base leading-relaxed">
                            {position.description}
                          </CardDescription>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>

          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Fields</div>
            </CardContent>
          </Card>

          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm text-muted-foreground">Supervisors</div>
            </CardContent>
          </Card>

          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
