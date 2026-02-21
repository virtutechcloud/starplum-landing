import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}

export function formatConfidence(confidence: number): string {
  return `${(confidence * 100).toFixed(1)}%`
}

export function getStatusColor(status: string): string {
  switch (status) {
    case 'indexed':
      return 'bg-green-100 text-green-800'
    case 'needsReview':
      return 'bg-yellow-100 text-yellow-800'
    case 'processing':
      return 'bg-blue-100 text-blue-800'
    case 'reviewing':
      return 'bg-purple-100 text-purple-800'
    case 'completed':
      return 'bg-green-100 text-green-800'
    case 'green':
      return 'bg-green-100 text-green-800'
    case 'yellow':
      return 'bg-yellow-100 text-yellow-800'
    case 'red':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export function generateVersion(version: string, existingVersions: string[]): string {
  if (!existingVersions.includes(version)) {
    return version
  }

  // Find the next available version number
  let counter = 1
  while (existingVersions.includes(`${version} v${counter}`)) {
    counter++
  }
  return `${version} v${counter}`
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export function groupBy<T, K extends PropertyKey>(
  array: T[],
  key: (item: T) => K
): Record<K, T[]> {
  return array.reduce((groups, item) => {
    const groupKey = key(item)
    if (!groups[groupKey]) {
      groups[groupKey] = []
    }
    groups[groupKey].push(item)
    return groups
  }, {} as Record<K, T[]>)
}

export function sortBy<T>(
  array: T[],
  key: keyof T,
  direction: 'asc' | 'desc' = 'asc'
): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (aVal < bVal) return direction === 'asc' ? -1 : 1
    if (aVal > bVal) return direction === 'asc' ? 1 : -1
    return 0
  })
}

export function calculateAverageConfidence(documents: { confidence: number }[]): number {
  if (documents.length === 0) return 0
  const sum = documents.reduce((acc, doc) => acc + doc.confidence, 0)
  return sum / documents.length
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}



