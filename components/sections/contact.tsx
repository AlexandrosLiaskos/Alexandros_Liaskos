"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { personalInfo, languages } from "@/lib/data"
import { Mail, MapPin, Github, Linkedin, Globe, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For questions, offers and further information feel free to visit my LinkedIn and Github pages or even send me an email.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="glass-morphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {languages.map((language) => (
                  <div key={language.language} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{language.language}</span>
                    <Badge variant="outline" className="text-xs">
                      {language.level}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-morphism h-full">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <CardDescription className="text-base">

                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* What I Can Help With */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">My current expertise:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Research & Analysis</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Geohazards research</li>
                        <li>• GIS analysis and modeling</li>
                        <li>• Remote sensing applications</li>
                        <li>• Geospatial data processing</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-primary">Software Development</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Scientific algorithms, apps and tools</li>
                        <li>• Web platforms and applications</li>
                        <li>• Automations and AI workflows/agents</li>
                        <li>• Data Visualization UIs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Contact Actions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Connect With Me:</h3>
                  <div className="flex flex-wrap gap-4">
                    <Button asChild className="flex-1 min-w-[200px]">
                      <a href={`mailto:${personalInfo.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="flex-1 min-w-[150px]">
                      <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>

                    <Button variant="outline" asChild className="flex-1 min-w-[150px]">
                      <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium">Usually responds within 24 hours</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Currently available for work offers, projects, and collaborative research.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
