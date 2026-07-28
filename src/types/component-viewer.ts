export type ViewerMode = 'preview' | 'code'

export type CodeLanguage = 'html' | 'xml' | 'vue' | 'javascript' | 'typescript' | 'css'

export interface ComponentCardProps {
  title: string
  description?: string
  code: string
  language?: CodeLanguage
}
