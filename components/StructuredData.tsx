/**
 * Structured Data Component
 * Renders JSON-LD structured data for SEO
 */

import { generateOrganizationSchema, generateWebSiteSchema, siteConfig } from "@/lib/seo"

interface StructuredDataProps {
  data: object | object[]
  type?: "organization" | "website" | "custom"
}

export function StructuredData({ data, type = "custom" }: StructuredDataProps) {
  // Handle array of schemas or single schema
  const schemas = Array.isArray(data) ? data : [data]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

/**
 * Default Structured Data for Root Layout
 * Includes Organization and WebSite schemas
 */
export function DefaultStructuredData() {
  return (
    <StructuredData
      data={[
        generateOrganizationSchema(),
        generateWebSiteSchema()
      ]}
    />
  )
}


