"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { publications } from "@/lib/data"
import { ExternalLink, FileText, Calendar, Users } from "lucide-react"
import { motion } from "framer-motion"

export function Publications() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "accepted":
        return "bg-blue-500/20 text-blue-300 border-blue-500/30"
      case "thesis":
        return "bg-purple-500/20 text-purple-300 border-purple-500/30"
      case "unpublished":
        return "bg-orange-500/20 text-orange-300 border-orange-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "published":
        return "Published"
      case "accepted":
        return "Accepted"
      case "thesis":
        return "Thesis"
      case "unpublished":
        return "Manuscript"
      default:
        return status
    }
  }

  return (
    <section id="publications" className="section-container">
      <div className="space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text">Publications & Research</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Scientific contributions to coastal erosion research and geospatial analysis
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.div
              key={publication.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism hover:bg-card/80 transition-all duration-300 group">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3 flex-1">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors leading-relaxed">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 mt-1 flex-shrink-0" />
                          <span>{publication.title}</span>
                        </div>
                      </CardTitle>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{publication.authors}</span>
                        </div>
                        
                        {publication.journal && (
                          <CardDescription className="text-sm font-medium">
                            {publication.journal}
                          </CardDescription>
                        )}
                        
                        {publication.note && (
                          <div className="text-xs text-muted-foreground italic">
                            {publication.note}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start lg:items-end gap-3">
                      <div className="flex items-center gap-2">
                        <Badge 
                          className={`${getStatusColor(publication.status)} border`}
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {publication.year}
                        </Badge>
                        
                        <Badge 
                          variant="outline"
                          className={getStatusColor(publication.status)}
                        >
                          {getStatusLabel(publication.status)}
                        </Badge>
                      </div>
                      
                      {publication.url && (
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={publication.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group/btn"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Publication
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Publications Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">{publications.length}</div>
              <div className="text-sm text-muted-foreground">Total Publications</div>
            </CardContent>
          </Card>
          
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">
                {publications.filter(p => p.status === 'published').length}
              </div>
              <div className="text-sm text-muted-foreground">Published</div>
            </CardContent>
          </Card>
          
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">
                {publications.filter(p => p.status === 'accepted').length}
              </div>
              <div className="text-sm text-muted-foreground">Accepted</div>
            </CardContent>
          </Card>
          
          <Card className="text-center glass-morphism">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold gradient-text">2022</div>
              <div className="text-sm text-muted-foreground">First Publication</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}