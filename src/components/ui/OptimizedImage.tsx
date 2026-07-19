'use client'

import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  quality?: number
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
  fallbackSrc?: string
  onLoad?: () => void
  onError?: () => void
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fallbackSrc,
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (fallbackSrc && !hasError) {
      setImageSrc(fallbackSrc)
      setHasError(true)
    }
    onError?.()
  }

  const handleLoad = () => {
    onLoad?.()
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={quality}
      placeholder={placeholder}
      blurDataURL={blurDataURL}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        objectFit: 'cover',
      }}
    />
  )
}

// Specialized components for common use cases
export function ProfileImage({
  src,
  alt,
  size = 400,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  size?: number
  className?: string
  priority?: boolean
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full ${className}`}
      priority={priority}
      sizes={`${size}px`}
      quality={80}
    />
  )
}

export function PropertyImage({
  src,
  alt,
  width = 1200,
  height = 800,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-lg ${className}`}
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      quality={75}
    />
  )
}

export function HeroImage({
  src,
  alt,
  className = '',
  priority = true,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1920}
      height={1080}
      className={`w-full h-full ${className}`}
      priority={priority}
      sizes="100vw"
      quality={85}
    />
  )
}
