import { AnimatedCounter as BaseAnimatedCounter } from './ScrollReveal'

type Props = {
  to: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({ to, duration, className = '', prefix = '', suffix = '' }: Props) {
  return (
    <BaseAnimatedCounter end={to} duration={duration} className={className} prefix={prefix} suffix={suffix} />
  )
}

