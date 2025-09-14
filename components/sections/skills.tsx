"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { skills } from "@/lib/data"
import { motion } from "framer-motion"

import { Code, Library, Wrench } from "lucide-react"

export function Skills() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Wrench className="w-6 h-6" />
      case "Data Science & GIS":
        return <Code className="w-6 h-6" />
      case "Databases":
        return <Library className="w-6 h-6" />
      default:
        return <Wrench className="w-6 h-6" />
    }
  }

  const getSkillVariant = (category: string) => {
    switch (category) {
      case "python":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30"
      case "javascript":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-500/30"
      case "go":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30 hover:bg-purple-500/30"
      case "gis":
        return "bg-green-500/20 text-green-300 border-green-500/30 hover:bg-green-500/30"
      case "web":
        return "bg-pink-500/20 text-pink-300 border-pink-500/30 hover:bg-pink-500/30"
      case "css":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30"
      case "shell":
        return "bg-gray-500/20 text-gray-300 border-gray-500/30 hover:bg-gray-500/30"
      case "ssg":
        return "bg-red-500/20 text-red-300 border-red-500/30 hover:bg-red-500/30"
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/30 hover:bg-slate-500/30"
    }
  }

  return (
    <section id="skills" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A toolkit spanning geospatial analysis, software development, and modern web technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([categoryName, skillList], categoryIndex) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full glass-morphism hover:bg-card/80 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="text-2xl">{getCategoryIcon(categoryName)}</span>
                    {categoryName}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.02
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          className={`transition-all duration-200 cursor-default border ${getSkillVariant(skill.category)}`}
                        >
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
            <span className="text-muted-foreground">Python</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <span className="text-muted-foreground">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <span className="text-muted-foreground">GIS</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500/50"></div>
            <span className="text-muted-foreground">Web</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-500/50"></div>
            <span className="text-muted-foreground">Other</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
